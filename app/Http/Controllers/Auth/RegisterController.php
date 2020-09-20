<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;

use App\Http\Controllers\Controller;

use App\Models\User;

class RegisterController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function register(Request $request)
    {
      // Is the email address already in use?
      if(User::where('email', '=', $request->input('email'))->exists()) {
        // Attempt to log them in
        if(Auth::attempt([
          'email' => $request->input('email'),
          'password' => $request->input('password')
        ])) {
          return response(null, 200);
        }
        else {
          return response(null, 409);
        }
      }
      else {
        // Validate the inputs and get the new user's information
        $newUserInfo = $request->validate([
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string'],
        ]);

        // Create the new user
        $newUser = User::create([
          'name' => '',
          'email' => $newUserInfo['email'],
          'password' => Hash::make($newUserInfo['password'])
        ]);
        
        // Create the new UserActive
        $newUser->active()->create([
          'id' => Str::uuid()->toString(),
          'listId' => null,
          'sublistId' => null,
          'isCompletedTodosVisible' => false
        ]);
        
        // Create the new UserSubscription
        $newUser->userSubscription()->create([
          'id' => Str::uuid()->toString(),
          'type' => 'TRIAL'
        ]);

        // Log the user in
        Auth::loginUsingId($newUser->id, true);

        // Return the response
        return response(null, 201);
      }
    }
}

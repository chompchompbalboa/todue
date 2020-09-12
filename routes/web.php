<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;

use App\Models\TodoList;

//-----------------------------------------------------------------------------
// App
//-----------------------------------------------------------------------------
Route::group([
    'prefix' => 'app',
    'middleware' => [ 'auth' ]
], function () {
    Route::get('/', function () {
        $user = Auth::user();
        if(is_null($user->userSubscription()->first())) {
          // Create the new UserActive
          $user->userSubscription()->create([
            'id' => Str::uuid()->toString(),
            'type' => 'TRIAL'
          ]);
        }
        return view('app')->with([
            'accessToken' => $user->createToken('authToken')->accessToken,
            'csrfToken' => csrf_token(),
            'active' => $user->active()->first(),
            'lists' => $user->lists()->orderBy('updatedAt', 'desc')->get(),
            'user' => $user,
            'userSubscription' => $user->userSubscription()->first()
        ]);
    })->name('app');
});

//-----------------------------------------------------------------------------
// Site
//-----------------------------------------------------------------------------
Route::get('/', function () {
    return view('site')->with([
        'csrfToken' => csrf_token()
    ]);
})->middleware('guest')->name('site');

//-----------------------------------------------------------------------------
// Authentication
//-----------------------------------------------------------------------------
Route::namespace('Auth')->group(function () {
  Route::post('/user/login', 'LoginController@login');
  Route::post('/user/logout', 'LoginController@logout');
  Route::post('/user/register', 'RegisterController@register');
});



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
        // Get the user
        $user = Auth::user();
        if(is_null($user->active)) {
          $user->active()->create([
            'id' => Str::uuid()->toString(),
            'userId' => $user->id,
            'listId' => null,
            'sublistId' => null,
            'todoId' => null,
            'isCompletedTodosVisible' => false
          ]);
        }
        // Create an api access token for the user
        $accessToken = $user->createToken('authToken')->accessToken;
        // Get the user's lists
        $userLists = $user->lists()->orderBy('updatedAt', 'desc')->get();
        // Get the active list
        $activeList = $user->lists()->first();
        // Return the view
        return view('app')->with([
            'accessToken' => $accessToken,
            'csrfToken' => csrf_token(),
            'active' => $user->active,
            'lists' => $userLists,
            'sublists' => $activeList ? $activeList->sublists()->get() : [],
            'sublistTags' => $activeList ? $activeList->sublistTags()->get() : [],
            'todos' => $activeList ? $activeList->todos()->get() : [],
            'tags' => $activeList ? $activeList->tags()->get() : [],
            'todoNotes' => $activeList ? $activeList->todoNotes()->get() : [],
            'todoTags' => $activeList ? $activeList->todoTags()->get() : [],
            'user' => $user
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



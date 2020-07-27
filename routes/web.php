<?php

use Illuminate\Support\Facades\Route;

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
        // Create an api access token for the user
        $accessToken = $user->createToken('authToken')->accessToken;
        // Get the user's lists
        $userLists = $user->lists()->orderBy('updatedAt', 'desc')->get();
        // Get the active list
        $activeList = $user->lists()->first();
        // Return the view
        return view('app')->with([
            'accessToken' => $accessToken,
            'active' => [
                'listId' => $activeList->id,
                'sublistId' => null
            ],
            'lists' => $userLists,
            'sublists' => $activeList->sublists()->get(),
            'sublistTags' => $activeList->sublistTags()->get(),
            'todos' => $activeList->todos()->get(),
            'tags' => $activeList->tags()->get(),
            'todoTags' => $activeList->todoTags()->get(),
        ]);
    })->name('app');
});

//-----------------------------------------------------------------------------
// Site
//-----------------------------------------------------------------------------
Route::get('/', function () {
    return view('site');
})->middleware('guest')->name('site');

//-----------------------------------------------------------------------------
// Authentication
//-----------------------------------------------------------------------------
Route::namespace('Auth')->group(function () {
  Route::post('/user/login', 'LoginController@login');
  Route::post('/user/logout', 'LoginController@logout');
  Route::post('/user/register', 'RegisterController@register');
});



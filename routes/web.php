<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::group([
    'prefix' => 'app',
    'middleware' => [ 'auth' ]
], function () {
    Route::get('/', function () {
        // Get the user
        $user = Auth::user();
        // Create an api access token for the user
        $accessToken = $user->createToken('authToken')->accessToken;
        // Build the initial data
        $userLists = $user->lists()->orderBy('updatedAt', 'desc')->get();
        $lists = [];
        foreach($userLists as $index => $userList) {
            if($index === 0) { // If this is the initial active list, load its todos
                array_push($lists, [
                    'id' => $userList->id,
                    'name' => $userList->name,
                    'isCompletedTodosVisible' => $userList->isCompletedTodosVisible,
                    'todos' => $userList->todos()->get(),
                    'tags' => $userList->tags()->get(),
                ]);
            }
            else {
                array_push($lists, [
                    'id' => $userList->id,
                    'name' => $userList->name,
                    'isCompletedTodosVisible' => $userList->isCompletedTodosVisible
                ]);
            }
        }
        // Return the view
        return view('app')->with([
            'accessToken' => $accessToken,
            'lists' => $lists
        ]);
    })->name('app');
});

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



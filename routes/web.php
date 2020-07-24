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
        $initialList = $user->lists()->first();
        // Return the view
        return view('app')->with([
            'accessToken' => $accessToken,
            'lists' => $userLists,
            'todos' => $initialList->todos()->get(),
            'tags' => $initialList->tags()->get(),
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



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
        return view('app');
    })->name('app');
});

Route::get('/', function () {
    return view('site');
})->name('site');

//-----------------------------------------------------------------------------
// Authentication
//-----------------------------------------------------------------------------
Route::namespace('Auth')->group(function () {
  Route::post('/user/login', 'LoginController@login');
  Route::post('/user/logout', 'LoginController@logout');
  Route::post('/user/register', 'RegisterController@register');
});



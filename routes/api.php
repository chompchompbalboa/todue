<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/


Route::group([
    'middleware' => [ 'auth:api' ]
], function () {  
  
    // Restore soft deleted models
    Route::post('/list/restore/{list}', 'TodoListController@restore');
    Route::post('/list/tag/restore/{tag}', 'TodoListTagController@restore');
    Route::post('/todo/restore/{todo}', 'TodoController@restore');
    Route::post('/todo/tag/restore/{tag}', 'TodoTagController@restore');

    // Delete Todo Tags (we can't use the resource controller to delete these
    // because we don't pass the id to the front end)
    Route::post('/todo/tag/delete', 'TodoTagController@destroy');

    // Resource Controllers
    Route::resources([
      'list' => 'TodoListController',
      'list/tag' => 'TodoListTagController',
      'todo' => 'TodoController',
      'todo/tag' => 'TodoTagController',
    ]);
});

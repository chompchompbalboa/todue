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
    Route::post('/list/sublist/restore/{sublist}', 'TodoListSublistController@restore');
    Route::post('/list/sublist//tag/restore/{tag}', 'TodoListSublistTagController@restore');
    Route::post('/list/tag/restore/{tag}', 'TodoListTagController@restore');
    Route::post('/todo/restore/{todo}', 'TodoController@restore');
    Route::post('/todo/tag/restore/{tag}', 'TodoTagController@restore');

    // Resource Controllers
    Route::resources([
      'list' => 'TodoListController',
      'list/sublist' => 'TodoListSublistController',
      'list/sublist/tag' => 'TodoListSublistTagController',
      'list/tag' => 'TodoListTagController',
      'todo' => 'TodoController',
      'todo/tag' => 'TodoTagController',
    ]);
});

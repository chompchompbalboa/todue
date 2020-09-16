<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/
Route::group([
    'middleware' => [ 'auth:api' ]
], function () {  

    // Initial data for native
    Route::get('/initial-data', function () {
        $user = Auth::user();
        return ([
            'active' => $user->active()->first(),
            'lists' => $user->lists()->orderBy('updatedAt', 'desc')->get(),
            'user' => $user
        ]);
    });
  
    // Restore soft deleted models
    Route::post('/list/restore/{list}', 'TodoListController@restore');
    Route::post('/list/sublist/restore/{sublist}', 'TodoListSublistController@restore');
    Route::post('/list/sublist/tag/restore/{tag}', 'TodoListSublistTagController@restore');
    Route::post('/list/tag/restore/{tag}', 'TodoListTagController@restore');
    Route::post('/todo/restore/{todo}', 'TodoController@restore');
    Route::post('/todo/note/restore/{note}', 'TodoNoteController@restore');
    Route::post('/todo/tag/restore/{tag}', 'TodoTagController@restore');
  
    // Subscriptions
    Route::post('/user/{user}/subscription/purchase', 'UserSubscriptionController@purchase');
    Route::post('/user/{user}/subscription/stripe-billing-portal-url', 'UserSubscriptionController@stripeBillingPortalUrl');

    // Resource Controllers
    Route::resources([
      'list' => 'TodoListController',
      'list/sublist' => 'TodoListSublistController',
      'list/sublist/tag' => 'TodoListSublistTagController',
      'list/tag' => 'TodoListTagController',
      'todo' => 'TodoController',
      'todo/note' => 'TodoNoteController',
      'todo/tag' => 'TodoTagController',
      'user/active' => 'UserActiveController',
    ]);
});

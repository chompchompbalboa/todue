<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserActive extends Model
{
    use Traits\UsesUuid;
  
    protected $table = 'userActive';
    
    const CREATED_AT = 'createdAt';
    const UPDATED_AT = 'updatedAt';

    protected $visible = [ 'id', 'listId', 'sublistId', 'isCompletedTodosVisible' ];
    protected $fillable = [ 'id', 'listId', 'sublistId', 'isCompletedTodosVisible' ];
    protected $casts = [
      'isCompletedTodosVisible' => 'boolean'
    ];
}

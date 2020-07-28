<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Todo extends Model
{
    use Traits\UsesUuid;
    use SoftDeletes;
  
    protected $table = 'todos';
    
    const CREATED_AT = 'createdAt';
    const UPDATED_AT = 'updatedAt';

    protected $visible = [ 
      'id', 
      'listId', 
      'text', 
      'dateCreated', 
      'dateCurrent', 
      'dateCompleted',
      'timeStart',
      'timeEnd',
      'priority',
      'tags'
    ];

    protected $fillable = [ 
      'id', 
      'listId', 
      'text', 
      'dateCreated', 
      'dateCurrent', 
      'dateCompleted',
      'timeStart',
      'timeEnd',
      'priority'
    ];
}

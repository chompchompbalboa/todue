<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TodoListSublistTag extends Model
{
    use Traits\UsesUuid;
    use SoftDeletes;
  
    protected $table = 'todoListSublistTags';
    
    const CREATED_AT = 'createdAt';
    const UPDATED_AT = 'updatedAt';

    protected $visible = [ 'id', 'listId', 'sublistId', 'tagId', 'type' ];
    protected $fillable = [ 'id', 'listId', 'sublistId', 'tagId', 'type' ];
}

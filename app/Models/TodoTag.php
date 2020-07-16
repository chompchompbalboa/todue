<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TodoTag extends Model
{
    use Traits\UsesUuid;
    use SoftDeletes;
  
    protected $table = 'todoTags';
    
    const CREATED_AT = 'createdAt';
    const UPDATED_AT = 'updatedAt';

    protected $visible = [ 'id', 'tagId', 'listId', 'todoId' ];
    protected $fillable = [ 'id', 'tagId', 'listId', 'todoId' ];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TodoNote extends Model
{
    use Traits\UsesUuid;
    use SoftDeletes;
  
    protected $table = 'todoNotes';
    
    const CREATED_AT = 'createdAt';
    const UPDATED_AT = 'updatedAt';

    protected $visible = [ 'id', 'listId', 'todoId', 'value', 'createdAt' ];
    protected $fillable = [ 'id', 'listId', 'todoId', 'value' ];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TodoListUser extends Model
{
    use Traits\UsesUuid;
    use SoftDeletes;
  
    protected $table = 'todoListUsers';
    
    const CREATED_AT = 'createdAt';
    const UPDATED_AT = 'updatedAt';

    protected $visible = [ 'userId', 'listId' ];
    protected $fillable = [ 'userId', 'listId' ];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TodoListSublist extends Model
{
    use Traits\UsesUuid;
    use SoftDeletes;
  
    protected $table = 'todoListSublists';
    
    const CREATED_AT = 'createdAt';
    const UPDATED_AT = 'updatedAt';

    protected $visible = [ 'id', 'listId', 'name' ];
    protected $fillable = [ 'id', 'listId', 'name' ];
}

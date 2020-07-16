<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TodoListTag extends Model
{
    use Traits\UsesUuid;
    use SoftDeletes;
  
    protected $table = 'todoListTags';
    
    const CREATED_AT = 'createdAt';
    const UPDATED_AT = 'updatedAt';

    protected $visible = [ 'id', 'listId', 'text', 'backgroundColor' ];
    protected $fillable = [ 'id', 'listId', 'text', 'backgroundColor' ];
}

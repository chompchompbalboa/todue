<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TodoList extends Model
{
    use Traits\UsesUuid;
    use SoftDeletes;
  
    protected $table = 'todoLists';
    
    const CREATED_AT = 'createdAt';
    const UPDATED_AT = 'updatedAt';

    protected $visible = [ 'id', 'name' ];
    protected $fillable = [ 'id', 'name' ];

    public function todos()
    {
        return $this->hasMany('App\Models\Todo', 'listId')->orderBy('dateCurrent', 'asc');
    }
}

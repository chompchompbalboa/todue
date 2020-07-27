<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use App\Models\Todo;

class TodoList extends Model
{
    use Traits\UsesUuid;
    use SoftDeletes;
  
    protected $table = 'todoLists';
    
    const CREATED_AT = 'createdAt';
    const UPDATED_AT = 'updatedAt';

    protected $visible = [ 'id', 'name' ];
    protected $fillable = [ 'id', 'name' ];

    public function sublists()
    {
        return $this->hasMany('App\Models\TodoListSublist', 'listId')->orderBy('name', 'asc');
    }

    public function sublistTags()
    {
        return $this->hasMany('App\Models\TodoListSublistTag', 'listId')->orderBy('dateCreated', 'asc');
    }

    public function todos()
    {
        return $this->hasMany('App\Models\Todo', 'listId')->orderBy('dateCurrent', 'asc');
    }

    public function tags()
    {
        return $this->hasMany('App\Models\TodoListTag', 'listId')->orderBy('text', 'asc');
    }
}

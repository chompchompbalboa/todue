<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

use App\Models\TodoList;
use App\Models\TodoListUser;

class TodoListController extends Controller
{
  
    public function show(TodoList $list) {
      return [
        'sublists' => $list->sublists()->get(),
        'sublistTags' => $list->sublistTags()->get(),
        'todos' => $list->todos()->get(),
        'tags' => $list->tags()->get(),
        'todoNotes' => $list->todoNotes()->get(),
        'todoTags' => $list->todoTags()->get()
      ];
    }

    // Store
    public function store(Request $request)
    {
        // Create the todo list
        $todoList = TodoList::create($request->all());
        // Assign to the user
        TodoListUser::create([
            'userId' => Auth::user()->id,
            'listId' => $todoList->id
        ]);
        return response(null, 200);
    }

    // Update
    public function update(Request $request, TodoList $list)
    {
        return $list->update($request->all());
    }

    // Delete
    public function destroy($id)
    {
        return TodoList::destroy($id);
    }

    // Restore
    public function restore($id)
    {
        return TodoList::withTrashed()->where('id', $id)->restore();
    }
}

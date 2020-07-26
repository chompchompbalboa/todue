<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

use App\Models\TodoListTag;

class TodoListTagController extends Controller
{

    // Store
    public function store(Request $request)
    {
        return TodoListTag::create($request->all());
    }

    // Update
    public function update(Request $request, TodoListTag $tag)
    {
        return $tag->update($request->all());
    }

    // Delete
    public function destroy($id)
    {
        return TodoListTag::destroy($id);
    }

    // Restore
    public function restore($id)
    {
        return TodoListTag::withTrashed()->where('id', $id)->restore();
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

use App\Models\TodoListSublistTag;

class TodoListSublistTagController extends Controller
{
    // Store
    public function store(Request $request)
    {
        return TodoListSublistTag::create($request->all());
    }

    // Update
    public function update(Request $request, TodoListSublistTag $tag)
    {
        return $tag->update($request->all());
    }

    // Delete
    public function destroy($id)
    {
        return TodoListSublistTag::destroy($id);
    }

    // Restore
    public function restore($id)
    {
        return TodoListSublistTag::withTrashed()->where('id', $id)->restore();
    }
}

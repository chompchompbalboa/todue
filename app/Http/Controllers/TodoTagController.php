<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

use App\Models\TodoTag;

class TodoTagController extends Controller
{

    // Store
    public function store(Request $request)
    {
        // Create the tag
        return TodoTag::create($request->all());
    }

    // Update
    public function update(Request $request, TodoTag $tag)
    {
        return $tag->update($request->all());
    }

    // Delete
    public function destroy(Request $request)
    {
        return TodoTag::where([
                            [ 'todoId', '=', $request->input('todoId') ],
                            [ 'tagId', '=', $request->input('tagId') ]
                        ])->delete();
    }

    // Restore
    public function restore($id)
    {
        return TodoTag::withTrashed()->where('id', $id)->restore();
    }
}

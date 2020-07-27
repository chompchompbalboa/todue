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
        return TodoTag::create($request->all());
    }

    // Update
    public function update(Request $request, TodoTag $tag)
    {
        return $tag->update($request->all());
    }

    // Delete
    public function destroy($id)
    {
        return TodoTag::destroy($id);
    }

    // Restore
    public function restore($id)
    {
        return TodoTag::withTrashed()->where('id', $id)->restore();
    }
}

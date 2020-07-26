<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

use App\Models\TodoListSublist;

class TodoListSublistController extends Controller
{

    // Store
    public function store(Request $request)
    {
        return TodoListSublist::create($request->all());
    }

    // Update
    public function update(Request $request, TodoListSublist $sublist)
    {
        return $sublist->update($request->all());
    }

    // Delete
    public function destroy($id)
    {
        return TodoListSublist::destroy($id);
    }

    // Restore
    public function restore($id)
    {
        return TodoListSublist::withTrashed()->where('id', $id)->restore();
    }
}

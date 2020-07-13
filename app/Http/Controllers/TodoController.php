<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

use App\Models\Todo;

class TodoController extends Controller
{

    // Store
    public function store(Request $request)
    {
        // Create the todo
        return Todo::create($request->all());
    }

    // Update
    public function update(Request $request, Todo $todo)
    {
        return $todo->update($request->all());
    }

    // Delete
    public function destroy($id)
    {
        return Todo::destroy($id);
    }

    // Restore
    public function restore($id)
    {
        return Todo::withTrashed()->where('id', $id)->restore();
    }
}

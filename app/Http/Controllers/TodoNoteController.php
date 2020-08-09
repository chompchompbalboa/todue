<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

use App\Models\TodoNote;

class TodoNoteController extends Controller
{

    // Store
    public function store(Request $request)
    {
        return TodoNote::create($request->all());
    }

    // Update
    public function update(Request $request, TodoNote $note)
    {
        return $note->update($request->all());
    }

    // Delete
    public function destroy($id)
    {
        return TodoNote::destroy($id);
    }

    // Restore
    public function restore($id)
    {
        return TodoNote::withTrashed()->where('id', $id)->restore();
    }
}

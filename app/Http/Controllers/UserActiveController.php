<?php

namespace App\Http\Controllers;

use App\Models\UserActive;
use Illuminate\Http\Request;

class UserActiveController extends Controller
{
    public function update(Request $request, UserActive $active)
    { 
      return $active->update($request->all());
    }
}

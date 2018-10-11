<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Acessos;

class AccessController extends Controller
{
    // metodo all
    public function index(){
        $access = Acessos::all();
        return response()->json($access);
    }
}

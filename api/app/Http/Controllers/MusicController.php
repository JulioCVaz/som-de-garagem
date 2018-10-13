<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Musica;

class MusicController extends Controller
{
    // metodo all
    public function index(){
        $access = Musica::all();
        return response()->json($access);
    }
}

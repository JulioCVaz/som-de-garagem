<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Artistas;

class ArtistController extends Controller
{
    // metodo all
    public function index(){
        $access = Artistas::all();
        return response()->json($access);
    }
}

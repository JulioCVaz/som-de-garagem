<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Album;

class AlbumController extends Controller
{
    // metodo all
    public function index(){
        $access = Album::all();
        return response()->json($access);
    }
}

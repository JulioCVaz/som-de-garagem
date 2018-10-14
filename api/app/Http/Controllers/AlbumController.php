<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Album;

class AlbumController extends Controller
{
    // metodo show apenas 1

    public function show($id){
        $album = Album::find($id);

        if(!$album){
            return response()->json([
                'message' => 'Album não encontrado'
            ], 404);
        }
        return response()->json($album);
    }
    // metodo all
    public function index(){
        $access = Album::all();
        return response()->json($access);
    }
}

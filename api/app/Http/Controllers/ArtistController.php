<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Artistas;
use Illuminate\Support\Facades\DB;

class ArtistController extends Controller
{
    
    public function __constructor(){
        $pattern = '[0-9]+';
    }
    // retorna todas as ocurrencias segundo a busca
    public function showbylike($string){
        $artistalike = DB::table('artistas')->where('nomeartista','LIKE', '%' . $string . '%')->first();

        if(!$artistalike){
            return response()->json([
                'message' => 'Nenhum resultado para: ' . $string
            ],404);
        }    
        return response()->json($artistalike);
    }

    // retornar todos os dados
    public function showmetadata($string){

        $artistalike = DB::table('artistas')->where('nomeartista','LIKE', '%' . $string . '%')->first();

        if(!$artistalike){
            return response()->json([
                'message' => 'Nenhum resultado para: ' . $string
            ], 404);
        }

        $data = $artistalike->id;
        
        $metadata = DB::table('artistas')
                    ->join('album', 'album.id', '=', 'artistas.id')->where('artistas.id', '=', $data)
                    ->join('musica', 'musica.id', '=', 'artistas.id')->where('artistas.id', '=', $data)
                    ->select('artistas.nomeartista', 'artistas.desc_artista',
                    'artistas.filepath',
                    'album.titulo_album',
                    'album.desc_album',
                    'album.filepath_avatar',
                    'musica.nomemusica')->distinct()
                    ->get();
            
                    if(!$metadata){
                        return response()->json([
                            'message' => 'Nenhum resultado para: ' . $string
                        ], 404);
                    }

                    return response()->json($metadata);
    }
    // metodo retorna apenas 1
    public function show($id){    
        $artista = Artistas::find($id);
        if(!$artista){
            return response()->json([
                'message' => 'Música não encontrada'
            ], 404);
        };
        return response()->json($artista);
    }
    // metodo all
    public function index(){
        $access = Artistas::all();
        return response()->json($access);
    }
}

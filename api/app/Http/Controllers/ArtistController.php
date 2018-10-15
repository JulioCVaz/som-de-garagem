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
                    ->select(
                    'nomeartista',
                    'desc_artista',
                    'filepath'
                    )->where('nomeartista', 'LIKE', '%' . $string . '%')
                    ->get();

        $metaalbum = DB::table('artistas')
                    ->join('album', 'album.artistaID', '=', 'artistas.id')->where('artistas.id', '=', $data)
                    ->select(
                        'album.titulo_album',
                        'album.desc_album',
                        'album.filepath_avatar'
                    )
                    ->get();
        
        $metamusica = DB::table('artistas')
                    ->join('musica', 'musica.artistaID', '=', 'artistas.id')->where('artistas.id', '=', $data)
                    ->select(
                        'musica.id',
                        'musica.nomemusica',
                        'musica.filepath',
                        'musica.created_at'
                    )
                    ->get();
                    
                    if(!$metadata){
                        return response()->json([
                            'message' => 'Nenhum resultado para: ' . $string
                        ], 404);
                    }

                    return response()->json([
                        'artista' => $metadata,
                        'data' => [
                            'album'=>$metaalbum,
                            'musicas'=>$metamusica
                        ]
                    ]);
    }
    // metodo retorna apenas 1
    public function show($id){    
        $artista = Artistas::find($id);
        if(!$artista){
            return response()->json([
                'message' => 'Artista não encontrado'
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

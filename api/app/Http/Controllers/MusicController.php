<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Musica;
use Illuminate\Support\Facades\DB;

class MusicController extends Controller
{
    // retorna apenas o id selecionado
    public function show($id){
        $musica = Musica::find($id);

        if(!$musica){
            return response()->json([
                'message' => 'Música não encontrada'
            ], 404);
        };

        return response()->json($musica);
    }
    // retorna todos os dados
    public function showmetadata($string){
        $musicas = DB::table('musica')->where('nomemusica', 'LIKE', '%' . $string . '%')->first();

        if(!$musicas){
            return response()->json([
                'message' => 'Nenhum resultado para: ' . $string
            ], 404);
        };

        $data = $musicas->id;

        $metadata = DB::table('musica')
                ->join('album', 'album.musicaID', '=', 'musica.albumID')->where('musica.id', '=', $data)
                ->join('artistas', 'artistas.musicasID', '=', 'musica.artistaID')->where('musica.id', '=', $data)
                ->select('musica.nomemusica',
                    'musica.created_at',
                    'musica.id',
                    'album.titulo_album',
                    'artistas.nomeartista')->distinct()
                    ->get();

        if(!$metadata){
            return response()->json([
                'message' => 'Nenhum dado encontrado para: ' . $string
            ], 404);
        }

        return response()->json($metadata);
    }
    // metodo all
    public function index(){
        $musica = Musica::all();
        return response()->json($musica);
    }
}

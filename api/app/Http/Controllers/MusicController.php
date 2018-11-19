<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Musica;
use Illuminate\Support\Facades\DB;

class MusicController extends Controller
{

    private $genero;

     // retorna todas as ocurrencias segundo a busca
    public function showbylike($string){
        $musiclike = DB::table('musica')->where('nomemusica', 'LIKE', '%' . $string .'%')->first();
        
        if(!$musiclike){
            return response()->json([
                'message' => 'Nenhum resultado para: ' . $string
            ], 404);
        }
        return response()->json($musiclike);
    }
    
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
    // retorna metadados de musicas com mesmo genero da busca
    public function retornaMusicasGeneros($id){
        
        $idmusica = $id;

        $musicageneroid = DB::table('musica_has_genero')->where('musicaID', '=', $id)
                    ->select('generoID')
                    ->first();

        $this->genero = $musicageneroid->generoID;

        
        $musicasdiversas = DB::table('musica_has_genero')->where('generoID', '=', $musicageneroid->generoID)
                        ->select('musicaID')
                        ->get();
        
        $arr = [];
        
        if($musicasdiversas){
            foreach($musicasdiversas as $key => $value){
                $music = DB::table('musica')->where('id', '=', $value->musicaID)->first();
                if($music){
                    array_push($arr, $music);
                }
            }
        }

        return $arr;
    }

    public function retornaArtistasGeneros($id){

        $idmusica = $id;
        
        $artistagenero = DB::table('artistas_has_generos')->where('generoid', '=', $this->genero)
                    ->select('artistaid')
                    ->first();

        $artistas = DB::table('artistas')->where('id', '=', $artistagenero->artistaid)->get();

        if($artistas){
            return $artistas;
        }

        return false;

    }

    // retorna todos os dados
    public function showmetadata($string){
        $musica = DB::table('musica')->where('nomemusica', 'LIKE', '%' . $string . '%')
        ->select(
            'id',
            'nomemusica',
            'filepath',
            'filepath_avatar',
            'created_at',
            'updated_at'
        )
        ->distinct()->get();

        if(!$musica){
            return response()->json([
                'message' => 'Nenhum resultado para: ' . $string
            ], 404);
        };

        $id = $musica[0]->id;

        $album = DB::table('album_has_musica')
                ->join('album', 'album_has_musica.albumID', '=', 'album.id')->where('album_has_musica.musicaID', '=', $id)
                ->select(
                    'album.id',
                    'album.titulo_album',
                    'album.desc_album',
                    'filepath_avatar',
                    'created_at',
                    'updated_at'
                    )->distinct()->get();

        $artista = DB::table('artistas_has_musicas')
                    ->join('artistas', 'artistas_has_musicas.artistaID',  '=', 'artistas.id')->where('artistas_has_musicas.musicaID', '=', $id)
                    ->select(
                        'artistas.id',
                        'artistas.nomeartista',
                        'artistas.desc_artista',
                        'filepath',
                        'created_at',
                        'updated_at'
                    )->distinct()->get();

        if(!$artista && !$album){
            return response()->json([
                'message' => 'Nenhum dado encontrado para: ' . $string
            ], 404);
        }

        $opcoesmusicas = self::retornaMusicasGeneros($id);
        $opcoesartistas = self::retornaArtistasGeneros($id);

        return response()->json(
            [
            'find' => [
                'musica' => $musica,
                'album' => $album,
                'artista' => $artista
            ],
            'metadados' => [
                'musicasgeneros' => $opcoesmusicas,
                'artistasgeneros' => $opcoesartistas
            ]
        ]);
    }
    // metodo all
    public function index(){
        $musica = Musica::all();
        return response()->json($musica);
    }
}

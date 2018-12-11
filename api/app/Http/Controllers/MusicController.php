<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Musica;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\ArtistController;
use App\Http\Controllers\AlbumController;

class MusicController extends Controller
{

    private $genero;
    private $artistasc;
    private $albumc;


    public function __construct(){
        $this->artistasc = new ArtistController();
        $this->albumc = new AlbumController();
    }

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

    // retorna músicas de um id(artista) especifico

    public function retornaMusicasArtista(Request $request){
        $idartista = $request->input('id_user');

        return response()->json([
            'message' => 'Recebido'
        ]);
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
        
        $artistagenero = DB::table('artistas_has_generos')->where('generoid', '=', $this->genero)
                    ->select('artistaid')->distinct()->get();

        $artistas = [];

        foreach($artistagenero as $key => $value){
            $art = DB::table('artistas')->where('id', '=', $value->artistaid)->first();
            if($art){
                array_push($artistas, $art);
            }
        }

        if($artistas){
            return $artistas;
        }

        return false;

    }

    // retorna todos os dados
    public function showmetadata($string){
        $artista = DB::table('artistas')->where('nomeartista', 'LIKE', '%' . $string . '%')
        ->select(
            'id',
            'nomeartista',
            'desc_artista',
            'filepath',
            'created_at',
            'updated_at'
            )
            ->distinct()->get();

        // retornar isso para album tambem
                

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

        $album = DB::table('album')->where('titulo_album', 'LIKE', '%' . $string . '%')
        ->select(
            'id',
            'titulo_album',
            'desc_album',
            'filepath_avatar',
            'created_at',
            'updated_at'
        )
        ->distinct()->get();

        if(!$musica && !$album && !$artista){
            return response()->json([
                'message' => 'Nenhum resultado para: ' . $string
            ], 404);
        };

        $vals = [
            'musica' => $musica,
            'artista' => $artista,
            'album' => $album
        ];

        foreach($vals as $key => $value){
            if(count($value) < 1){
                unset($vals[$key]);
            }
        }

        foreach($vals as $key => $value){
            if($key == 'musica'){
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
                        'music' => [ 
                            'musica' => $musica,
                            'album' => $album,
                            'artista' => $artista
                        ]
                    ],
                    'metadados' => [
                        'musicasgeneros' => $opcoesmusicas,
                        'artistasgeneros' => $opcoesartistas
                    ]
                ]);
            }elseif($key == 'artista'){
                return response()->json(
                    $this->artistasc->showmetadata($string)
                );
            }else{
                return response()->json(
                    $this->albumc->showbylike($string)
                );
            }
        }        
    }
    // metodo all
    public function index(){
        $musica = Musica::all();
        return response()->json($musica);
    }

    // metodo upload musicas
    public function uploadMusicas(Request $request){
        
        // get audio da request
        $id = $request->input('id_user');
        // get id da request
        $sound = $request->file('audio');

        $filename = $sound->getClientOriginalName();

        $count = DB::table('musica')
        ->select(DB::raw('count(id) as count'))->where('artistaID', '=', 3)->get();

        $convert = (int)$count[0]->count + 1;
        
        $location = public_path('sdg/audio/' . (string)$id . '/');
             
        $sound->move($location,$filename);

        return response()->json([
            'response' => 'OK'
        ]);
    }
}

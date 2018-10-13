<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::group(array('prefix' => 'api'),function(){
    Route::get('/', function(){
        return response()->json(['message' => 'SOM DE GARAGEM API', 'status' => 'Conectado']);
    });
    Route::resource('/planos', 'PlansController');
    Route::resource('/acessos', 'AccessController');
    Route::resource('/artista', 'ArtistController');
    Route::resource('/musica', 'MusicController');
    Route::resource('/album', 'AlbumController');
});


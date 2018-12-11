<?php
/**
 * 
 *  Arquivo de Rotas som de garamge - api
 *  grupo: Júlio, Gustavo e Guilherme
 *  Etec zona leste
 */

// email de confirmação
Route::get('user/verify/{verification_code}', 'Auth\AuthController@verifyUser');
Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.request');
Route::get('password/reset', 'Auth\ResetPasswordController@postReset')->name('password.reset');

Route::resource('confirm', "Auth\AuthController@confirm");
// cadastro de criacao de conta
Route::resource('/cadastro', 'Auth\AuthController@cadastro');

// rotas da api
Route::group(array('prefix' => 'api/'), function(){
    Route::get('/', function(){
        return response()->json(['message' => 'SOM DE GARAGEM API', 'status' => 'Conectado']);
    });
    // routes only artistas
    Route::get('artista/{string}', 'ArtistController@showmetadata'); // retorna artistas pelo nome
    Route::resource('artistas', 'ArtistController'); // get all artistas, delete and update
    
    // routes only musics
    // musicas
    Route::get('data/{string}', 'MusicController@showmetadata'); // retorna musicas pelo nome
    Route::resource('musicas', 'MusicController'); // get all musicas, delete and update
    Route::get('musicas/artista/{id}', 'MusicController@retornaMusicasArtista');
    
    // routes only albums
    Route::get('album/{string}', 'AlbumController@showbylike'); // arrumar
    Route::resource('albums', 'AlbumController');
    
    // routes only planos
    Route::resource('planos', 'PlansController');
    
    // routes only acessos
    Route::resource('acessos', 'AccessController');

    // upload file
    Route::post('upload', 'MusicController@uploadMusicas');
    
    //logout
    Route::get('logout', 'AuthController@logout');

    Route::resource('login', 'Auth\AuthController@login');
    
    Route::get('token' , 'Auth\AuthController@token');
    
    Route::post('register', 'Auth\AuthController@register');
    // tests
    Route::get('test', function(){
        return response()->json([
            'response' => 'respondido'
            ]);
    });

});


Route::auth();

Route::get('/home', 'HomeController@index');

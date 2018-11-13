<?php
/**
 * 
 *  Arquivo de Rotas som de garamge - api
 *  grupo: Júlio, Gustavo e Guilherme
 *  Etec zona leste
 */

// arrumar permissao do cors
header('Access-Control-Allow-Origin: *');
header('Access-Coxntrol-Allow-Headers: Authorization, Content-Type');
header('Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT');

// email de confirmação
Route::get('user/verify/{verification_code}', 'Auth\AuthController@verifyUser');
Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.request');
Route::get('password/reset', 'Auth\ResetPasswordController@postReset')->name('password.reset');
Route::resource('/cadastrar', 'Auth\AuthController@telaregister');
Route::post('/register', 'AuthController@register');

// rotas da api
Route::group(array('prefix' => 'api/'), function(){
    Route::get('/', function(){
        return response()->json(['message' => 'SOM DE GARAGEM API', 'status' => 'Conectado']);
    });
    // routes only artistas
    Route::get('artista/{string}', 'ArtistController@showmetadata'); // retorna artistas pelo nome
    Route::resource('artistas', 'ArtistController'); // get all artistas, delete and update
    
    // routes only musics
    Route::get('musica/{string}', 'MusicController@showmetadata'); // retorna musicas pelo nome
    Route::resource('musicas', 'MusicController'); // get all musicas, delete and update
    
    // routes only albums
    Route::get('album/{string}', 'AlbumController@showbylike'); // arrumar
    Route::resource('albums', 'AlbumController');

    // routes only planos
    Route::resource('planos', 'PlansController');

    // routes only acessos
    Route::resource('acessos', 'AccessController');

    //logout
    Route::get('logout', 'AuthController@logout');

    Route::post('register', 'AuthController@register');

    Route::resource('login/', 'Auth\AuthController@login');

    Route::get('token' , 'Auth\AuthController@token');

    // tests
    Route::get('test', function(){
        return response()->json([
            'response' => 'respondido'
        ]);
    });

});


Route::auth();

Route::get('/home', 'HomeController@index');

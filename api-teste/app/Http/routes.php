<?php

Route::group(array('prefix' => 'api'), function()
{

  Route::get('/', function () {
      return response()->json(['message' => 'Jobs API', 'status' => 'Connected']);;
  });
  Route::resource('jobs', 'JobsController');
  Route::resource('companies', 'CompaniesController');
  Route::post('auth/login', 'AuthController@authenticate');
});

Route::get('/', function () {
    return redirect('api');
});
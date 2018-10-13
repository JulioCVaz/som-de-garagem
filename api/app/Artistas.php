<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Artistas extends Model
{
    protected $fillable = ['nomeartista', 'desc_artista', 'filepath', 'albumID', 'musicasID'];
}

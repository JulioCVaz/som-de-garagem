<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Musica extends Model
{
    protected $table = 'musica';
    protected $fillable = ['albumID', 'artistaID', 'filepath', 'filepath_avatar'];
}

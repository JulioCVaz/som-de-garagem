<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Musica extends Model
{
    protected $table = 'musica';
    protected $fillable = ['albumID', 'aristaID', 'filepath', 'filepath_avatar'];
}

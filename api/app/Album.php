<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    protected $table = 'album';
    protected $fillable = ['titulo_album', 'desc_album', 'filepath_avatar', 'musicaID', 'artistaID'];
}

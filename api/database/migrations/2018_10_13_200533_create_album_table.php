<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAlbumTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('album', function(Blueprint $table){
            $table->integer('id');
            $table->string('titulo_album');
            $table->string('desc_album');
            $table->string('filepath_avatar');
            $table->integer('musicaID');
            $table->integer('artistaID');
            $table->foreign('musicaID')->references('id')->on('musica');
            $table->foreign('artistaID')->references('id')->on('artistas');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('album');
    }
}

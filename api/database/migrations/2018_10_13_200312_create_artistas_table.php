<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateArtistasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('artistas', function(Blueprint $table){
            $table->integer('id')->autoIncrement();
            $table->string('nomeartista');
            $table->string('desc_artista');
            $table->string('filepath');
            $table->integer('albumID');
            $table->integer('musicasID');
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
        Schema::drop('artistas');
    }
}

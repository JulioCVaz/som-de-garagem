<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMusicaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('musica', function(Blueprint $table){
            $table->integer('id')->autoIncrement();
            $table->integer('albumID');
            $table->integer('artistaID');
            $table->string('filepath');
            $table->string('filepath_avatar');
            $table->string('nomemusica');
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
        Schema::drop('musica');
    }
}

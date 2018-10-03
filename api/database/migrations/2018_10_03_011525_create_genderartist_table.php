<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGenderartistTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('genderartist', function(Blueprint $table){
            $table->increments('id');
            $table->integer('artistID')->unsigned();
            $table->foreign('artistID')
            ->references('id')
            ->on('artists')
            ->onDelete('cascade');
            $table->integer('genderID')->unsigned();
            $table->foreign('genderID')
            ->references('id')
            ->on('genders')
            ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('genderartist');
    }
}

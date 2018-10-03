<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateListenerTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('listener', function(Blueprint $table){
            $table->increments('id');
            $table->integer('typeID')->unsigned();
            $table->foreign('typeID')
            ->references('id')
            ->on('access')
            ->onDelete('cascade');
            $table->integer('plan')->unsigned();
            $table->foreign('plan')
            ->references('id')
            ->on('plans')
            ->onDelete('cascade');
            $table->integer('playlistID')->unsigned();
            $table->foreign('playlistID')
            ->references('id')
            ->on('playlist')
            ->onDelete('cascade');
            $table->integer('genderID')->unsigned();
            $table->references('id')
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
        Schema::drop('listener');
    }
}

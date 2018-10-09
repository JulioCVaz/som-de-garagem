<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGenderlistenerTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('genderlistener', function(Blueprint $table){
            $table->increments('id');
            $table->integer('listenerID')->unsigned();
            $table->foreign('listenerID')
            ->references('id')
            ->on('listener')
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
        Schema::drop('genderlistener');
    }
}

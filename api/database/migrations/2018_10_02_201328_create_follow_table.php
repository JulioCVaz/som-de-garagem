<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFollowTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('follow', function(Blueprint $table){
            $table->increments('id');
            $table->integer('artistsID')->unsigned();
            $table->foreign('artistsID')
            ->references('id')
            ->on('artists')
            ->onDelete('cascade');
            $table->integer('listenerID')->unsigned();
            $table->foreign('listenerID')
            ->on('listener')
            ->onDelete('cascade');
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
        //
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTargetAreasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('target_areas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('screen_id');
            $table->unsignedBigInteger('link_to_screen')->nullable();
            $table->string('name');
            $table->string('color');
            $table->integer('x');
            $table->integer('y');
            $table->integer('height');
            $table->integer('width');
            $table->timestamps();

            $table->foreign('screen_id')->references('id')->on('screens')->cascadeOnDelete()->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('target_areas');
    }
}

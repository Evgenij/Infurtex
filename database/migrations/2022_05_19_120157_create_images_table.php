<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('images', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('test_id');
			$table->unsignedBigInteger('screen_id')->default(null)->nullable();
            $table->string('path');
            $table->timestamps();

            $table->foreign('test_id')->references('id')
				->on('tests')->cascadeOnDelete()->cascadeOnUpdate();
			$table->foreign('screen_id')->references('id')
				->on('screens')->cascadeOnDelete()->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('images');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateImageClicksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('image_clicks', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('tests_access_id');
			$table->unsignedBigInteger('image_id');
            $table->timestamps();

            $table->foreign('tests_access_id')->references('id')
				->on('tests_access')->cascadeOnDelete()->cascadeOnUpdate();
			$table->foreign('image_id')->references('id')
				->on('images')->cascadeOnDelete()->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('image_clicks');
    }
}

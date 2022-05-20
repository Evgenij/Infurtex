<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateActivatedAreasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('activated_areas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('tests_access_id');
            $table->unsignedBigInteger('target_area_id');
            $table->timestamps();

			$table->foreign('tests_access_id')->references('id')
				->on('tests_access')->cascadeOnDelete()->cascadeOnUpdate();
			$table->foreign('target_area_id')->references('id')
				->on('target_areas')->cascadeOnDelete()->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('activated_areas');
    }
}

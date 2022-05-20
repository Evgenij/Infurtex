<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTestsAccessTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tests_access', function (Blueprint $table) {
        	$table->id();
			$table->unsignedBigInteger('respondent_id');
            $table->unsignedBigInteger('test_id');
			$table->boolean('viewed')->default(false);
            $table->timestamps();

			$table->foreign('test_id')->references('id')
				->on('tests')->cascadeOnDelete()->cascadeOnUpdate();
			$table->foreign('respondent_id')->references('id')
				->on('respondents')->cascadeOnDelete()->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tests_access');
    }
}

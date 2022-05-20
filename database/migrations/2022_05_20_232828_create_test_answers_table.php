<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTestAnswersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('test_answers', function (Blueprint $table) {
            $table->id();
			$table->unsignedBigInteger('tests_access_id');
			$table->unsignedBigInteger('answer_id');
			$table->text('value')->nullable()->default(null);
			$table->boolean('status')->default(false);
            $table->timestamps();

			$table->foreign('tests_access_id')->references('id')
				->on('tests_access')->cascadeOnDelete()->cascadeOnUpdate();
			$table->foreign('answer_id')->references('id')
				->on('answers')->cascadeOnDelete()->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('test_answers');
    }
}

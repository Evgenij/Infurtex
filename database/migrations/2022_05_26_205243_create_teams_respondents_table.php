<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTeamsRespondentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
		Schema::create('teams_respondents', function (Blueprint $table) {
			$table->id();
			$table->unsignedBigInteger('team_id');
			$table->unsignedBigInteger('respondent_id');
			$table->timestamps();

			$table->foreign('team_id')->references('id')
				->on('teams')->cascadeOnDelete()->cascadeOnUpdate();
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
		Schema::dropIfExists('teams_respondents');
    }
}

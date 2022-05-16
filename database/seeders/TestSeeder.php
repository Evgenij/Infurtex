<?php

namespace Database\Seeders;

use App\Models\Answer;
use App\Models\Moderator;
use App\Models\Project;
use App\Models\Question;
use App\Models\Respondent;
use App\Models\Test;
use Illuminate\Database\Seeder;

class TestSeeder extends Seeder
{
	/**
	 * Seed the application's database.
	 *
	 * @return void
	 */
	public function run()
	{
		Test::factory(50)->create();
	}
}

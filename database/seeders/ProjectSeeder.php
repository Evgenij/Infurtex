<?php

namespace Database\Seeders;

use App\Models\Answer;
use App\Models\Moderator;
use App\Models\Project;
use App\Models\Question;
use App\Models\Respondent;
use App\Models\Test;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
	/**
	 * Seed the application's database.
	 *
	 * @return void
	 */
	public function run()
	{
		Project::factory(10)->create();
	}
}

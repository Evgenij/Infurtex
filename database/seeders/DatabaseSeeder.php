<?php

namespace Database\Seeders;

use App\Models\Answer;
use App\Models\Moderator;
use App\Models\Project;
use App\Models\Question;
use App\Models\Respondent;
use App\Models\Test;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
//    	Project::factory(5)->create();
//        Moderator::factory(10)->create();
//		Respondent::factory(10)->create();
//		Test::factory(50)->create();
		//Question::factory(150)->create();
		//Answer::factory(750)->create();
		$this->call([
			ProjectSeeder::class,
			ModeratorSeeder::class,
			RespondentSeeder::class,
			TestSeeder::class,
			QuestionSeeder::class,
			AnswerSeeder::class,
		]);

    }
}

<?php

namespace Database\Seeders;
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
		$this->call([
			ProjectSeeder::class,
			ModeratorSeeder::class,
			RespondentSeeder::class,
			TestSeeder::class,
			ImageSeeder::class,
			QuestionSeeder::class,
			AnswerSeeder::class,
		]);

    }
}

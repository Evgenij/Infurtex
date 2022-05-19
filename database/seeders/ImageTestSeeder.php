<?php

namespace Database\Seeders;

use App\Models\ImageTest;
use Illuminate\Database\Seeder;

class ImageTestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ImageTest::factory(50)->create();
    }
}

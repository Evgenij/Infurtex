<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class QuestionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
			'test_id' => $this->faker->numberBetween(1,50),
			'type'=>$this->faker->numberBetween(1,3),
			'text'=> $this->faker->realText(50),
        ];
    }
}

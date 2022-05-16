<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class AnswerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'question_id'=>$this->faker->numberBetween(1,150),
			'text'=>$this->faker->text(50)
        ];
    }
}

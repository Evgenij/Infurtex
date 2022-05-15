<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class TestFactory extends Factory
{
	/**
	 * Define the model's default state.
	 *
	 * @return array
	 */
	public function definition()
	{
		$name = $this->faker->text(100);

		return [
			'id_moder' => $this->faker->numberBetween(1,10),
			'id_project' => $this->faker->numberBetween(1,5),
			'type' => $this->faker->numberBetween(1,5),
			'name' => $name,
			'instruction' => $this->faker->realText(100),
			'expire_date' => $this->faker->date(),
			'status' => $this->faker->numberBetween(0,5),
			'slug' => $name
		];
	}
}

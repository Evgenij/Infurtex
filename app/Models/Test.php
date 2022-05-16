<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Test extends Model
{
	use HasFactory, HasSlug;

	protected $fillable = [
		'id_moder',
		'id_project',
		'type',
		'name',
		'instruction',
		'expire_date',
		'slug'
	];

	public function getSlugOptions(): SlugOptions
	{
		return SlugOptions::create()
			->generateSlugsFrom('name')
			->saveSlugsTo('slug');
	}

	public function questions()
	{
		return $this->hasMany(Question::class);
	}
}

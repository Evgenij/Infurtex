<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ImageTest extends Model
{
    use HasFactory;

	protected $fillable = [
		'test_id',
		'path'
	];

	public function test()
	{
		return $this->belongsTo(Test::class);
	}
}

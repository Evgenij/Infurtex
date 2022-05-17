<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TestsAccess extends Model
{
    use HasFactory;

	protected $table = 'tests_access';

    protected $fillable = [
    	'test_id',
		'respondent_id'
	];
}

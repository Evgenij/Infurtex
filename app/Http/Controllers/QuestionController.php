<?php

namespace App\Http\Controllers;

use App\Http\Resources\QuestionResource;
use App\Models\Question;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
	public function store(Request $request)
	{
		$data = $request->validate([
			'test_id' => 'required|numeric',
			'text' => 'required|string',
			'type' => 'required|numeric'
		]);

		$result = Question::create([
			'test_id' => $data['test_id'],
			'text' => $data['text'],
			'type' => $data['type']
		]);

		return new QuestionResource($result);
	}
}

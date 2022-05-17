<?php

namespace App\Http\Controllers;

use App\Http\Resources\AnswerResource;
use App\Models\Answer;
use Illuminate\Http\Request;

class AnswerController extends Controller
{
	public function store(Request $request)
	{
		$data = $request->validate([
			'question_id' => 'required|numeric',
			'text' => 'required|string',
		]);

		$result = Answer::create([
			'question_id' => $data['question_id'],
			'text' => $data['text'],
		]);

		return new AnswerResource($result);
	}
}

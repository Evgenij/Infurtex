<?php

namespace App\Http\Controllers;

use App\Http\Resources\TestAccessResource;
use App\Models\Respondent;
use App\Models\TestsAccess;
use Illuminate\Http\Request;

class TestsAccessController extends Controller
{

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return TestAccessResource
     */
    public function generalRecruiting(Request $request)
    {
        $respondents = Respondent::all();

		$data = $request->validate([
			'test_id' => 'required|numeric'
		]);

		$records = [];

		foreach ($respondents as $respondent) {
			$records = TestsAccess::create([
				'test_id' => $data['test_id'],
				'respondent_id' => $respondent->id
			]);
		}

		return TestAccessResource::make($records);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index (){
    	return Project::all('id', 'name');
	}

	public function store(Request $request) {
		$data = $request->validate([
			'name' => 'required|string'
		]);
    	$project = Project::create([
    		'name' => $data['name']
		]);

		return response($project);
	}
}

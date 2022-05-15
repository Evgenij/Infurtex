<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function getAll (){
    	return Project::all('id', 'name');
	}

	public function addProject(Request $request) {
		$data = $request->validate([
			'name' => 'required|string'
		]);
    	$project = Project::create([
    		'name' => $data['name']
		]);

		return response($project);
	}
}

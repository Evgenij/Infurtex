<?php

namespace App\Http\Controllers;

use App\Models\Moderator;
use App\Models\Respondent;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getData($role,$id) {
    	if($role == "moderator") {
    		return Moderator::find($id);
		} else {
    		return Respondent::find($id);
		}
	}
}

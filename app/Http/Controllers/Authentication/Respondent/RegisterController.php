<?php

namespace App\Http\Controllers\Authentication\Respondent;

use App\Http\Controllers\Controller;
use App\Models\Respondent;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;
use function bcrypt;
use function response;

class RegisterController extends Controller
{
	public function register(Request $request)
	{
		$data = $request->validate([
			'username' => 'required|string',
			'email' => 'required|email|string|unique:respondents,email',
			'password' => [
				'required',
				'confirmed',
				Password::min(8)->mixedCase()->numbers()->symbols()
			],
			'password_confirmation' => [
				'required',
				'same:password'
			],
			'role'=>'required|string'
		]);

		/** var \App\Models\Moderator $user **/
		$respondent = Respondent::create([
			'name'=>$data['username'],
			'email'=>$data['email'],
			'password'=>bcrypt($data['password']),
			'role'=> $data['role']
		]);

		$token = $respondent->createToken('main')->plainTextToken;

		return response([
			'userData'=>$respondent,
			'token'=>$token
		]);
	}
}

<?php

namespace App\Http\Controllers\Authentication\Moderator;

use App\Http\Controllers\Controller;
use App\Models\Moderator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\Password;
use function bcrypt;
use function response;

class RegisterController extends Controller
{
	public function register(Request $request)
	{
		$data = $request->validate([
			'username' => 'required|string',
			'email' => 'required|email|string|unique:moderators,email',
			'password' => [
					'required',
					'confirmed',
					Password::min(8)->mixedCase()->numbers()->symbols()
			],
			'password_confirmation' => [
				'required',
				'same:password',
				Password::min(8)->mixedCase()->numbers()->symbols()
			],
			'role'=>'required|string'
		]);

		/** var \App\Models\Moderator $user **/
		$moderator = Moderator::create([
			'name'=>$data['username'],
			'email'=>$data['email'],
			'password'=>bcrypt($data['password']),
			'role'=> $data['role']
		]);

		$token = $moderator->createToken('main')->plainTextToken;

		return response([
			 'userData'=>$moderator,
			 'token'=>$token
		]);
	}
}

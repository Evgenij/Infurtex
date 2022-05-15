<?php

namespace App\Http\Controllers\Authentication;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

	public function login(Request $request) {
		$credentials = $request->validate([
			'email'=> ['required', 'email', 'string'],
			'password'=>[
				'required',
			],
			'remember'=> 'boolean'
		]);
		$remember = $credentials['remember'] ?? false;
		unset($credentials['remember']);

		$guard = '';
		if(Auth::guard('moderator')->attempt($credentials, $remember)){
			$guard = 'moderator';
		} else if (Auth::guard('respondent')->attempt($credentials, $remember)) {
			$guard = 'respondent';
		} else {
			return response([
				'error'=>'Введенные учетные данные неверны'
			], 422);
		}

		$user = Auth::guard($guard)->user();
		$token = $user->createToken('main')->plainTextToken;

		return response([
			'userData'=>$user,
			'token'=>$token
		]);
	}

	public function logout()
	{
		$user = Auth::user();

		$user->currentAccessToken()->delete();

		return response([
			'success'=>true
		]);
	}
}

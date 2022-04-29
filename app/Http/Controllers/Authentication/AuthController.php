<?php

namespace App\Http\Controllers\Authentication;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
	public function login(Request $request) {
		$credentials = $request->validate([
			'email'=>'required|email|string|exists:moderators,email',
			'password'=>[
				'required',
			],
			'remember'=> 'boolean'
		]);
		$remember = $credentials['remember'] ?? false;
		unset($credentials['remember']);

		if(!Auth::attempt($credentials, $remember)){
			return response([
				'error'=>'Введенные учетные данные неверны'
			], 422);
		}

		$user = Auth::user();
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

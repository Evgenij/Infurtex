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

//	public function login(Request $request) {
//		$credentials = $request->validate([
//			'email'=>'required|email|string|exists:respondents,email',
//			'password'=>[
//				'required',
//			],
//			'remember'=> 'boolean'
//		]);
//		$remember = $credentials['remember'] ?? false;
//		unset($credentials['remember']);
//
//		if(!Auth::attempt($credentials, $remember)){
//			return response([
//				'error'=>'Введенные учетные данные неверны'
//			], 422);
//		}
//
//		$user = Auth::user();
//		$token = $user->createToken('main')->plainTextToken;
//
//		return response([
//			'userData'=>$user,
//			'token'=>$token
//		]);
//	}
//
//	public function logout()
//	{
//		$user = Auth::user();
//
//		$user->currentAccessToken()->delete();
//
//		return response([
//			'success'=>true
//		]);
//	}
}

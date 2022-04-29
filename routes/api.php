<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->group(function (){
	Route::get('/user', function (Request $request) {
		return $request->user();
	});
	Route::post('/logout', [App\Http\Controllers\Authentication\AuthController::class, 'logout']);

});

Route::prefix('moderator')->group(function () {
	Route::post('/register', [App\Http\Controllers\Authentication\Moderator\RegisterController::class, 'register']);
});

Route::prefix('respondent')->group(function () {
	Route::post('/register', [App\Http\Controllers\Authentication\Respondent\RegisterController::class, 'register']);
});

Route::post('/login', [App\Http\Controllers\Authentication\AuthController::class, 'login']);

//Route::post('/register', [RegisterController::class, 'register']);
//Route::post('/login', [RegisterController::class, 'login']);


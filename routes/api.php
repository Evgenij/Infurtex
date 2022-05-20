<?php

use App\Http\Controllers\AnswerController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\TestsAccessController;
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
	Route::resource('/test', TestController::class);
});

Route::prefix('moderator')->group(function () {
	Route::post('/register', [App\Http\Controllers\Authentication\Moderator\RegisterController::class, 'register']);
});

Route::prefix('respondent')->group(function () {
	Route::post('/register', [App\Http\Controllers\Authentication\Respondent\RegisterController::class, 'register']);
});

Route::post('/login', [App\Http\Controllers\Authentication\AuthController::class, 'login']);


Route::group(['namespace'=>'Project'], function (){
	Route::get('/projects', [ProjectController::class, 'index']);
	Route::post('/projects', [ProjectController::class, 'store']);
});

Route::group(['namespace'=>'Question'], function (){
	Route::get('/questions', [QuestionController::class, 'index']);
	Route::post('/question', [QuestionController::class, 'store']);
});

Route::group(['namespace'=>'Answer'], function (){
	Route::get('/answers', [AnswerController::class, 'index']);
	Route::post('/answer', [AnswerController::class, 'store']);
});

Route::group(['namespace'=>'Image'], function (){
	Route::get('/images', [ImageController::class, 'index']);
	Route::post('/image', [ImageController::class, 'store']);
});

Route::group(['namespace'=>'Recruiting'], function (){
	Route::post('/general', [TestsAccessController::class, 'generalRecruiting']);
});



Route::get('/get-user-data/{role}/{id}', [\App\Http\Controllers\UserController::class, 'getData']);











//Route::post('/register', [RegisterController::class, 'register']);
//Route::post('/login', [RegisterController::class, 'login']);

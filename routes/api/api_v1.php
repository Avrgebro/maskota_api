<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\Auth\AuthController;
use App\Http\Controllers\Api\V1\CountryController;

/*
|--------------------------------------------------------------------------
| API Routes For V1
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => ['cors', 'json.response']], function(){

    //Auth Api routes
    Route::group(['namespace' => 'Auth', 'prefix' => 'auth'], function(){

        Route::post('/login', [AuthController::class, 'login'])->name('login.api');
        Route::post('/register', [AuthController::class, 'register'])->name('register.api');

    });

    Route::middleware('auth:sanctum')->group(function () {
        Route::post('/auth/logout', [AuthController::class, 'logout'])->name('logout.api');

    });

    Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
        return $request->user();
    });

    Route::group(['prefix' => 'countries'], function(){
        Route::get('/', [CountryController::class, 'index']);
        Route::get('/{id}', [CountryController::class, 'by_id']);
    });
});

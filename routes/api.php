<?php

use App\Http\Controllers\AbzController;
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

Route::middleware('auth:api')->prefix('v1')->group(function () {

    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::get('/token', [AbzController::class, 'token']);

    Route::post('/form', [AbzController::class, 'uploadForm']);

    Route::get('/positions', [AbzController::class, 'getPositions']);

    Route::get('/users', [AbzController::class, 'getUsers']);
});





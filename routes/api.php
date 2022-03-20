<?php

use App\Http\Controllers\TreatmentController;
use App\Http\Controllers\UserController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/userprofile/{id}', [UserController::class,'getUser']) ->name('user.getUser');
Route::put('/userprofile/{id}',[UserController::class,'update'])->name('user.update');
Route::get('/treatments', [TreatmentController::class,'index'])->name('treatments.index');
Route::get('/treatments/create', [TreatmentController::class,'create']);
Route::post('/treatments', [TreatmentController::class,'store']);
Route::get('/treatments/{treatment}', [TreatmentController::class,'show'] );

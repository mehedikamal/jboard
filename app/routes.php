<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function() {
	return View::make('main');
});

Route::get('/jobs/{id}', function() {
	return View::make('main');
});

Route::get('/create-posting', function() {
	return View::make('create-posting');
});

Route::get('/payment', function() {
	return View::make('payment');
});

Route::get('/checkout', function() {
	return View::make('checkout');
});

Route::get('/categories', function() {
    $categories = Categories::all();

    foreach($categories as $category){
        echo $category;
    }

});

Route::get('/categories/{id}', function($id) {
    $category = Categories::find($id);

    echo $category->title;

});

Route::get('/jobs', function() {
    $jobs = Jobs::all();

    foreach($jobs as $job){
        echo $job;
    }

});

Route::get('/job/{id}', function($id) {
    $job = Jobs::find($id);

    echo $job->title;

});
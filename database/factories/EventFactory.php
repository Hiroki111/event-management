<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Event;
use Carbon\Carbon;
use Faker\Generator as Faker;

$factory->define(Event::class, function (Faker $faker) {
    $addDayOrSubDay = ["addDay", "subDay"][rand(0, 1)];
    $days = rand(0, 28);

    return [
        'title' => $faker->firstName . " Ceremony",
        'date' => Carbon::now()->$addDayOrSubDay($days)->format('Y-m-d'),
    ];
});

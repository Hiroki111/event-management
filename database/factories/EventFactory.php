<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Event;
use Carbon\Carbon;
use Faker\Generator as Faker;

$factory->define(Event::class, function (Faker $faker) {
    $addDayOrSubDay = ["addDay", "subDay"][rand(0, 1)];
    $days = rand(0, 28);
    $startHour = rand(9, 18);
    $endHour = $startHour + rand(1, 3);
    $startTime = (string) $startHour . ':' . ["00", "30"][rand(0, 1)];
    $endTime = (string) $endHour . ':' . ["00", "30"][rand(0, 1)];

    return [
        'title' => $faker->firstName . " Ceremony",
        'date' => Carbon::now()->$addDayOrSubDay($days)->format('Y-m-d'),
        'start_time' => $startTime,
        'end_time' => $endTime,
    ];
});

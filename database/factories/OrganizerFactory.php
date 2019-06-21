<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Organizer;
use Faker\Generator as Faker;

$factory->define(Organizer::class, function (Faker $faker) {
    return [
        'name' => $faker->company,
    ];
});

<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name'         => "admin",
            'email'        => 'admin@gmail.com',
            'password'     => bcrypt("adminpass"),
            'access_level' => "admin",
        ]);

        DB::table('users')->insert([
            'name'         => "guest",
            'email'        => 'guest@gmail.com',
            'password'     => bcrypt("guestpass"),
            'access_level' => "guest",
        ]);
    }
}

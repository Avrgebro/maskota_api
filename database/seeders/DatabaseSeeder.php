<?php

namespace Database\Seeders;

use App\Models\Country;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        $countries = [
            [
                'name' => 'Argentina',
                'code' => 'ARG',
                'calling_code' => '54',
                'flag_url' => 'https://flagcdn.com/w320/ar.png'
            ],
            [
                'name' => 'Bolivia',
                'code' => 'BOL',
                'calling_code' => '591',
                'flag_url' => 'https://flagcdn.com/w320/bo.png'
            ],
            [
                'name' => 'Chile',
                'code' => 'CHL',
                'calling_code' => '56',
                'flag_url' => 'https://flagcdn.com/w320/cl.png'
            ],
            [
                'name' => 'Colombia',
                'code' => 'COL',
                'calling_code' => '57',
                'flag_url' => 'https://flagcdn.com/w320/co.png'
            ],
            [
                'name' => 'Ecuador',
                'code' => 'ECU',
                'calling_code' => '593',
                'flag_url' => 'https://flagcdn.com/w320/ec.png'
            ],
            [
                'name' => 'Paraguay',
                'code' => 'PRY',
                'calling_code' => '595',
                'flag_url' => 'https://flagcdn.com/w320/py.png'
            ],
            [
                'name' => 'Perú',
                'code' => 'PER',
                'calling_code' => '51',
                'flag_url' => 'https://flagcdn.com/w320/pe.png'
            ],
            [
                'name' => 'Uruguay',
                'code' => 'URY',
                'calling_code' => '598',
                'flag_url' => 'https://flagcdn.com/w320/uy.png'
            ],
            [
                'name' => 'Venezuela',
                'code' => 'VEN',
                'calling_code' => '58',
                'flag_url' => 'https://flagcdn.com/w320/ve.png'
            ]
        ];

        foreach($countries as $country){
            Country::create($country);
        }
    }
}

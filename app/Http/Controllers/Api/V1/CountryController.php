<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Country;
use App\Traits\ApiResponser;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class CountryController extends Controller
{
    use ApiResponser;

    public function index(){
        $countries = Country::where('active', true)->get()->all();

        return $this->success($countries, 'success', 200);
    }

    public function by_id($id){

        try {

            $country = Country::findOrFail($id);

            return $this->success($country, 'success', 200);

        } catch (ModelNotFoundException $e) {
            return $this->error([], 'Resource not found', 404);
        }
    }
}

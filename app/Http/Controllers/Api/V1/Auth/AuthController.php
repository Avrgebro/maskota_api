<?php

namespace App\Http\Controllers\Api\V1\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules\Password;
use App\Traits\ApiResponser;
use App\Models\User;
use App\Http\Requests\Auth\LoginRequest;

class AuthController extends Controller
{
    use ApiResponser;

    public function login (LoginRequest $request) {

        if(($request->has(['firebase_uuid']) && !User::where('firebase_uuid', $request->firebase_uuid)->exists()) || ($request->has(['password']) && !$request->authenticate())){
            return $this->error([], 'Incorrect credentials', 401);
        } else {
            $user = $request->has(['firebase_uuid']) ? User::where('firebase_uuid', $request->firebase_uuid)->first() : $request->user();

            $token = $user->createToken('API Token ' . Str::random(10));

            return $this->success([
                'user' => $user,
                'token' => $token->plainTextToken,
            ], 'User Logged In', 200);
        }


    }

    public function logout (Request $request) {
        $token = $request->user()->currentAccessToken()->delete();
        return $this->success([], 'User logged out', 200);
    }

    public function register(Request $request){

        $rules = [
            'name' => ['required'],
            'f_lastname' => ['required'],
            'm_lastname' => ['required'],
            'email' => ['required', 'unique:users', 'email:rfc'],
            'phone' => ['required', 'unique:users', 'min:9'],
            'birthday' => ['required', 'date'],
            'password' => ['required_without_all:firebase_uuid', 'confirmed', Password::min(8)->mixedCase()->letters()->numbers()],
            'firebase_uuid' => ['required_without_all:password', 'unique:users', 'min:8']
        ];

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()){
            return $this->error(['errors' => $validator->errors()], 'Incorrect registration data', 422);
        }

        $data_array = [
            'name' => $request->name,
            'f_lastname' => $request->f_lastname,
            'm_lastname' => $request->m_lastname,
            'email' => $request->email,
            'phone' => $request->phone,
            'firebase_uuid' => $request->firebase_uuid,
            'birthday' => \Carbon\Carbon::createFromFormat('Y-m-d', $request->birthday),
            'password' => Hash::make($request->password),
            'remember_token' => Str::random(10)
        ];

        $user = User::create($data_array);
        $token = $user->createToken('API Token ' . Str::random(10));
        return $this->success([
            'user' => $user,
            'token' => $token->plainTextToken
        ], 'User successfully registered', 200);

    }
}
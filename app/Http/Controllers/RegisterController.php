<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Referral;
use App\Models\Phone;
use App\Models\Earning;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Http\Traits\ValidationRuleTrait;
use App\Http\Traits\JusibeTrait;
use App\Http\Traits\HelperTrait;
use App\Models\Subscribe;

class RegisterController extends Controller
{
    use ValidationRuleTrait;
    use JusibeTrait;
    use HelperTrait;

    public function index(Request $request)
    {
        $query =  $request->query() ? $request->query()['refcode'] : '';

        return view("auth.register",['refcode'=>$query]);
    }

    public function registerUser(Request $request)
    {
        $vRules = $this->vRules();
        $vMessages = $this->vMessages();

        $validator = Validator::make($request->all(), $vRules, $vMessages);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors(),
                'code' => '01',
            ]);
        }

        // $user = User::where('referral_code', $request->referral_code)->first();

        $data = $request->all();
        $check = $this->create($data);

        Phone::create([
            'user_id'=>$check->id,
            'phone'=>$request->phone,
            'is_verified'=>0
        ]);

        Earning::create([
            'user_id'=>$check->id,
            'amount'=>0.00,
            'reference'=>strtoupper($this->generateRandomString())
        ]);

        Subscribe::create([
            'first_name'=>$request->firstname,
            'email'=>$request->email,
            'user_type'=> 'member'
        ]);

        // if($user){
        //     Referral::create([
        //         'referrer'=>$user->id,
        //         'referred'=>$check->id,
        //         'is_deleted'=>0
        //     ]);
        // }

        //$publicKey = env('JUSIBE_PUBLIC_KEY');
        //$accessToken = env('JUSIBE_ACCESS_TOKEN');

        //$jusibe = $this->instantiate($publicKey, $accessToken);

        //$message = "Verification Code: 345668";

        //$payload = [
        //    'to' => $request->phone,
        //    'from' => 'QuesterGate Capital',
        //    'message' => $message
        //];

        //$response = $this->sendSMS($payload)->getResponse();

        $request->session()->regenerate();

        return response()->json([
            'message' => 'Account created successfully. You will be redirected shortly.',
            'code' => '00',
        ]);
    }

    public function create(array $data)
    {
        //get the last user in the  users table
        // then add one to user_id
        $user =  User::create([
            'firstname' => $data['firstname'],
            'lastname' => $data['lastname'],
            'phone' => $data['phone'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'referral_code'=> strtoupper($this->generateRandomString()),
            'is_active'=> 1,
            'is_deleted'=>0
        ]);
        $userId = 1000 + $user->id;
        User::where('id', $user->id)->update(['user_id' => $userId]);
        return $user;
    }
}

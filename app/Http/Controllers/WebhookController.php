<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\Deposit;
use App\Models\QGWallets;
use App\Models\User;
use App\Http\Traits\HelperTrait;

class WebhookController extends Controller
{
    use HelperTrait;

    public function index(Request $request){
    	
        $user = User::where('email', $request['data']['customer']['email'])->first();

        if($user){
            Deposit::create([
                'user_id'=>$user->id,
                'amount'=>$request['data']['amount']/100,
                'status'=>1,
                'is_deleted'=>0,
                'reference'=>strtoupper($this->generateRandomString())
            ]);

            QGWallets::create([
                'user_id'=>$user->id,
                'amount'=>$request['data']['amount']/100,
                'status'=>1,
                'is_deleted'=>0
            ]);
        }        

        return response()->json(['message'=> 'charge success.']);
    }
}

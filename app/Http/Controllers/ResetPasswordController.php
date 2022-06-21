<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\ForgotPassword;
use Illuminate\Support\Facades\Hash;

class ResetPasswordController extends Controller
{

    public function index(Request $request){
        $query =  $request->query();

        $user = User::where('email', $query['email'])->first();
        
        if(!$user){
            return 'Email and Code does not exist.';
        }

        $fp = ForgotPassword::where(['user_id'=> $user->id, 'fp_token'=> $query['code'] ])->first();

        if(!$fp){
            return 'Email and Code does not exist.';
        }

        return view("auth.reset-password",['email'=>$query['email']]);
    }

    public function resetPassword(Request $request){
        $user = User::where('email', $request->email)->first();

        if($request->new_password == $request->confirm_password){
            User::where("email",$request->email)->update([
                'password'=>Hash::make($request->new_password)
            ]);

            ForgotPassword::where('user_id', $user->id)->delete();

            $this->msg = 'success';
        }
        else{
            $this->msg = 'error';
        }

        return response()->json([
            'message'=>$this->msg,
        ]);
    }
}

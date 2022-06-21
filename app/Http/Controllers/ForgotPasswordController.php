<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Models\ForgotPassword;
use App\Http\Traits\HelperTrait;
use App\Http\Traits\MailerTrait;
use Illuminate\Support\Facades\Mail;

class ForgotPasswordController extends Controller
{
    use MailerTrait, HelperTrait;

    public function index(){
        return view("auth.forgot-password");
    }

    public function sendEmail(Request $request){
        $token = $this->generateRandomString();

        $to = $request->email;

        $user = User::where('email', $to)->first();
        
        $subject = 'RESET YOUR PASSWORD';

        $headers = [
            'MIME-Version' => '1.0',
            'Content-type' => 'text/html; charset=iso-8859-1',
            'From' => 'QuesterGate Limited <contact@questergate.com>'
        ];
        
        if($user){

            $msg = "
                <html>
                    <head>
                        <title>RESET YOUR PASSWORD</title>
                    </head>
                    <body>
                        <p>Dear ".$user->firstname.' '.$user->lastname.",</p>
                        <p>You can change your password using the following link:</p>
                        <p>https://questergate.com/reset?email=".$to.'&code='.$token."</p>
                        <p>If you did not initiate this request, please ignore this email. Your password will not change until you access the link above and create a new one.</p>
                        <p>Thank you,</p>
                        <p>QuesterGate Limited</p>
                    </body>
                </html>
            ";

            Mail::send([], [], function ($message) use ($to, $subject, $msg) {
                $message->to($to)->subject($subject);
                $message->from('contact@questergate.com','Questergate')
                ->setBody($msg, 'text/html');
            });
            // if(!$isSendSuccess){
            //     return response()->json(['message'=>'error']);
            // }

            ForgotPassword::create([
                'user_id'=>$user->id,
                'fp_token'=>$token
            ]);

            return response()->json(['message'=>'success']);
        }       
        
        return response()->json(['message'=>'error']);
    }
}

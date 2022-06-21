<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Traits\MailerTrait;

class CompanyController extends Controller
{
    use MailerTrait;
    
    public function createSupportMessage(Request $request){
        $to = 'contact@questergate.com';
        
        $subject = 'CUSTOMER MESSAGE';
        
        $fullname = $request->fullname;
        $email = $request->email;
        $phone = $request->phone;

        $headers = [
            'MIME-Version' => '1.0',
            'Content-type' => 'text/html; charset=iso-8859-1',
            'From' => 'QuesterGate Limited <contact@questergate.com>'
        ];

        $message = "
            <html>
                <head>
                    <title>RESET YOUR PASSWORD</title>
                </head>
                <body>
                    <p>Fullname: ".$fullname."</p>
                    <p>Email: ".$email."</p>
                    <p>Phone: ".$phone."</p>
                    <p>Message: ".$request->usermsg.",</p>
                </body>
            </html>
        ";

        $isSendSuccess = $this->send($to, $subject, $message,  $headers);

        if(!$isSendSuccess){
            return response()->json(['message'=>'error']);
        }

        return response()->json(['message'=>'success']);
    }
}

<?php

namespace App\Http\Traits;

use Illuminate\Support\Facades\Mail;

trait MailerTrait
{

    function send(string $to, string $subject, string $msg, array $additional_headers = [], string $additional_params = "") {
        return Mail::send([], [], function ($message) use ($to, $subject, $msg) {
            $message->to($to)->subject($subject);
            $message->from('contact@questergate.com','Questergate')
            ->setBody($msg, 'text/html');
         });
    }
}

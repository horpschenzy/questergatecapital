<?php

namespace App\Http\Traits;

use App\Models\User;
use App\Models\Notification;
use Illuminate\Support\Facades\Mail;

trait NotificationTrait
{
    public function saveNotification($user_id, $title, $comment, $type)
    {
        $user = User::find($user_id);
        Notification::create([
            'user_id' => $user_id,
            'title' => $title,
            'comment' => $comment,
            'type' => $type,
        ]);
        $data = [
            'title' => $title,
            'comment' => $comment,
        ];
        Mail::send('emails/notificationmail', $data, function ($message) use ($user, $title) {
            $message->to('josepholuwafemi2014@gmail.com')->subject($title);
            $message->from($user->email,$user->firstname.' '.$user->lastname);
         });
    }
}

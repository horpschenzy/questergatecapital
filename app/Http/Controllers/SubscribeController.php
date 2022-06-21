<?php

namespace App\Http\Controllers;

use App\Models\Subscribe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SubscribeController extends Controller
{
    public function createSubscriber(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'firstname' => 'required|string',
            'email' => 'required|string'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors(),
                'code' => '01',
            ]);
        }
        $subscribe = Subscribe::create([
            'first_name'=>$request->firstname,
            'email'=>$request->email
        ]);
        return back()->with(['message'=>'You have subscribed for our newletters']);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Subscribe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SubscribeController extends Controller
{
    public function createSubscriber(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'firstname' => 'required|string',
            'email' => 'required|string|unique:subscribes'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors()->first(),
                'code' => '01',
            ]);
        }
        $subscribe = Subscribe::firstOrCreate([
            'first_name'=>$request->firstname,
            'email'=>$request->email
        ]);
        return response()->json([
            'message'=>'success',
            'status'=>201
        ]);
    }

    public function index()
    {
        $members = Subscribe::where('user_type', 'member')->get()->toArray();
        $nonmembers = Subscribe::where('user_type', 'non-member')->get()->toArray();
        $count = $this->maxLength([$members, $nonmembers]);
        return view('admin.subscribe',compact('members', 'nonmembers', 'count'));
    }

    public function maxLength($array) {
        $max = 0;
        foreach($array as $child) {
            if(count($child) > $max) {
                $max = count($child);
            }
        }
        return $max;
    }

    public function store()
    {
       $users = User::all();
       foreach ($users as $key => $user) {
            Subscribe::firstOrCreate(['first_name' => $user->firstname, 'email' => $user->email, 'user_type' => 'member']);
       }
       return true;
    }
}

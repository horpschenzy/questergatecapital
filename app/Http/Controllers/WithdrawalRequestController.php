<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\WithdrawalRequest;

class WithdrawalRequestController extends Controller
{
    public function index(){
    	$WithdrawalRequest = WithdrawalRequest::all();

    	return response()->json([
    		'withdrawal_request'=>$withdrawalRequest,
    		'status'=>200
    	]);
    }

    public function create(Request $request){
        WithdrawalRequest::create([
        	'user_id'=> $request->user_id,
        	'amount'=> $request->amount,
        ]);

        return response()->json([
        	'message'=>'success',
        	'status'=>200
        ]);
    }

    public function show(Request $request){
    	$withdrawalRequest = WithdrawalRequest::where('id',$request->id)->first();

    	return response()->json([
    		'withdrawal_request'=>$withdrawalRequest,
    		'status'=>200
    	]);
    }

    public function showbyUser(Request $request){
        $withdrawalRequest = WithdrawalRequest::where('user_id',$request->user_id)->get();

        return response()->json([
            'withdrawal_request'=>$withdrawalRequest,
            'status'=>200
        ]);
    }

    public function delete(Request $request){
    	WithdrawalRequest::where('id',$request->id)->delete();

    	return response()->json([
        	'message'=>'success',
        	'status'=>200
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\BankAccount;

class BankController extends Controller
{
    protected $msg;
    
    public function index(){
    	$account = BankAccount::all();

    	return response()->json([
    		'account'=>$account,
    		'status'=>200
    	]);
    }

    public function create(Request $request, $id){
        BankAccount::create([
        	'user_id'=> $id,
        	'account_number'=> $request->account_number,
            'account_name'=> $request->account_name,
            'bank'=> $request->bank,
        ]);

        return response()->json([
        	'message'=>'success',
        	'status'=>200
        ]);
    }

    public function update(Request $request, $id=''){
        if($request->filled(['bank','account_name','account_number'])){
            $id = ($id) ?: Auth::user()->id;
            $count = BankAccount::where('user_id',$id)->count();

            if($count){
                BankAccount::where('user_id',$id)->update([
                    'bank'=>$request->bank,
                    'account_name'=>$request->account_name,
                    'account_number'=>$request->account_number
                ]);

                $this->msg = "success";
            }
            else{
                $this->msg = "success";
                $this->create($request, $id);
            }
        }
        else{
            $this->msg = "All fields are required";
        }

        return response()->json([
            'message'=>$this->msg,
            'status'=>200
        ]);
    }
    
}

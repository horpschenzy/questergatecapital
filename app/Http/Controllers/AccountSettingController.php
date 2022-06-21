<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Phone;

class AccountSettingController extends Controller
{
	protected $fInitial;

	public function __construct(){
		$this->middleware('auth');
	}

    public function index(Request $request){
    	$firstname = Auth::user()->firstname;
        $lastname = Auth::user()->lastname;

    	$phone = User::find(Auth::user()->id)->phone()->get();
    	$nok = User::find(Auth::user()->id)->nok()->get();
    	$bank = User::find(Auth::user()->id)->bank()->get();
    	$earning = User::find(Auth::user()->id)->earning()->sum('amount');

		$tqgwallet = User::find(Auth::user()->id)->qgwallet()->sum('amount');

    	$this->fInitial = $firstname[0]."".$lastname[0];

		return view('investor.setting',['user'=>Auth::user(),'fInitial'=>$this->fInitial,'phone'=>$phone,'nok'=>$nok,'bank'=>$bank,'tqgwallet'=>number_format($tqgwallet,2)]);
    }

    public function update(Request $request, $id =''){
		$id = ($id) ?: Auth::user()->id;
    	User::where('id',$id)->update([
			'firstname'=>$request->firstname,
			'lastname'=>$request->lastname,
			'email'=>$request->email,
			'phone'=>$request->phone,
			'gender'=>$request->gender,
			'state'=>$request->state,
			'city'=>$request->city,
			'address'=>$request->address
		]);
		Phone::where('user_id',$id)->update([
			'phone'=>$request->phone
		]);

		return response()->json([
			'message'=>'success',
			'status'=>200
		]);
    }

    public function changePassword(Request $request, $id=''){
		$id = ($id) ?: Auth::user()->id;
        $user = User::where('id',$id)->select('password')->first();
		
        if(Hash::check($request->old_password, $user->password)){
            if($request->password == $request->password_confirmation){
                User::where("id",$id)->update([
                    'password'=>Hash::make($request->password)
                ]);

                $this->msg = 'success';
            }
            else{
                $this->msg = 'Passwords does not match.';
            }
        }
        else{
            $this->msg = 'Password does not exist.';
        }

        return response()->json([
            'message'=>$this->msg,
            'status'=>200
        ]);
    }
}

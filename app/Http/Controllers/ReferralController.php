<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class ReferralController extends Controller
{
	protected $fInitial,$arrReferral = [];

	public function __construct(){
		$this->middleware('auth');
	}

    public function index(Request $request){
    	$firstname = Auth::user()->firstname;
        $lastname = Auth::user()->lastname;

    	$earning = User::find(Auth::user()->id)->earning()->sum('amount');
    	$referral = User::find(Auth::user()->id)->referral()
            ->leftJoin('users','users.id','=','referral.referred')
            ->select('users.firstname','users.lastname','users.created_at','referral.amount','referral.updated_at')->get();

    	$this->fInitial = $firstname[0]."".$lastname[0];
        $tqgwallet = User::find(Auth::user()->id)->qgwallet()->sum('amount');

        foreach ($referral as $r) {
            $dt = Carbon::parse($r->created_at);
            $updt = $r->updated_at != null ? Carbon::parse($r->updated_at)->format('M j, Y') : '';

            $rf = [
                'fullname'=>$r->firstname.' '.$r->lastname,
                'amount'=>number_format($r->amount,2),
                'created_at'=>$dt->format('M j, Y'),
                'updated_at'=>$updt
            ];

            array_push($this->arrReferral, $rf);
        }

        return view('investor.referral',['referral'=>$this->arrReferral,'fInitial'=>$this->fInitial,'user'=>Auth::user(),'earning'=>number_format($earning,2),'tqgwallet'=>number_format($tqgwallet,2)]);
    }
}

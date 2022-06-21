<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class EarningController extends Controller
{
    protected $fInitial;

	public function __construct(){
		$this->middleware('auth');
	}

    public function index(Request $request){
    	$firstname = Auth::user()->firstname;
        $lastname = Auth::user()->lastname;

    	$tearning = User::find(Auth::user()->id)->earning()->sum('amount');
    	$earnings = User::find(Auth::user()->id)->earning()->get();

    	$this->fInitial = $firstname[0]."".$lastname[0];

		return view('investor.earning',['user'=>Auth::user(),'fInitial'=>$this->fInitial,'earning'=>number_format($tearning,2),'earnings'=>$earnings]);
    }
}
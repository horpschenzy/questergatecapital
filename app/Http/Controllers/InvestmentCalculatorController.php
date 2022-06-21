<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class InvestmentCalculatorController extends Controller
{
    protected $fInitial, $arrdeposits = [], $status, $remark, $msg, $proof;

    public function __construct(){
        $this->middleware('auth');
    }

    public function index(Request $request){
        $firstname = Auth::user()->firstname;
        $lastname = Auth::user()->lastname;

        $tqgwallet = User::find(Auth::user()->id)->qgwallet()->sum('amount');
        

        $this->fInitial = $firstname[0]."".$lastname[0];

        return view('investor.calculator',['user'=>Auth::user(),'fInitial'=>$this->fInitial, 'tqgwallet'=>number_format($tqgwallet,2)]);
    }
}
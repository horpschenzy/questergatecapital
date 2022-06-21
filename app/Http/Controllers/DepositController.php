<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use App\Models\User;
use Carbon\Carbon;
use App\Models\Deposit;
use App\Models\QGwallets;

class DepositController extends Controller
{
    protected $fInitial, $arrdeposits = [], $status, $remark, $msg, $proof;

    public function __construct(){
        $this->middleware('auth');
    }

    public function index(Request $request){
        $firstname = Auth::user()->firstname;
        $lastname = Auth::user()->lastname;

        $tearning = User::find(Auth::user()->id)->earning()->sum('amount');

        $tdeposit = User::find(Auth::user()->id)->deposit()->where('status',1)->sum('amount');

        $tqgwallet = User::find(Auth::user()->id)->qgwallet()->sum('amount');

        $deposits = User::find(Auth::user()->id)->deposit()->orderBy('id','desc')->get();
        
        $processing = User::find(Auth::user()->id)->deposit()->where('status',2)->get();
        

        $this->fInitial = $firstname[0]."".$lastname[0];

        foreach ($deposits as $d) {
            $dt = Carbon::parse($d->created_at);

            if($d->status == 1){ $this->status = 'bg-green-500'; $this->remark = 'Successful'; }
            elseif($d->status == 2){ $this->status = 'bg-yellow-500'; $this->remark = 'Processing'; }
            else{ $this->status = 'bg-red-500'; $this->remark = 'Cancelled'; } 

            $dp = [
                'id'=>$d->id,
                'status'=>$this->status,
                'amount'=>number_format($d->amount,2),
                'reference'=>$d->reference,
                'remark'=>$this->remark,
                'proof_image'=>$d->proof_image,
                'created_at'=>$dt->format('M j, Y h:i A')
            ];

            array_push($this->arrdeposits, $dp);
        }

        return view('investor.deposit',['user'=>Auth::user(),'fInitial'=>$this->fInitial,'earning'=>number_format($tearning,2),'deposit'=>$this->arrdeposits,'tdeposit'=>$tdeposit,'processing'=>$processing,'proof'=>$this->proof, 'tqgwallet'=>number_format($tqgwallet,2)]);
    }

    public function createRequest(Request $request){
        if($request->filled('amount')){
            Deposit::create([
                'status'=>2,
                'reference'=>Str::random(15),
                'amount'=>$request->amount,
                'user_id'=>Auth::user()->id
            ]);

            $this->msg = 'success';
        }
        else{
            $this->msg = 'All fields are required';
        }

        return response()->json([
            'message'=>$this->msg,
            'status'=>200
        ]);
    }

    public function filter(Request $request){
        if($request->filter == 'all'){
            $deposits = User::find(Auth::user()->id)->deposits()->orderBy('id','desc')->get();
        }
        else{
            $deposits = User::find(Auth::user()->id)->deposits()->where('status',(int)$request->filter)->orderBy('id','desc')->get();
        }
        

        foreach ($deposits as $d) {
            $dt = Carbon::parse($d->created_at);

            if($d->status == 1){ $this->status = 'bg-green-500'; $this->remark = 'Successful'; }
            elseif($d->status == 2){ $this->status = 'bg-yellow-500'; $this->remark = 'Processing'; }
            else{ $this->status = 'bg-red-500'; $this->remark = 'Cancelled'; } 

            $dp = [
                'id'=>$d->id,
                'status'=>$this->status,
                'amount'=>number_format($d->amount,2),
                'reference'=>$d->reference,
                'remark'=>$this->remark,
                'created_at'=>$dt->format('M j, Y h:i A')
            ];

            array_push($this->arrdeposits, $dp);
        }

        return response()->json(['deposits'=>$this->arrdeposits]);
    }

    public function delete(Request $request){
        Deposit::where('id',$request->deposits_id)->delete();

        return response()->json([
            'message'=>'success',
            'status'=>200
        ]);
    }
}
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Carbon\Carbon;
use App\Models\Withdrawal;
use App\Models\QGWallets;
use App\Http\Traits\HelperTrait;
use App\Http\Traits\NotificationTrait;

class WithdrawalController extends Controller
{
    use HelperTrait;
    use NotificationTrait;
    protected $fInitial, $arrWithdrawal = [], $status, $remark, $msg;
    protected $penaltyFee, $amountAfterDeduction, $balance;

    public function __construct(){
        $this->middleware('auth');
    }

    public function index(Request $request){
        $firstname = Auth::user()->firstname;
        $lastname = Auth::user()->lastname;

        $tearning = User::find(Auth::user()->id)->earning()->sum('amount');
        $twithdrawal = User::find(Auth::user()->id)->withdrawal()->where('status',1)->sum('amount');
        $withdrawal = User::find(Auth::user()->id)->withdrawal()->orderBy('id','desc')->get();
        $countbank = User::find(Auth::user()->id)->bank()->count();
        $bank = User::find(Auth::user()->id)->bank()->first();

        $tqgwallet = User::find(Auth::user()->id)->qgwallet()->sum('amount');

        $this->fInitial = $firstname[0]."".$lastname[0];
        
        foreach ($withdrawal as $w) {
            $dt = Carbon::parse($w->created_at);

            if($w->status == 1){ $this->status = 'bg-green-500'; $this->remark = 'Successful'; }
            elseif($w->status == 2){ $this->status = 'bg-yellow-500'; $this->remark = 'Processing'; }
            else{ $this->status = 'bg-red-500'; $this->remark = 'Cancelled'; } 

            $wd = [
                'id'=>$w->id,
                'status'=>$this->status,
                'amount'=>number_format($w->amount,2),
                'reference'=>$w->reference,
                'remark'=>$this->remark,
                'created_at'=>$dt->format('M j, Y h:i A')
            ];

            array_push($this->arrWithdrawal, $wd);
        }

        return view('investor.withdrawal',['user'=>Auth::user(),'fInitial'=>$this->fInitial,'earning'=>number_format($tearning,2),'withdrawal'=>$this->arrWithdrawal,'twithdrawal'=>$twithdrawal,'countbank'=>$countbank,'bank'=>$bank, 'tqgwallet'=>number_format($tqgwallet,2)]);
    }

    public function createRequest(Request $request){
        if($request->filled('amount')){
            $tqgwallet = User::find(Auth::user()->id)->qgwallet()->sum('amount');

            if($request->amount > $tqgwallet){
                return response()->json([
                    'message'=>'Insufficient funds in your QGWallet.',
                    'status'=>200
                ]);
            }
            else{
                QGWallets::create([
                    'user_id'=>Auth::user()->id,
                    'amount'=> -$request->amount,
                    'status'=>1,
                    'is_deleted'=>0
                ]);
                $reference = strtoupper($this->generateRandomString());
                Withdrawal::create([
                    'amount'=>$request->amount,
                    'user_id'=> Auth::user()->id,
                    'reference'=> $reference,
                    'status'=>2,
                    'is_deleted'=>0
                ]);
                $comment = 'N'.number_format($request->amount, 2).' withdrawal was made by '.Auth::user()->firstname.' '.Auth::user()->lastname .' with reference number '.$reference;
                $this->saveNotification(Auth::user()->id, 'Withdrawal Notification', $comment, 'withdrawal');
            }

            return response()->json([
                'message'=>'success',
                'status'=>200
            ]);
        }
        else{

            return response()->json([
                'message'=>'All fields are required',
                'status'=>200
            ]);
        }
    }

    public function filter(Request $request){
        if($request->filter == 'all'){
            $withdrawal = User::find(Auth::user()->id)->withdrawal()->orderBy('id','desc')->get();
        }
        else{
            $withdrawal = User::find(Auth::user()->id)->withdrawal()->where('status',(int)$request->filter)->orderBy('id','desc')->get();
        }
        

        foreach ($withdrawal as $w) {
            $dt = Carbon::parse($w->created_at);

            if($w->status == 1){ $this->status = 'bg-green-500'; $this->remark = 'Successful'; }
            elseif($w->status == 2){ $this->status = 'bg-yellow-500'; $this->remark = 'Processing'; }
            else{ $this->status = 'bg-red-500'; $this->remark = 'Cancelled'; } 

            $wd = [
                'id'=>$w->id,
                'status'=>$this->status,
                'amount'=>number_format($w->amount,2),
                'reference'=>$w->reference,
                'remark'=>$this->remark,
                'created_at'=>$dt->format('M j, Y h:i A')
            ];

            array_push($this->arrWithdrawal, $wd);
        }

        return response()->json(['withdrawal'=>$this->arrWithdrawal]);
    }
}
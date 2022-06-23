<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\User;
use App\Models\Referral;
use App\Models\QGWallets;
use Illuminate\Http\Request;
use App\Models\InvestmentPlan;
use App\Http\Traits\HelperTrait;
use App\Models\InvestmentPlanDetail;
use Illuminate\Support\Facades\Auth;
use App\Http\Traits\NotificationTrait;

class InvestmentPlanController extends Controller
{
    use HelperTrait;
    use NotificationTrait;

    protected $fInitial, $arrPlan = [], $status, $remark, $msg;
    protected $minProfit, $maxProfit, $minTReturns, $maxTReturns, $profit, $totalReturns;

    public function __construct(){
        $this->middleware('auth');
    }
    
    public function index(){
        $firstname = Auth::user()->firstname;
        $lastname = Auth::user()->lastname;

        $tearning = User::find(Auth::user()->id)->earning()->sum('amount');
        $this->fInitial = $firstname[0]."".$lastname[0];

    	$plans = InvestmentPlan::where('user_id', Auth::user()->id)->where('inv_type','fixed')->orderBy('id','desc')->get();
        $tqgwallet = User::find(Auth::user()->id)->qgwallet()->sum('amount');

        foreach ($plans as $p) {
            $dt = Carbon::parse($p->created_at);

            if($p->is_active == 1){ $this->status = 'bg-green-500'; $this->remark = 'Active'; }
            else if($p->is_active == 0){ $this->status = 'bg-yellow-500'; $this->remark = 'Inactive'; }
            else{ $this->status = 'bg-blue-500'; $this->remark = 'ROI Taken'; }

            $pd = [
                'id'=>$p->id,
                'status'=>$this->status,
                'capital'=>number_format($p->capital, 2),
                'plan'=>$p->plan,
                'total_roi'=>$p->total_roi,
                'profit'=>$p->profit,
                'created_at'=>$dt->format('M j, Y h:i A'),
                'duration'=>$p->duration,
                'inv_start'=>$p->inv_start,
                'inv_end'=>$p->inv_end,
                'reference'=>$p->reference,
                'remark'=>$this->remark
            ];

            array_push($this->arrPlan, $pd);
        }

    	$flex_plans = InvestmentPlan::where('user_id', Auth::user()->id)->where('inv_type','flex')->orderBy('id','desc')->get();

    	return view('investor.plan',['user'=>Auth::user(),'plans'=>$this->arrPlan,'fInitial'=>$this->fInitial,'earning'=>number_format($tearning,2),'tqgwallet'=>number_format($tqgwallet,2),'walletBalance'=> $tqgwallet,'flex_plans'=>$flex_plans]);
    
    }

    public function adminViewPlan($user_id, $id){
    	$plans = InvestmentPlan::where('id', $id)->first();
        $tqgwallet = User::find($user_id)->qgwallet()->sum('amount');
        if($plans->inv_type == 'flex'){
            $pd = InvestmentPlan::with('details')->where('id', $id)->first();
            $todayDate = Carbon::now()->addDays(30);
            $investmentEndDate = $pd->inv_end;
            $hasInvestmentPlanEnded = $todayDate->greaterThanOrEqualTo($investmentEndDate);
        }
        else{

    
            $dt = Carbon::parse($plans->created_at);
            $start = $plans->inv_start == null ? '' : Carbon::parse($plans->inv_start)->format('M j, Y');
            $end = $plans->inv_end == null ? '' : Carbon::parse($plans->inv_end)->format('M j, Y');
    
            $todayDate = Carbon::create(Carbon::now()->year, Carbon::now()->month, Carbon::now()->day);
    
            $investmentEndDate = Carbon::create(Carbon::parse($plans->inv_end)->year, Carbon::parse($plans->inv_end)->month, Carbon::parse($plans->inv_end)->day);
    
            $hasInvestmentPlanEnded = $todayDate->greaterThanOrEqualTo($investmentEndDate);
    
            if($plans->is_active == 1){ $this->status = 'bg-green-500'; $this->remark = 'Active'; }
            elseif($plans->is_active == 0){ $this->status = 'bg-red-500'; $this->remark = 'Inactive'; }
            else{ $this->status = 'bg-blue-500'; $this->remark = 'ROI Taken'; }
    
            $pd = [
                'id'=>$plans->id,
                'status'=>$this->status,
                'capital'=>number_format($plans->capital, 2),
                'plan'=>$plans->plan,
                'total_roi'=>$plans->total_roi,
                'profit'=>$plans->profit,
                'total_returns'=>$plans->total_returns,
                'created_at'=>$dt->format('M j, Y h:i A'),
                'duration'=>$plans->duration,
                'inv_start'=>$start,
                'inv_end'=>$end,
                'reference'=>$plans->reference,
                'remark'=>$this->remark,
                'is_active'=>$plans->is_active,
                'inv_type'=>$plans->inv_type,
            ];
        }


    	return view('admin.plan-detail',['user'=>User::find($user_id),'plans'=>$pd,'tqgwallet'=>number_format($tqgwallet,2),'walletBalance'=> $tqgwallet, 'hasInvestmentPlanEnded'=>$hasInvestmentPlanEnded]);
    }
    
    public function view(Request $request){
        $firstname = Auth::user()->firstname;
        $lastname = Auth::user()->lastname;

        $this->fInitial = $firstname[0]."".$lastname[0];

    	$plans = InvestmentPlan::where('id', $request->id)->first();
        $tqgwallet = User::find(Auth::user()->id)->qgwallet()->sum('amount');
        if($plans->inv_type == 'flex'){
            $pd = InvestmentPlan::with('details')->where('id', $request->id)->first();
            $todayDate = Carbon::now()->addDays(30);
            $investmentEndDate = $pd->inv_end;
            $hasInvestmentPlanEnded = $todayDate->greaterThanOrEqualTo($investmentEndDate);
        }
        else{

    
            $dt = Carbon::parse($plans->created_at);
            $start = $plans->inv_start == null ? '' : Carbon::parse($plans->inv_start)->format('M j, Y');
            $end = $plans->inv_end == null ? '' : Carbon::parse($plans->inv_end)->format('M j, Y');
    
            $todayDate = Carbon::create(Carbon::now()->year, Carbon::now()->month, Carbon::now()->day);
    
            $investmentEndDate = Carbon::create(Carbon::parse($plans->inv_end)->year, Carbon::parse($plans->inv_end)->month, Carbon::parse($plans->inv_end)->day);
    
            $hasInvestmentPlanEnded = $todayDate->greaterThanOrEqualTo($investmentEndDate);
    
            if($plans->is_active == 1){ $this->status = 'bg-green-500'; $this->remark = 'Active'; }
            elseif($plans->is_active == 0){ $this->status = 'bg-red-500'; $this->remark = 'Inactive'; }
            else{ $this->status = 'bg-blue-500'; $this->remark = 'ROI Taken'; }
    
            $pd = [
                'id'=>$plans->id,
                'status'=>$this->status,
                'capital'=>number_format($plans->capital, 2),
                'plan'=>$plans->plan,
                'total_roi'=>$plans->total_roi,
                'profit'=>$plans->profit,
                'total_returns'=>$plans->total_returns,
                'created_at'=>$dt->format('M j, Y h:i A'),
                'duration'=>$plans->duration,
                'inv_start'=>$start,
                'inv_end'=>$end,
                'reference'=>$plans->reference,
                'remark'=>$this->remark,
                'is_active'=>$plans->is_active,
                'inv_type'=>$plans->inv_type,
            ];
        }


    	return view('investor.plan-detail',['user'=>Auth::user(),'plans'=>$pd,'fInitial'=>$this->fInitial,'tqgwallet'=>number_format($tqgwallet,2),'walletBalance'=> $tqgwallet, 'hasInvestmentPlanEnded'=>$hasInvestmentPlanEnded]);
    }

    public function addAmountToFlexPlan(Request $request){
        $tqgwallet = User::find(Auth::user()->id)->qgwallet()->sum('amount');
        if($tqgwallet >= $request->capital){
            if($request->capital > 25000000){
                return response()->json([
                    'message'=>"Maximum of ₦25,000,000 is required.",
                ]);
            }
            if($request->capital >= 10000){
                $investment = InvestmentPlan::find($request->investment_id);
                $start_date = Carbon::parse($investment->inv_start);
                $now = Carbon::now();
                $selected_day = $now->diffInDays($start_date);
                if($selected_day >= ($investment->duration - 30)){
                    return response()->json([
                        'message'=>"Capital can't be added at this time.",
                    ]);
                }
                $days_remaining =  $investment->duration - $selected_day;
                $roi_per_day = round($investment->total_roi * $days_remaining,2);
                $roi_earned = round($request->capital * ($roi_per_day / 100), 2);


                
                InvestmentPlanDetail::create([
                    'capital'=>$request->capital,
                    'investment_plan_id'=>$investment->id,
                    'days_remaining'=> $days_remaining,
                    'days_added'=> $selected_day,
                    'roi'=> $roi_per_day,
                    'roi_earned'=> $roi_earned
                ]);
                QGWallets::create([
                    'amount'=> -$request->capital,
                    'status'=>1,
                    'user_id'=> Auth::id()
                ]);

                $comment = 'N'.number_format($request->capital, 2).' was added to a flex plan by '.Auth::user()->firstname.' '.Auth::user()->lastname .' with reference number '.$investment->reference;
                $this->saveNotification(Auth::user()->id, 'Flex Investment Capital Topup  Notification', $comment, 'investment');
                return response()->json([
                    'message'=>'success',
                    'status'=>200
                ]);
            }
            else{
                return response()->json([
                    'message'=>"Minimum of ₦10,000 is required. <br> Kindly fund your QG Wallet and try again.",
                ]);
            }        
        }
        else{
            return response()->json([
                'message'=>"Insufficient Capital. <br> Kindly fund your QG Wallet and try again.",
            ]);
        }        
    }
    
    public function createFlex(Request $request){
        $tqgwallet = User::find(Auth::user()->id)->qgwallet()->sum('amount');
        // if($tqgwallet >= $request->capital){
            if($request->capital > 25000000){
                return response()->json([
                    'message'=>"Maximum of ₦25,000,000 is required.",
                ]);
            }
            if($request->capital >= 10000){
                $pl = explode(':', $request->plan);
                $plan = $pl[0];
                $days = $pl[1];
                $roi_per_day = round($pl[2] * $days,2);
                $roi_earned = round($request->capital * ($roi_per_day / 100), 2);
                $start_date = Carbon::now();
                $end_date = Carbon::now()->addDays($days);
                $reference = strtoupper($this->generateRandomString());
                $id = isset($request->user_id) ? $request->user_id : Auth::user()->id;
                $investment = InvestmentPlan::create([
                    'is_active'=> 0,
                    'capital'=>$request->capital,
                    'plan'=> $pl[0],
                    'total_roi'=>$pl[2],
                    'duration'=>$pl[1],
                    'inv_type'=> 'flex',
                    'inv_start'=> $start_date,
                    'inv_end'=> $end_date,
                    'user_id'=> $id,
                    'reference'=> $reference
                ]);
                // InvestmentPlanDetail::create([
                //     'capital'=>$request->capital,
                //     'investment_plan_id'=>$investment->id,
                //     'days_remaining'=> $days,
                //     'days_added'=>'0',
                //     'roi'=> $roi_per_day,
                //     'roi_earned'=> $roi_earned
                // ]);
                // QGWallets::create([
                //     'amount'=> -$request->capital,
                //     'status'=>1,
                //     'user_id'=> Auth::id()
                // ]);
                $comment = 'A '.$pl[1].' days Flex Investment with '.$pl[2].'% ROI and a capital of N'.number_format($request->capital, 2).' was created by '.Auth::user()->firstname.' '.Auth::user()->lastname .' with reference number '.$reference;
                $this->saveNotification(Auth::user()->id, 'Investment Creation Notification', $comment, 'investment');
                return response()->json([
                    'message'=>'success',
                    'status'=>200
                ]);
            }
            else{
                return response()->json([
                    'message'=>"Minimum of ₦10,000 is required. <br> Kindly fund your QG Wallet and try again.",
                ]);
            }        
        // }
        // else{
        //     return response()->json([
        //         'message'=>"Minimum of ₦10,000 is required. <br> Kindly fund your QG Wallet and try again.",
        //     ]);
        // }        
    }

    public function create(Request $request){

        if(($request->capital >= 100000) && ($request->capital <= 25000000)){
            $pl = explode(':', $request->plan);

            // if(sizeof($roi) > 1)
            // {
            //     $this->minProfit = (($request->capital * (int)$roi[0]) / 100);
            //     $this->maxProfit = (($request->capital * (int)$roi[1]) / 100);

            //     $this->minTReturns = $request->capital + (($request->capital * $roi[0]) / 100);
            //     $this->maxTReturns = $request->capital + (($request->capital * $roi[1]) / 100);

            //     $this->profit = (string)number_format($this->minProfit).' - '.(string)number_format($this->maxProfit);
            //     $this->totalReturns = (string)number_format($this->minTReturns).' - '.(string)number_format($this->maxTReturns);
            // }
            // else
            // {
            //     $this->maxProfit = (($request->capital * $roi[0]) / 100);
            //     $this->maxTReturns = $request->capital + (($request->capital * $roi[0]) / 100);

            //     $this->profit = (string)number_format($this->maxProfit);
            //     $this->totalReturns = (string)number_format($this->maxTReturns);
            // }

            $this->maxProfit = (($request->capital * (int)$pl[2]) / 100);
            $this->maxTReturns = $request->capital + (($request->capital * (int)$pl[2]) / 100);

            $this->profit = (string)number_format($this->maxProfit);
            $this->totalReturns = (string)number_format($this->maxTReturns);
            $reference = strtoupper($this->generateRandomString());
            $id = isset($request->user_id) ? $request->user_id : Auth::user()->id;
            InvestmentPlan::create([
                'is_active'=> 0,
                'capital'=>$request->capital,
                'plan'=> $pl[0],
                'total_roi'=>$pl[2],
                'profit'=>$this->profit,
                'total_returns'=>$this->totalReturns,
                'duration'=>$pl[1],
                'user_id'=> $id,
                'reference'=> $reference
            ]);


            $comment = 'A '.$pl[1].' Months Fixed Investment with '.$pl[2].'% ROI and a capital of N'.number_format($request->capital, 2).' was created by '.Auth::user()->firstname.' '.Auth::user()->lastname .' with reference number '.$reference;
            $this->saveNotification(Auth::user()->id, 'Investment Creation Notification', $comment, 'investment');
            return response()->json([
                'message'=>'success',
                'status'=>200
            ]);
        }
        else{
            return response()->json([
                'message'=>"Minimum of ₦100,000 is required. <br> Maximum of ₦25,000,000.<br> Kindly fund your QG Wallet and try again.",
            ]);
        }        
    }

    public function changeIsActiveToZero(){
    	InvestmentPlan::where('user_id',Auth::user()->id)->update([
			'is_active'=>0
		]);
    }

    public function activate(Request $request){
        $end = Carbon::now();
        $plan = InvestmentPlan::where('id', $request->id)->first();
        $tqgwallet = User::find($plan->user_id)->qgwallet()->sum('amount');
        if($plan->capital > $tqgwallet){
                return response()->json([
                    'message'=>'error',
                    'status'=>200
                ]);
        }
        if($plan->inv_type == 'flex'){
                $days = (int)$plan->duration;
                $roi_per_day = round($plan->total_roi * $days,2);
                $roi_earned = round($plan->capital * ($roi_per_day / 100), 2);
                $start_date = Carbon::now();
                $end_date = Carbon::now()->addDays($days);
                InvestmentPlanDetail::create([
                    'capital'=>$plan->capital,
                    'investment_plan_id'=>$plan->id,
                    'days_remaining'=> $days,
                    'days_added'=>'0',
                    'roi'=> $roi_per_day,
                    'roi_earned'=> $roi_earned
                ]);
                QGWallets::create([
                    'amount'=> -$plan->capital,
                    'status'=>1,
                    'user_id'=> $plan->user_id
                ]);
                InvestmentPlan::where('id', $request->id)->update([
        			'is_active'=>1,
                    'inv_start'=>$start_date,
                    'inv_end'=>$end_date
        		]);
        }
        else{
            $end = $end->addMonths($plan->duration); 
    
            if($plan->capital > 25000000){
                return response()->json([
                    'message'=>'error',
                    'status'=>200
                ]);
            }
    
            InvestmentPlan::where('id', $request->id)->update([
    			'is_active'=>1,
                'inv_start'=>Carbon::now(),
                'inv_end'=>$end
    		]);
    
            QGWallets::create([
    			'amount'=>-$plan->capital,
                'user_id'=>$plan->user_id,
                'status'=>1,
                'is_deleted'=>0
    		]);
    
            // $referral = Referral::where('referred', $plan->user_id)->first();
    
            // if($referral){
            //     if($referral->is_paid != 1){
            //         Referral::where('referred', $plan->user_id)->update([
            //             'amount'=>10000,
            //             'is_paid'=>1
            //         ]);
    
            //         QGWallets::create([
            //             'amount'=>10000,
            //             'user_id'=>$referral->referrer,
            //             'status'=>1,
            //             'is_deleted'=>0
            //         ]);
            //     }
            // }
        }

        $comment = 'An Investment with reference number '.$plan->reference.' has been activated by '.Auth::user()->firstname.' '.Auth::user()->lastname;
        $this->saveNotification($plan->user_id, 'Investment Activation Notification', $comment, 'investment');
        return response()->json([
            'message'=>'success',
            'status'=>200
        ]);
    }

    public function delete(Request $request){
        InvestmentPlan::where('id', $request->id)->delete();
        
        return response()->json([
            'message'=>'success',
            'status'=>200
        ]);
    }

    public function deactivate(Request $request){

        $plan = InvestmentPlan::where('id', $request->id)->first();
        if($plan->inv_type == 'flex'){
            $capital = InvestmentPlanDetail::where('investment_plan_id', $request->id)->sum('capital');
            $this->balance = $capital - (($capital * 20)/100);
        }
        else{
            $this->balance = $plan->capital - (($plan->capital * 20)/100);
        }

        $qgwallet = QGWallets::create([
            'amount'=> $this->balance,
            'status'=> 1,
            'user_id'=> $plan->user_id
        ]);

        if($qgwallet){
            InvestmentPlanDetail::where('investment_plan_id', $request->id)->delete();
            InvestmentPlan::where('id', $request->id)->delete();
            return response()->json(['message'=>'success', 'status'=>200]);
        }   
        
        return response()->json(['message'=>'error', 'status'=>200]);
    }

    public function withdrawFromInvestmentPlan(Request $request){
        $plan = InvestmentPlan::where('id', $request->plan_id)->first();

        $remaining = $plan->capital - $request->amount;

        if($request->amount > (float)$plan->capital){
            return response()->json(['message'=>'error', 'status'=>200]);
        }
        else{
            if($request->hasInvestmentPlanEnded == 0){
                if($request->deduct_from == 'amount_withdrawn'){
                    $this->penaltyFee = ($request->amount * 20)/100;
                    $this->amountAfterDeduction = $request->amount - $this->penaltyFee;
                    $this->balance = $plan->capital - $request->amount;
                }
    
                if($request->deduct_from == 'balance'){
                    $this->penaltyFee = ($request->amount * 20)/100;
                    $this->amountAfterDeduction = $request->amount;
                    $this->balance = $plan->capital - ($request->amount + $this->penaltyFee);
                }

                if($this->balance < 50000){
                    return response()->json(['message'=>'error', 'status'=>200]);
                }

                // if($plan->total_roi == '10'){
                //     $this->maxProfit = ($this->balance * (int)$plan->total_roi)/100;
                //     $this->maxTReturns = $this->balance + (($this->balance * (int)$plan->total_roi)/100);

                //     $this->profit = (string)number_format($this->maxProfit);
                //     $this->totalReturns = (string)number_format($this->maxTReturns);
                // }
                // else{
                //     $explodePlan = explode('-', $plan->total_roi);
                //     $this->minProfit = ($this->balance * (int)$explodePlan[0])/100;
                //     $this->maxProfit = ($this->balance * (int)$explodePlan[1])/100;

                //     $this->minTReturns = $this->balance + (($this->balance * (int)$explodePlan[0])/100);
                //     $this->maxTReturns = $this->balance + (($this->balance * (int)$explodePlan[1])/100);

                //     $this->profit = (string)number_format($this->minProfit).' - '.(string)number_format($this->maxProfit);
                //     $this->totalReturns = (string)number_format($this->minTReturns).' - '.(string)number_format($this->maxTReturns);
                // }

                $this->maxProfit = ($this->balance * (int)$plan->total_roi)/100;
                $this->maxTReturns = $this->balance + (($this->balance * (int)$plan->total_roi)/100);

                $this->profit = (string)number_format($this->maxProfit);
                $this->totalReturns = (string)number_format($this->maxTReturns);
    
                InvestmentPlan::where('id', $request->plan_id)->update([
                    'capital'=> $this->balance,
                    'profit'=>$this->profit,
                    'total_returns'=>$this->totalReturns
                ]);

                QGWallets::create([
                    'amount'=> $this->amountAfterDeduction,
                    'status'=> 1,
                    'user_id'=> $plan->user_id
                ]);

                return response()->json(['message'=>'success', 'status'=>200]);
            }
            else{
                return $this->withdrawAfterEndDate($plan);
            }
        }        
    }

    public function withdrawAfterEndDate($plan){

        if(trim($plan->total_roi) == '10'){
            $this->totalReturns = $plan->capital + (($plan->capital * 10)/100);
        }

        if(trim($plan->total_roi) == '45'){
            $this->totalReturns = $plan->capital + (($plan->capital * 45)/100);
        }

        if(trim($plan->total_roi) == '70'){
            $this->totalReturns = $plan->capital + (($plan->capital * 70)/100);
        }

        if(trim($plan->total_roi) == '120'){
            $this->totalReturns = $plan->capital + (($plan->capital * 120)/100);
        }

        $wallet = QGWallets::create([
            'amount'=>$this->totalReturns,
            'user_id'=>Auth::user()->id,
            'status'=>1,
            'is_deleted'=>0
        ]);

        if($wallet){
            InvestmentPlan::where('id', $plan->id)->update([
                'is_active'=>2
            ]);

            return response()->json([
                'message'=>'success',
                'status'=>200
            ]);
        }

        return response()->json([
            'message'=>'error',
            'status'=>200
        ]);
    }

}

<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\User;
use App\Models\Audit;
use App\Models\Phone;
use App\Models\Deposit;
use App\Models\Earning;
use App\Models\NextOfKin;
use App\Models\QGWallets;
use App\Models\Withdrawal;
use App\Models\BankAccount;
use Illuminate\Support\Str;
use App\Exports\UsersExport;
use App\Models\Notification;
use Illuminate\Http\Request;
use App\Models\InvestmentPlan;
use App\Models\SupportMessage;
use App\Exports\DepositsExport;
use App\Exports\WithdrawalsExport;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Validator;

class AdminController extends Controller
{
    protected $eArray = [];
    public $user;
    public function __construct(User $user)
    {
        $this->middleware('auth');
        $this->user = $user;
    }

    public function audit($type)
    {

        $audits = Audit::where(function ($query) use ($type){
            $morph = new User; 
            
            if($type == 'deposit'){
                $morph = new Deposit; 
            }

            elseif($type == 'earning'){
                $morph = new Earning; 
            }
            
            elseif($type == 'investment'){
                $morph = new InvestmentPlan;
            }
            
            elseif($type == 'withdrawal'){
                $morph = new Withdrawal;
            }
    
            $query->where('auditable_type', get_class($morph));
        })
        ->with('user')
        ->whereHas('user')
        ->orderBy('id', 'desc')
        ->paginate(15);
    	return view('admin.audit-log',['type'=>$type, 'audits'=>$audits]);
    }

    public function updateQgWallet(Request $request, $id)
    {
        if(Auth::user()->usertype != 'superadmin'){
            return response()->json([
                'message'=>'Unauthorised Access',
                'status'=>422
            ]);
        }

        $qg = new QGWallets();
        $qg->amount = $request->amount;
        $qg->status = 1;
        $qg->user_id = $id;
        $qg->save();

        return response()->json([
            'message'=>'success',
            'status'=>200
        ]);

    }
    public function editUserProfile(Request $request, $id)
    {
        $user = User::find($id);
        $nok = $user->nok;
        $bank = $user->bank;
        $tqgwallet = $user->qgwallet()->sum('amount');
    	// $phone = User::find($id)->phone()->get();
    	// $nok = User::find($id)->nok()->get();
    	// $bank = User::find($id)->bank()->get();
    	// $earning = User::find($id)->earning()->sum('amount');

		// $tqgwallet = User::find($id)->qgwallet()->sum('amount');
    	return view('admin.user-edit',['user'=>$user, 'nok'=>$nok,'bank'=>$bank,'tqgwallet'=>number_format($tqgwallet,2)]);
    }

    public function changeWithdrawalStatus(Request $request, $id)
    {
        $withdrawal = Withdrawal::find($id);
        $withdrawal->status = $request->status;
        if($withdrawal->save()) {
            return response()->json([
                'message'=>'success',
                'status'=>201
            ]);
        }

        return response()->json([
            'message'=>'Withdrawal status cant be changed.',
            'status'=>422
        ]);
    }

    public function changeDepositStatus(Request $request, $id)
    {
        $deposit = Deposit::find($id);
        $deposit->status = $request->status;
        if($deposit->save()) {
            return response()->json([
                'message'=>'success',
                'status'=>201
            ]);
        }

        return response()->json([
            'message'=>'Deposit status cant be changed.',
            'status'=>422
        ]);
    }

    public function investments()
    {
        $plans = InvestmentPlan::with('user')->whereHas('user')->where('is_active', 1)->where('inv_type','fixed')->orderBy('id','desc')->get();
        // dd($plans);
        $this->arrPlan = [];
        foreach ($plans as $p) {
            $dt = Carbon::parse($p->created_at);

            if($p->is_active == 1){ $this->status = 'bg-green-500'; $this->remark = 'Active'; }
            else if($p->is_active == 0){ $this->status = 'bg-yellow-500'; $this->remark = 'Inactive'; }
            else{ $this->status = 'bg-blue-500'; $this->remark = 'ROI Taken'; }

            $pd = [
                'id'=>$p->id,
                'user_id'=> $p->user->id,
                'fullname'=> $p->user->firstname.' '.$p->user->firstname,
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

    	$flex_plans = InvestmentPlan::with('user')->whereHas('user')->where('is_active', 1)->where('inv_type','flex')->orderBy('id','desc')->get();

    	return view('admin.investments',['plans'=>$this->arrPlan,'flex_plans'=>$flex_plans]);
    
    }
    public function restoreUser(Request $request)
    {
        // User::where('id', $request->id)->delete();
        User::withTrashed()->find($request->id)->restore();
        return response()->json([
            'message'=>'success',
            'status'=>200
        ]);
    }
    public function deleteAdminUser(Request $request)
    {
        // User::where('id', $request->id)->delete();
        User::find($request->id)->delete();
        
        return response()->json([
            'message'=>'success',
            'status'=>200
        ]);
    }
    public function editUser(Request $request){
        $user = User::find($request->id);
        if(!$user){
            return response()->json([
                'message'=> "User not found.",
                'status'=>404
            ]);
        }
        $user->firstname = $request->firstname;
        $user->lastname = $request->lastname;
        $user->usertype = $request->usertype;
        $user->email = $request->email;
        $user->phone = $request->phone;
        if($request->password) {
            $user->password = Hash::make($request->password);
        }

        if($user->save()){
            return response()->json([
                'message'=>'success',
                'status'=>201
            ]);
        }

        return response()->json([
            'message'=> "User can't be updated at this time. Try Again",
            'status'=>422
        ]);
    	
    }

    public function addUser(Request $request){
        $validator = Validator::make(
            $request->all(), [
            'firstname' => 'required',
            'lastname'   => 'required',
            'usertype'   => 'required',
            'password'   => 'required',
            'email'   => 'required|unique:users',
            'phone'   => 'required|unique:users'
            ]
        );

        if ($validator->fails()) {
            return response()->json(['status' => 400, 'message' => $validator->errors()->first()], 200);
        }

        $user = User::create([
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'usertype' => $request->usertype,
            'email' => $request->email,
            'phone' => $request->phone,
            'password' => Hash::make($request->password),
        ]);

        if($user){
            return response()->json([
                'message'=>'success',
                'status'=>201
            ]);
        }

        return response()->json([
            'message'=> "User can't be added at this time. Try Again",
            'status'=>422
        ]);
    	
    }

    public function index(){
        if(Auth::user()->usertype == 'superadmin' || Auth::user()->usertype == 'admin'){
            $users = User::whereNull('usertype')->orderBy('id','DESC')->limit(10)->get();
            $users_count = User::whereNull('usertype')->count();
            $deposit = Deposit::sum('amount');
            $withdrawal = Withdrawal::sum('amount');

            return view('admin.dashboard',['users'=>$users,'deposit'=>number_format($deposit,2),'withdrawal'=>number_format($withdrawal,2),'users_count'=>$users_count]);
        }
        else{
            Auth::logout();
            return redirect('login');
        }
    }

    public function support(){
    	$support = SupportMessage::all();

        return view('admin.support',['support'=>$support]);
    }

    public function deposit(){
        return view('admin.deposit');
    }

    public function earning(){
        return view('admin.earning');
    }

    public function withdrawal(){
        return view('admin.withdrawal');
    }

    public function exportDeposits(){

        $deposits = Deposit::with('user')->orderBy('id','desc')->get();
        return Excel::download(new DepositsExport($deposits), 'deposits.xlsx');
    }

    public function depositList(){

        $deposits = Deposit::with('user')->orderBy('id','desc')->paginate(15);
        $users = User::whereNull('usertype')->get();
        return view('admin.deposit-list',['deposit'=>$deposits, 'users'=>$users]);
    }

    public function exportWithdrawals(){

        $withdrawals = Withdrawal::with('user')->whereHas('user')->orderBy('id','desc')->get();
        return Excel::download(new WithdrawalsExport($withdrawals), 'withdrawals.xlsx');
    }

    public function withdrawalList(){
        $withdrawal = Withdrawal::with('user')->whereHas('user')->orderBy('id','desc')->paginate(15);
        return view('admin.withdrawal-list',['withdrawal'=>$withdrawal]);
    }

    public function createDeposit(Request $request){
        if(Auth::user()->usertype != 'superadmin'){
            return response()->json([
                'message'=>'Unauthorised Access',
                'status'=>422
            ]);
        }
        if($request->filled('amount') && $request->filled('user_id') && $request->filled('status')){
            Deposit::create([
                'status'=>(int)$request->status,
                'reference'=>Str::random(15),
                'amount'=>$request->amount,
                'user_id'=>(int)$request->user_id
            ]);

            return response()->json([
                'message'=>'success',
                'status'=>201
            ]);
        }
        else{
            return response()->json([
                'message'=>'All fields are required',
                'status'=>422
            ]);
        }
    	
    }

    public function createEarning(Request $request){
        if($request->filled('amount') && $request->filled('user_id') ){
            Earning::create([
                'reference'=>Str::random(15),
                'amount'=>$request->amount,
                'user_id'=>(int)$request->user_id
            ]);

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

    public function deleteEarning(Request $request){
        if($request->filled('user_id') ){
            Earning::where('user_id',(int)$request->user_id)->delete();

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

    public function viewUserProfile(Request $request){
        $user = User::where('id',$request->id)->first();
        $phone = Phone::where('user_id',$request->id)->get();
        $ba = BankAccount::where('user_id',$request->id)->get();
        $withdrawal = Withdrawal::where('user_id',$request->id)->get();
        $deposit = Deposit::where('user_id',$request->id)->get();
        $plan = InvestmentPlan::where('user_id',$request->id)->get();

        $tearning = User::find($request->id)->earning()->sum('amount');

    	$plans = InvestmentPlan::where('user_id', $request->id)->where('inv_type','fixed')->orderBy('id','desc')->get();
        $tqgwallet = User::find($request->id)->qgwallet()->sum('amount');
        $this->arrPlan = [];
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

    	$flex_plans = InvestmentPlan::where('user_id', $request->id)->where('inv_type','flex')->orderBy('id','desc')->get();


        return view('admin.user-profile',['user'=>$user, 'phone'=>$phone, 'ba'=>$ba, 'withdrawal'=>$withdrawal, 'deposit'=>$deposit, 'plan'=>$plan,'plans'=>$this->arrPlan,'flex_plans'=>$flex_plans,'tqgwallet'=>number_format($tqgwallet,2),'walletBalance'=> $tqgwallet]);
    }

    public function updateWithdrawal(Request $request){
        Withdrawal::where('user_id',$request->user_id)->update(['status'=>$request->status]);

        return response()->json(['message'=>'success']);
    }

    public function usersTrash(){
        $use = $this->deleteOverDueUsers();
        $users = User::onlyTrashed()->whereNull('usertype')->orderBy('deleted_at','desc')->paginate(15);
        return view('admin.users-trash', compact('users'));
    }
    
    public function notifications(){
        $notifications = Notification::with('user')->whereHas('user')->orderBy('id','desc')->paginate(15);
        return view('admin.notification', compact('notifications'));
    }
    public function exportUsers($status){
        if ($status == 'active') {
            $users = User::whereNull('usertype')->whereHas('investment', function($q) {
                $q->where('is_active', 1);
            })->orderBy('id','desc')->get();
        }
        else{
            $users = User::whereNull('usertype')->where(function($q){
                $q->whereHas('investment', function($q){
                    $q->where('is_active', 0);
                })->doesntHave('investment', 'or');
            })->orderBy('id','desc')->get();
        }
        return Excel::download(new UsersExport($users), $status.'users.xlsx');
    }
    public function activeUsers(){
        $users = User::whereNull('usertype')->whereHas('investment', function($q) {
            $q->where('is_active', 1);
        })->orderBy('id','desc')->paginate(15);
        return view('admin.active-users', compact('users'));
    }
    public function inactiveUsers(){
        $users = User::whereNull('usertype')->where(function($q){
            $q->whereHas('investment', function($q){
                $q->where('is_active', 0);
            })->doesntHave('investment', 'or');
        })->orderBy('id','desc')->paginate(15);
        return view('admin.inactive-users', compact('users'));
    }
    public function users(){
        $users = User::whereNotNull('usertype')->paginate(15);
        return view('admin.users', compact('users'));
    }

    public function deleteOverDueUsers()
    {
        $users = User::onlyTrashed()->get();
        $arr = [];
        $today = Carbon::now();
        foreach($users AS $user){
            $new_date = Carbon::parse($user->deleted_at)->addDays(2);
            if($today->greaterThanOrEqualTo($new_date)){
                User::where('id', $user->id)->forcedelete();
            }
        }
    }
}

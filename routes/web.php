<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\ForgotPasswordController;
use App\Http\Controllers\ResetPasswordController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DepositController;
use App\Http\Controllers\WithdrawalController;
use App\Http\Controllers\ReferralController;
use App\Http\Controllers\AccountSettingController;
use App\Http\Controllers\NextOfKinController;
use App\Http\Controllers\BankController;
use App\Http\Controllers\WebhookController;
use App\Http\Controllers\InvestmentPlanController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\InvestmentCalculatorController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\SubscribeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});

Route::get('/about', function () {
    return view('about');
});

Route::get('/contact', function () {
    return view('contact');
});

Route::post('/contact/message', [CompanyController::class, 'createSupportMessage']);

Route::get('/privacy', function () {
    return view('privacy');
});

Route::get('/terms', function () {
    return view('terms');
});

Route::get('/faq', function () {
    return view('faq');
});

Route::get('/investment-calculator', function () {
    return view('investment-calculator');
});

Route::get('/investment-plan', function () {
    return view('investment-plan');
});

Route::get('/resource', function () {
    return view('resource');
});

Route::get('/login', [LoginController::class, 'index'])->name('login');;
Route::post('/login', [LoginController::class, 'authenticate']);
Route::post('/admin/login', [LoginController::class, 'authenticateAdmin']);

Route::get('/verify/phone', [LoginController::class, 'verifyPhone']);
Route::get('/logout', [LoginController::class,'logout']);

Route::get('/register', [RegisterController::class, 'index']);
Route::post('/register', [RegisterController::class, 'registerUser']);

Route::post('/subscribe', [SubscribeController::class, 'createSubscriber']);

Route::get('/forgot', [ForgotPasswordController::class, 'index']);
Route::post('/send/reset/password/link', [ForgotPasswordController::class, 'sendEmail']);

Route::get('/reset', [ResetPasswordController::class, 'index']);
Route::put('/reset', [ResetPasswordController::class, 'resetPassword']);


Route::prefix('investor')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index']);

    Route::get('/deposit', [DepositController::class, 'index']);
	Route::post('/deposit', [DepositController::class,'createRequest']);
	Route::get('/deposit/filter', [DepositController::class,'filter']);
	Route::delete('/deposit', [DepositController::class, 'delete']);

	Route::get('/withdrawal', [WithdrawalController::class, 'index']);
	Route::post('/withdrawal', [WithdrawalController::class, 'createRequest']);
	Route::get('/withdrawal/filter', [WithdrawalController::class, 'filter']);

	Route::get('/referral', [ReferralController::class, 'index']);

	Route::get('/setting', [AccountSettingController::class, 'index']);
	Route::put('/setting', [AccountSettingController::class, 'update']);
	Route::put('/setting/password', [AccountSettingController::class, 'changePassword']);
	
	Route::get('/calculator', [InvestmentCalculatorController::class, 'index']);

	Route::put('/nok', [NextOfKinController::class, 'update']);
	
	Route::put('/bank', [BankController::class, 'update']);

	Route::get('/plan', [InvestmentPlanController::class, 'index']);
	Route::post('/plan', [InvestmentPlanController::class, 'create']);
	Route::post('/flexplan', [InvestmentPlanController::class, 'createFlex']);
	Route::post('/addamounttoflexplan', [InvestmentPlanController::class, 'addAmountToFlexPlan']);
	Route::get('/plan-detail/{id}', [InvestmentPlanController::class, 'view']);
	Route::put('/plan/activate', [InvestmentPlanController::class, 'activate']);
	Route::delete('/plan/delete', [InvestmentPlanController::class, 'delete']);
	Route::delete('/plan/deactivate', [InvestmentPlanController::class, 'deactivate']);
	Route::post('/withdrawal/plan', [InvestmentPlanController::class, 'withdrawFromInvestmentPlan']);
	Route::post('/withdrawal/flex/plan/{id}', [InvestmentPlanController::class, 'withdrawFromInvestmentPlanDetail']);
});

Route::post('/webhook', [WebhookController::class, 'index']);

Route::prefix('admin')->group(function(){
	Route::get('login', [LoginController::class, 'adminLogin']);
	Route::get('dashboard', [AdminController::class, 'index']);
	Route::get('support', [AdminController::class, 'support']);
	Route::get('deposit', [AdminController::class, 'deposit']);
	Route::get('earning', [AdminController::class, 'earning']);
	Route::get('withdrawal', [AdminController::class, 'withdrawal']);
	Route::post('user/deposit/create', [AdminController::class, 'createDeposit']);
	Route::post('user/earning/create', [AdminController::class, 'createEarning']);
	Route::put('user/withdrawal/update', [AdminController::class, 'updateWithdrawal']);
	Route::delete('user/earning/delete', [AdminController::class, 'deleteEarning']);
	Route::get('deposit/list', [AdminController::class, 'depositList']);
	Route::post('change/deposit/status/{id}', [AdminController::class, 'changeDepositStatus']);
	Route::post('change/withdrawal/status/{id}', [AdminController::class, 'changeWithdrawalStatus']);
	Route::get('earning/list', [AdminController::class, 'earningList']);
	Route::get('withdrawal/list', [AdminController::class, 'withdrawalList']);
	Route::get('user/{id}', [AdminController::class, 'viewUserProfile']);
	Route::get('edit/user/{id}', [AdminController::class, 'editUserProfile']);
	Route::get('active/users', [AdminController::class, 'activeUsers']);
	Route::get('users/trash', [AdminController::class, 'usersTrash']);
	Route::get('export/{status}/users', [AdminController::class, 'exportUsers']);
	Route::get('export/deposits', [AdminController::class, 'exportDeposits']);
	Route::get('export/withdrawals', [AdminController::class, 'exportWithdrawals']);
	Route::get('inactive/users', [AdminController::class, 'inactiveUsers']);
	Route::get('users', [AdminController::class, 'users']);
	Route::post('add/user', [AdminController::class, 'addUser']);
	Route::post('edit/user', [AdminController::class, 'editUser']);
	Route::delete('delete/user', [AdminController::class, 'deleteAdminUser']);
	Route::put('restore/user', [AdminController::class, 'restoreUser']);
	Route::get('investments', [AdminController::class, 'investments']);
	Route::put('user/setting/{id}', [AccountSettingController::class, 'update']);
	Route::put('update/nok/{id}', [NextOfKinController::class, 'update']);
	Route::put('change/password/{id}', [AccountSettingController::class, 'changePassword']);
	Route::put('update/bank/{id}', [BankController::class, 'update']);
	Route::put('/update/qgwallet/{id}', [AdminController::class, 'updateQgWallet']);
	Route::get('/audits/{type}', [AdminController::class, 'audit']);
	Route::get('/notifications', [AdminController::class, 'notifications']);
	Route::get('/plan-detail/{userid}/{id}', [InvestmentPlanController::class, 'adminViewPlan']);
	Route::get('/subscribers', [SubscribeController::class, 'index']);
	Route::get('/insert/subscribers', [SubscribeController::class, 'store']);
	
});

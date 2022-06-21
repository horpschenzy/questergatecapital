<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Traits\ValidationRuleTrait;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{
    use ValidationRuleTrait;

    public function index()
    {
        return view("auth.login");
    }

    public function adminLogin()
    {
        return view("admin.login");
    }

    public function verifyPhone()
    {
        return view("auth.verify-phone");
    }

    public function authenticate(Request $request)
    {
        $credentials = [
            'email' => $request->email,
            'password' => $request->password,
        ];


        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return response()->json([
                'message' => 'Login successfully. You will be redirected shortly.',
                'code' => '00',
            ]);
        }

        return response()->json([
            'message' => 'Invalid login details. Please try again.', //$validator->errors(),
            'code' => '01',
        ]);
    }

    public function authenticateAdmin(Request $request)
    {
        $credentials = [
            'email' => $request->email,
            'password' => $request->password,
        ];


        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            $user = User::where('id', Auth::user()->id)->first();

            if($user->usertype == 'superadmin' || $user->usertype == 'customeradmin' || $user->usertype == 'accountantadmin'|| $user->usertype == 'admin' ){
                return response()->json([
                    'message' => 'Login successfully. You will be redirected shortly.',
                    'code' => '00',
                ]);
            }
            else{

                return response()->json([
                    'message' => 'Permission denied.', 
                    'code' => '01',
                ]);
            }
        }

        return response()->json([
            'message' => 'Invalid login details. Please try again.', 
            'code' => '01',
        ]);
    }

    public function logout(){
        Auth::logout();
        return redirect('login');
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\NextOfKin;

class NextOfKinController extends Controller
{
    public function __construct(){
        $this->middleware('auth');
    }

    public function index(){
    	$nok = NextOfKin::all();

    	return response()->json([
    		'nok'=>$nok,
    		'status'=>200
    	]);
    }

    public function create(Request $request){
        NextOfKin::create([
        	'user_id'=> Auth::user()->id,
        	'nok_name'=> $request->nok_name,
            'nok_phone'=> $request->nok_phone,
            'nok_relationship'=> $request->nok_relationship,
            'nok_state'=> $request->nok_state,
            'nok_city'=> $request->nok_city,
            'nok_address'=> $request->nok_address
        ]);

        return response()->json([
        	'message'=>'success',
        	'status'=>200
        ]);
    }

    public function update(Request $request, $id=''){
        $id = ($id) ?: Auth::user()->id;
        $count = NextOfKin::where('user_id',$id)->count();

        if($count){
            $nok = NextOfKin::where('user_id',$id)->update([
                'nok_name'=> $request->nok_name,
                'nok_phone'=> $request->nok_phone,
                'nok_relationship'=> $request->nok_relationship,
                'nok_state'=> $request->nok_state,
                'nok_city'=> $request->nok_city,
                'nok_address'=> $request->nok_address
            ]);
        }
        else{
            $this->create($request);
        }

        return response()->json([
            'message'=>'success',
            'status'=>200
        ]);
    }
}

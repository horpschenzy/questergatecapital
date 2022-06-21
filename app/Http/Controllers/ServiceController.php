<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ServiceController extends Controller
{
	public function showConvertYoutubeToMP(){
        return view('youtube');
    }

    public function convertYoutubeToMP3(Request $request){
        $response = $this->getYTDownload($request->url);
        return $response;
    }

    public function getYTDownload($url){
        $_v = parse_url($url,PHP_URL_QUERY);
        parse_str($_v, $params); 
        
        $ch = curl_init();  
 
        curl_setopt($ch,CURLOPT_URL,'https://www.yt-download.org/api/widget/mp3/'.$params['v']);
        curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
     
        $output=curl_exec($ch);
     
        curl_close($ch);
        return $output;
    }
}

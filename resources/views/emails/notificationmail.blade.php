<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

  <title>Slider</title>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    
  <!--[if gte mso 15]>
  <style type="text/css">
    table { font-size:1px; line-height:0; mso-margin-top-alt:1px;mso-line-height-rule: exactly; }
    * { mso-line-height-rule: exactly; }
  </style>
  <![endif]-->  
  <style>
      .ReadMsgBody { width: 100%; background-color: #F6F6F6; }
        .ExternalClass { width: 100%; background-color: #F6F6F6; }
        body { width: 100%; background-color: #f6f6f6; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; font-family: Georgia,  serif }
        table { border-collapse: collapse !important; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
                
        @-ms-viewport{ width: device-width; }

        @media only screen and (max-width: 639px){
        .wrapper{ width:100%;  padding: 0 !important; }
        }    

        @media only screen and (max-width: 480px){ 
        .centerClass{ margin:0 auto !important; }         
        .imgClass{ width:100% !important; height:auto; }    
        .wrapper{ width:320px; padding: 0 !important; }  
        .header{ width:320px; padding: 0 !important; background-image: url(http://placehold.it/320x400) !important; }   
        .container{ width:300px;  padding: 0 !important; }
        .mobile{ width:300px; display:block; padding: 0 !important; text-align:center !important;}
        .mobile50{ width:300px; padding: 0 !important; text-align:center; }
        *[class="mobileOff"] { width: 0px !important; display: none !important; }
        *[class*="mobileOn"] { display: block !important; max-height:none !important; }
        }
                
                
            

        /* Slider */

        .sliderFallback:hover {opacity:0.85;filter:alpha(opacity=85);}

        a#rotator img {
        -webkit-transition: all 1s ease-in-out;
        -moz-transition: all 1s ease-in-out; 
        -o-transition: all 1s ease-in-out; 
        -ms-transition: all 1s ease-in-out; 
        }

        a#rotator img:hover { 
        -webkit-transform: rotate(360deg); 
        -moz-transform: rotate(360deg); 
        -o-transform: rotate(360deg);
        -ms-transform: rotate(360deg); 
        }

        .sliderFallback { -webkit-animation: disapear 10s infinite; -moz-animation: disapear 10s infinite; -o-animation: disapear 10s infinite; animation: disapear 10s infinite; }

        @-webkit-keyframes disapear {
        0% {opacity: 0;}
        100% {opacity: 0;}
        }
        
        @-moz-keyframes disapear {
        0% {opacity: 0;}
        100% {opacity: 0;}
        }

        @keyframes disapear {
        0% {opacity: 0;}
        100% {opacity: 0;}
        }
        @keyframes disapear {
        0% {opacity: 0;}
        100% {opacity: 0;}
        }

        #slider_theme.activeSlider{
        position: relative;
        width: 100%;
        overflow: hidden;
        min-height: 100px;
        height: auto;
        }

        #slider_theme.activeSlider .control{
        position: relative;
        left: 0px;
        white-space:nowrap;
        animation: slider-navigate 10s infinite;
        -webkit-animation: slider-navigate 10s infinite;
        -moz-animation: slider-navigate 10s infinite;
        -o-animation: slider-navigate 10s infinite;
        animation: slider-navigate 10s infinite;
        font-size: 0px;
        width: 100%;
        }

        #slider_theme .control img{
        margin: 0px;
        padding: 0px;
        display: inline-block;
        vertical-align: middle;
        }


        #slider_theme .control img:first-child{
        width: 100%;
        }

        #slider_theme.activeSlider .control img{
        -moz-animation: show-width 10s infinite;
        -webkit-animation: show-width 10s infinite;
        -o-animation: show-width 10s infinite;
        animation: show-width 10s infinite;
        }

        @keyframes show-width {
        0%{ width: 25%; max-width: 25%; }
        100%{ width: 25%; max-width: 25%; }
        }

        @-moz-keyframes show-width {
        0%{ width: 25%; max-width: 25%; }
        100%{ width: 25%; max-width: 25%; }
        }

        @-webkit-keyframes show-width {
        0%{ width: 25%; max-width: 25%; }
        100%{ width: 25%; max-width: 25%; }
        }

        @-o-keyframes show-width {
        0%{ width: 25%; max-width: 25%; }
        100%{ width: 25%; max-width: 25%; }
        }

        @keyframes slider-navigate {
        0%{ left: 0%; display: block; width: 400%; }
        12%{ left: 0%; }
        34%{ left: -100%; }
        46%{ left: -100%; }
        68%{ left: -200%; }
        80%{ left: -200%; }
        100%{ left: 0%;  width: 400%; }
        }

        @-webkit-keyframes slider-navigate {
        0%{ left: 0%; display: block; width: 400%; }
        12%{ left: 0%; }
        34%{ left: -100%; }
        46%{ left: -100%; }
        68%{ left: -200%; }
        80%{ left: -200%; }
        100%{ left: 0%;  width: 400%; }
        }

        @-moz-keyframes slider-navigate {
        0%{ left: 0%; display: block; width: 400%; }
        12%{ left: 0%; }
        34%{ left: -100%; }
        46%{ left: -100%; }
        68%{ left: -200%; }
        80%{ left: -200%; }
        100%{ left: 0%;  width: 400%; }
        }

        @-o-keyframes slider-navigate {
        0%{ left: 0%; display: block; width: 400%; }
        12%{ left: 0%; }
        34%{ left: -100%; }
        46%{ left: -100%; }
        68%{ left: -200%; }
        80%{ left: -200%; }
        100%{ left: 0%;  width: 400%; }
        }

        body[yahoo] #slider_theme .control img{
        display: none;
        }

        body[yahoo] #slider_theme .control img:first-child{
        display: block !important;
        }    
  </style>  

</head>
<body marginwidth="0" marginheight="0" leftmargin="0" topmargin="0" style="background-color:#F6F6F6;  font-family:Georgia,serif; margin:0; padding:0; min-width: 100%; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">

  <!--[if !mso]><!-- -->
  <img style="min-width:640px; display:block; margin:0; padding:0" class="mobileOff" width="640" height="1" src="https://s14.postimg.org/7139vfhzx/spacer.gif">
  <!--<![endif]-->

    <!-- Start Background -->
    <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#F6F6F6">
        <tr>
            <td width="100%" valign="top" align="center">
                
                
                <!-- Start Wrapper  -->
                <table width="640" cellpadding="0" cellspacing="0" border="0" class="wrapper" bgcolor="#222222">
                    <tr>
                        <td height="20" style="font-size:10px; line-height:10px;">   </td><!-- Spacer -->
                    </tr>
                    <tr>
                        <td align="center">

                            <!-- Start Container  -->
                            <table width="600" cellpadding="0" cellspacing="0" border="0" class="container">
                                <tr>
                                    <td width="600" class="mobile" style="font-family:Georgia; font-size:12px; line-height:20px; font-weight:bold; text-transform:uppercase; letter-spacing:2px; color:#FFFFFF;" align="center">
                                        QuesterGate Capital
                                    </td>
                                </tr>
                            </table>
                            <!-- Start Container  -->                   

                        </td>
                    </tr>
                    <tr>
                        <td height="20" style="font-size:10px; line-height:10px;"> </td><!-- Spacer -->
                    </tr>                        
                </table> 
                <!-- End Wrapper  -->                
      
                
                
                
                <!-- Start Wrapper  -->
                <table width="640" cellpadding="0" cellspacing="0" border="0" class="wrapper" bgcolor="#FFFFFF">
                    <tr>
                        <td height="50" style="font-size:10px; line-height:10px;">   </td><!-- Spacer -->
                    </tr>
                    <tr>
                        <td align="center">

                            <!-- Start Container  -->
                            <table width="600" cellpadding="0" cellspacing="0" border="0" class="container">
                                <tr>
                                    <td width="600" class="mobile" style="font-family:Georgia; font-size:12px; line-height:18px;" align="center">

                                        <!-- Start Content -->
                                        <table width="500" cellpadding="0" cellspacing="0" border="0" class="container">
                                            <tr>
                                                <td width="500" class="mobile" style="font-family:Georgia; font-size:26px; line-height:32px;" align="center">
                                                    {{ $title }}
                                                </td>               
                                            </tr>
                                            <tr>
                                                <td height="30" style="font-size:10px; line-height:10px;"></td>
                                            </tr>
                                            <tr>
                                                <td width="500" class="mobile" style="font-family:Georgia; font-size:16px; line-height:20px; color:#747474;" align="center">
                                                    {{ $comment }} 
                                                </td>               
                                            </tr>
                                        </table>
                                        <!-- End Content -->                                        
                                        
                                    </td>
                                </tr>
                            </table>
                            <!-- Start Container  -->                   

                        </td>
                    </tr>
                    <tr>
                        <td height="60" style="font-size:10px; line-height:10px;"> </td><!-- Spacer -->
                    </tr>                        
                </table> 
                <!-- End Wrapper  -->
                
                
                
                <!-- Start Wrapper  -->
                <table width="640" cellpadding="0" cellspacing="0" border="0" class="wrapper" bgcolor="#222222">
                    <tr>
                        <td height="20" style="font-size:10px; line-height:10px;">   </td><!-- Spacer -->
                    </tr>
                    <tr>
                        <td align="center">

                            <!-- Start Container  -->
                            <table width="600" cellpadding="0" cellspacing="0" border="0" class="container">
                                <tr>
                                    <td width="600" class="mobile" style="font-family:Georgia; font-size:14px; line-height:20px; color:#FFFFFF;" align="center">
                                        &copy; {{ date('Y'); }} QuesterGate Capital
                                    </td>
                                </tr>
                            </table>
                            <!-- Start Container  -->                   

                        </td>
                    </tr>
                    <tr>
                        <td height="20" style="font-size:10px; line-height:10px;"> </td><!-- Spacer -->
                    </tr>                        
                </table> 
                <!-- End Wrapper  -->                  

      
            </td>
        </tr>
    </table>
    <!-- End Background -->
    
</body>
</html>
<!doctype html>
<html class="bg-gray-200"><head>
    

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <title> Referrals - QuesterGate Limited</title>
    @include('favicon')
    <link href="/questergatecapital/public/css/style.css" rel="stylesheet">
    <link href="/questergatecapital/public/css/tooltips.css" rel="stylesheet">
    <link href="/questergatecapital/public/css/primer.css" rel="stylesheet">
    <link href="/questergatecapital/public/css/scrolltop.css" rel="stylesheet">
    <style type="text/css">.alert-flash {
      right: 25px;
      top: 25px;
    }
    .fullname-initial{
        padding: 7px 9px; background-color: #001D3D; color: #fff; border-radius: 5em
    }
    .mn-active{color:#001D3D}
    .btn-icon:hover{
        text-decoration: underline;
    }
    </style>
    <script type="text/javascript" src="/questergatecapital/public/js/jquery.js"></script>
    <script type="text/javascript" src="/questergatecapital/public/js/moment.js"></script>
    <script type="text/javascript" src="/questergatecapital/public/js/script.js?v=16"></script>
    <script type="text/javascript"> window.$crisp=[];window.CRISP_WEBSITE_ID="59767aec-ab5f-49a2-9233-f872ade8029a";(function(){ d=document;s=d.createElement("script"); s.src="https://client.crisp.chat/l.js"; s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})(); </script>
    </head>

    <body class="font-sans antialiased text-gray-900 leading-normal">
        <div class="h-screen flex">
            @include('investor.layout.sidebar')

            <div class="flex-1 min-w-0 flex flex-col bg-white">
                @include('investor.layout.topbar') 

                <main class="p-6 flex-1 bg-gray-200 overflow-y-auto relative">
                <a id="scroll-top-btn"></a>

@include('investor.layout.scroll')
                    <h2 class="text-xl md:text-2xl leading-snug font-semibold tracking-tight text-gray-900">Referrals</h2> 
                    <p class="mt-2">
                    Our referral package is an additional means for us to reward our Investors for recommending QuesterGate Limited to their friends and family as a company for safe and rewarding investments in the long term.</p>

                    <p class="mt-2">To learn more about our referral package, 
                        <a href="/faq" class="view-more" target="_blank"><strong>click here.</strong></a>
                    </p>
                    <div class="md:flex">
                        <div class="bg-white rounded shadow overflow-x-auto mt-6 w-full md:w-2/3 mr-4">
                            <table class="w-full whitespace-no-wrap referral-list">
                                <tr class="text-left font-semibold">
                                    <th class="px-6 pt-6 pb-4">Name</th> 
                                    <th class="px-6 pt-6 pb-4">Amount Earned</th> 
                                    <th class="px-6 pt-6 pb-4">Date Earned</th>
                                </tr> 

                                @foreach($referral as $r)
                                <tr class="hover:bg-gray-100 focus-within:bg-gray-100 tr-data">
                                    <td class="border-t">
                                        <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{$r['fullname']}}</span>
                                    </td>
                                    <td class="border-t">
                                        <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">₦ {{$r['amount']}}</span>
                                    </td>
                                    <td class="border-t">
                                        <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">
                                            <span>{{$r['updated_at']}}</span>
                                        </span>
                                    </td>
                                </tr>
                                @endforeach
                            </table>
                        </div> 
                        <div class="bg-white rounded shadow overflow-x-auto mt-6 w-full md:w-1/3 p-4">
                            <h4 class="font-semibold text-gray-800 text-lg leading-tight border-b-2 border-gray-200 pb-4 mt-4">Refer A Friend</h4> 
                            <p class="mt-4 text-gray-700">Spread the word, copy and share your personal referral link with your friends and social circles.</p> 

                            <p class="mt-4 text-gray-700"><span class="text-sm">CODE:</span> 
                            <strong style="color: #378dbd;">{{$user->referral_code}}</strong></p> 
                            
                            <div class="mt-6">
                               
                                <div class="flex my-3">
                                <input type="text" readonly="readonly" class="bg-white text w-full focus:outline-none px-3 py-2 rounded rounded-r-none text-gray-900 border focus:bg-white referral-link" value="{{url('register')}}?refcode={{$user->referral_code}}" id="refcode-box">

                                    <button class="px-3 py-2 text text-gray-800 font-semibold bg-gray-100 hover:bg-gray-200 border border-l-none rounded rounded-l-none focus:outline-none" onclick="copyToClipboard(this);">Copy</button>
                                </div>
                            </div>
                        </div>
                    </div> 

                    @include('investor.layout.footer')
                </main>
            </div>

        </div>        
    </body>
</html>
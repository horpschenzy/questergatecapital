<!doctype html>
<html class="bg-gray-200">
    <head>
    

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title> Deposits - QuesterGate Capital</title>
    @include('favicon')
    <link href="/questergatecapital/public/css/style.css" rel="stylesheet">
    <link href="/questergatecapital/public/css/tooltips.css" rel="stylesheet">
    <link href="/questergatecapital/public/css/scrolltop.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.css" integrity="sha512-nNlU0WK2QfKsuEmdcTwkeh+lhGs6uyOxuUs+n+0oXSYDok5qy0EI0lt01ZynHq6+p/tbgpZ7P+yUb+r71wqdXg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <style type="text/css">
    .alert-flash {
      right: 25px;
      top: 25px;
    }
    .fullname-initial{
        padding: 7px 9px; background-color: #001D3D; color: #fff; border-radius: 5em
    }
    .cancel{ color: #FF0000 !important; }
    .cancel:hover{ text-decoration: underline; }
    .support:hover{text-decoration: underline}
    .dz-button {
        font-size: 1rem;
        color: #fff;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        padding-top: .25rem;
        padding-bottom: .25rem;
        margin-top: .75rem;
        border-radius: .125rem;
        background-color: #00C9B6;
    }
    .btn-icon:hover{
        text-decoration: underline;
    }
    </style>
    
    <script type="text/javascript"> window.$crisp=[];window.CRISP_WEBSITE_ID="59767aec-ab5f-49a2-9233-f872ade8029a";(function(){ d=document;s=d.createElement("script"); s.src="https://client.crisp.chat/l.js"; s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})(); </script>
    </head>

    <body class="font-sans antialiased text-gray-900 leading-normal">
        <div class="h-screen flex">
            @include('investor.layout.sidebar')

            <div class="flex-1 min-w-0 flex flex-col bg-white">
                @include('investor.layout.topbar')

                <main class="p-6 flex-1 bg-gray-200 overflow-y-auto relative">
                <a id="scroll-top-btn"></a>

                <!-- -->
                <div class="mt-2 mb-5 rounded-md bg-blue-50 p-4">
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <svg fill="currentColor" viewBox="0 0 20 20" class="h-5 w-5 text-blue-400"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                        </div> 
                        <div class="ml-3 flex-1 md:flex md:justify-between">
                            <p class="text-sm leading-5 text-blue-700">
                            Watch video to learn how to deposit. <a href="/resource" class="font-bold">Click here</a>
                            </p> 
                        </div>
                    </div>
                </div>
                <!-- -->

@include('investor.layout.scroll')

                    <div class="md:flex">
                        <div class="w-full md:w-5/6 ">                            
                            <span class="text-xl md:text-2xl leading-snug font-semibold tracking-tight text-gray-900">Deposits</span>
                        </div> 

                        <div class="w-full md:w-1/6">
                            <div class="relative">
                                <button class="px-4 py-2 text-white font-semibold bg-lime-100 border rounded focus:outline-none focus:shadow-outline w-full deposit-fund" onclick="depositFundPrompt();" ><span>Deposit Funds</span></button>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded shadow overflow-x-auto mt-6">
                        <table class="w-full whitespace-no-wrap deposit-list">
                            <tr class="text-left font-semibold">
                                <th class="px-6 pt-6 pb-4 text-center">Status</th> 
                                <th class="px-6 pt-6 pb-4">Reference</th> 
                                <th class="px-6 pt-6 pb-4">Amount</th> 
                                <th class="px-6 pt-6 pb-4">Date</th>
                                <th class="px-6 pt-6 pb-4">Proof</th>
                            </tr>

                            @foreach($deposit as $d)
                            <tr class="hover:bg-gray-100 focus-within:bg-gray-100 tr-data">
                                <td class="border-t">
                                    @if($d['remark'] == 'Processing')
                                    <div class="text-xs text-center p-1 font-bold bg-yellow-200 text-yellow-800 rounded-full mx-auto w-24">
                                       {{$d['remark']}}
                                    </div>
                                    @elseif($d['remark'] == 'Successful')
                                    <div class="text-xs text-center p-1 font-bold bg-green-200 text-green-800 rounded-full mx-auto w-24">
                                       {{$d['remark']}}
                                    </div>
                                    @else
                                    <div class="text-xs text-center p-1 font-bold bg-red-200 text-red-800 rounded-full mx-auto w-24">
                                       {{$d['remark']}}
                                    </div>
                                    @endif
                                    
                                </td>
                                <td class="border-t">
                                    <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{$d['reference']}}</span>
                                </td>
                                <td class="border-t">
                                    <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">₦{{$d['amount']}}</span>
                                </td>
                                <td class="border-t">
                                    <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{$d['created_at']}}</span>
                                </td>
                                <td class="border-t">
                                    <a href="{{$d['proof_image']}}" data-fancybox data-caption="Proof of payment">
                                        <button class="px-4 py-2 text-white font-semibold bg-lime-100 border rounded focus:outline-none focus:shadow-outline w-full deposit-fund"><span>View Proof</span></button>
                                    </a>
                                </td>
                            </tr> 
                            @endforeach
                        </table>
                    </div>  
                    
                    @include('investor.layout.footer')
                </main>
            </div>

            <!-- vue-portal -->
            <div class="deposit-fund-modal" style="display: none;">
                <div class="fixed inset-0 z-40 flex items-center justify-center overflow-y-auto max-h-full py-8">
                    <div>
                        <div class="absolute inset-0 bg-black opacity-25"></div>
                    </div> 
                    <div class="relative max-h-full overflow-y-auto w-full md:w-128">
                        <div class="w-full md:w-128 bg-white rounded-lg shadow-2xl px-6 py-6">
                            <h4 class="font-semibold text-gray-800 text-lg leading-tight border-b-2 border-gray-200 pb-4 mt-4">
                                <span>Deposit Funds</span>
                                <button class="block text-gray-600 hover:text-gray-800 float-right" onclick="closeModal('.deposit-fund-modal');"><svg viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6"><path d="M17.293 18.707a1 1 0 001.414-1.414L13.414 12l5.293-5.293a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293z"></path></svg></button>
                            </h4>

                            <form method="POST" class="deposit-fund-form">
                                <div class="flex flex-wrap -mx-3 mt-3">
                                    <div class="w-full md:w-full px-3">
                                        <div aria-required="true" aria-invalid="true">
                                        <label><strong>Add funds to your QG Wallet through:</strong></label> 
                                            <div class="mt-3">
                                                <input name="deposit_type" type="radio" class="form-radio h-5 w-5 text-gray-600" checked onclick="depositType(this);" value="direct-transfer">
                                                <span class="ml-2 text-gray-700 align-text-bottom">Direct Transfer</span>

                                                <!-- <input name="deposit_type" type="radio" class="form-radio h-5 w-5 text-gray-600 ml-5" onclick="depositType(this);" value="paystack">
                                                <span class="ml-2 text-gray-700 align-text-bottom">Paystack</span> -->
                                            </div>
                                        </div>
                                    </div> 
                                </div>

                                <div class="flex flex-wrap -mx-3 mt-3" id="direct-transfer-box">
                                    <div class="w-full md:w-full px-3">
                                        <div aria-required="true" aria-invalid="true">
                                            <p class="mb-2 mt-3"><strong style="color: #378dbd !important">STEP 1:</strong> <span class="text-sm">Make payment into QuesterGate bank account:</span><p>
                                            <p class="text-sm pl-3"><strong>Account Name:</strong> QuesterGate Limited</p>
                                            <p class="text-sm pl-9"><strong>Bank Name:</strong> Zenith bank PLC</p>
                                            <p class="text-sm"><strong>Account number:</strong> 1219050239</p>
                                            <p class="text-sm"><strong>Remarks/Title/Reason of transfer (optional):</strong> Write your Questergate USER ID Number
                                            </p>

                                            <p class="mb-2 mt-3"><strong style="color: #378dbd !important">STEP 2:</strong> <span class="text-sm">After payment is made, send a message to Questergate Customer Satisfaction center via
                                                Whatsapp on <a href="https://wa.link/68pals" target="_blank"><span class="text-blue-700">https://wa.link/68pals (+234 814 447 7866).</span> </a></span><p>
                                            <label><strong>The content of the message should be:</strong></label> 
                                                
                                            <p class="text-sm"><strong>1.</strong> A clear snapshot/screenshot of the Payment receipt;</p>

                                            <p class="text-sm"><strong>2.</strong> Your Questergate User ID Number..</p>

                                            <p class="mb-2 mt-3"><strong style="color: #378dbd !important">STEP 3:</strong> <span class="text-sm">Your QG-Wallet will be credited in less than 30 minutes.</span><p>
                                        </div>
                                    </div> 
                                </div>


                                <div id="paystack-box" style="display: none;">
                                    <div class="flex flex-wrap -mx-3 mt-5">
                                        <div class="w-full md:w-full px-3">
                                            <div aria-required="true" aria-invalid="true">
                                                <label class="text-gray-700 block mt-2"><strong>Amount</strong></label> 
                                                <input id="amount" name="amount" type="number" class="bg-white text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white mt-2 border-gray-400"> 
                                            </div>
                                        </div> 
                                    </div>

                                    <div class="w-full">
                                        <button type="button" class="focus:outline-none focus:shadow-outline w-full md:flex-1 bg-lime-100 hover:bg-lime-100 px-4 py-3 text-white rounded border-b-2 border-lime-100 font-semibold mt-4" onclick="launchPaystackCheckoutForm();">
                                            Proceed
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end -->

            <!-- cancel deposit -->
            <div class="cancel-deposit" style="display: none;">
                <div class="fixed inset-0 z-40 flex items-center justify-center overflow-y-auto max-h-full py-8">
                    <div>
                        <div class="absolute inset-0 bg-black opacity-25"></div>
                    </div> 
                    <div class="relative max-h-full overflow-y-auto w-full md:w-128">
                        <div class="w-full md:w-128 bg-white rounded-lg shadow-2xl px-6 py-6">
                            <h4 class="font-semibold text-gray-800 text-lg leading-tight border-b-2 border-gray-200 pb-4 mt-4">
                                <span>Do you want to cancel this deposit request?</span>
                                <button class="block text-gray-600 hover:text-gray-800 float-right" onclick="closeModal('.cancel-deposit');"><svg viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6"><path d="M17.293 18.707a1 1 0 001.414-1.414L13.414 12l5.293-5.293a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293z"></path></svg></button>
                            </h4>

                            <form method="POST" class="cancel-deposit-form">
                                <div class="cancel-deposit-response"></div>
                                <input type="hidden" name="deposit_id">
                                <div class="w-full">
                                    <button type="button" class="focus:outline-none focus:shadow-outline w-full md:flex-1 bg-red-500 hover:bg-red-600 px-4 py-3 text-white rounded border-b-2 border-red-500 font-semibold mt-4" onclick="confirmCancelDeposit(this);">
                                        <span>Proceed</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end -->
        </div>

        <script src="https://js.paystack.co/v1/inline.js"></script>
        <script type="text/javascript" src="/questergatecapital/public/js/jquery.js"></script>
        <script type="text/javascript" src="/questergatecapital/public/js/moment.js"></script>
        <script type="text/javascript" src="/questergatecapital/public/js/script.js?v=17"></script>
        <script type="text/javascript" src="/questergatecapital/public/js/plugin.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js" integrity="sha512-uURl+ZXMBrF4AwGaWmEetzrd+J5/8NRkWAvJx5sbPSSuOb0bZLqf+tOzniObO00BjHa/dD7gub9oCGMLPQHtQA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    </body>
</html>
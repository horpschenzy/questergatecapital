<!doctype html>
<html class="bg-gray-200">
    <head>
    
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>My Investments - QuesterGate Limited</title>
    @include('favicon')
    <link href="/questergatecapital/public/css/style.css" rel="stylesheet">
    <link href="/questergatecapital/public/css/tooltips.css" rel="stylesheet">
    <link href="/questergatecapital/public/css/scrolltop.css" rel="stylesheet">
    <style type="text/css">.alert-flash {
      right: 25px;
      top: 25px;
    }
    .fullname-initial{
        padding: 7px 9px; background-color: #001D3D; color: #fff; border-radius: 5em
    }
    .btn-icon:hover{
        text-decoration: underline;
    }
    .view-more:hover{
        text-decoration: underline;
    }
    </style>

    <script type="text/javascript" src="/questergatecapital/public/js/jquery.js"></script>
    <script type="text/javascript" src="/questergatecapital/public/js/moment.js"></script>
    <script type="text/javascript" src="/questergatecapital/public/js/script.js?v=17"></script>
    <script type="text/javascript"> window.$crisp=[];window.CRISP_WEBSITE_ID="59767aec-ab5f-49a2-9233-f872ade8029a";(function(){ d=document;s=d.createElement("script"); s.src="https://client.crisp.chat/l.js"; s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})(); </script>
    </head>

    <body class="font-sans antialiased text-gray-900 leading-normal">
        <div class="h-screen flex">
            @include('investor.layout.sidebar')
            @if ($plans['inv_type'] == 'flex')
                <div class="flex-1 min-w-0 flex flex-col bg-white">
                    @include('investor.layout.topbar') 

                    <main class="p-6 flex-1 bg-gray-200 overflow-y-auto relative">
                    <a id="scroll-top-btn"></a>

                        @include('investor.layout.scroll')
                        <div class="flex justify-between py-5">
                            <div><a href="/investor/plan" class="view-more">&lsaquo;&lsaquo; Back to My Investments</a></div>
                        </div>
                        
                        <div class="md:flex">
                            <div class="w-full md:w-4/6 ">                            
                                <span class="text-xl md:text-2xl leading-snug font-semibold tracking-tight text-gray-900">Details</span>
                            </div> 

                            <div class="w-full md:w-2/6">
                                <div class="relative flex justify-end">       
                                    
                                    @if($plans['is_active'] == 1)
                                        @if(!$hasInvestmentPlanEnded)
                                        <button type="button" class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white ml-3 py-2 px-4 border border-red-500 hover:border-transparent rounded" onclick="addAmountToFlexPlan(this);" data-id="{{$plans['id']}}" data-name="addAmountToFlexPlan">Add Capital to Investment</button>
                                        @endif                                                             
                                    
                                        <button id="deactivateBtn" type="button" class="ml-3 bg-lime-100 text-white font-semibold hover:text-white py-2 px-4 border border-lime-100 hover:border-transparent rounded" onclick="deactivateConfirm(this);" data-id="{{$plans['id']}}"><span>Deactivate</span></button> 
                                    @else
                                        <button id="activateBtn" type="button" class="bg-green-600 hover:bg-green-400 text-white font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded" onclick="activateConfirm(this);" data-id="{{$plans['id']}}">Activate</button>
    
                                        
    
                                        <button type="button" class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white ml-3 py-2 px-4 border border-red-500 hover:border-transparent rounded" onclick="deleteConfirm(this);" data-id="{{$plans['id']}}" data-name="Delete">Delete</button>                 
                                    @endif
                                </div>
                            </div>
                            
                        </div>

                        <div class="bg-white rounded shadow overflow-x-auto mt-6">
                            <table class="w-full whitespace-no-wrap withdrawal-list">
                                <tr class="text-left font-semibold">
                                    <th class="px-6 py-3">Status</th>
                                    <th class="px-6 py-3">Plan</th> 
                                    @if($plans['is_active'] == '0')
                                    <th class="px-6 py-3">Capital (₦)</th> 
                                    <th class="px-6 py-3">Roi At End Date (₦)</th> 
                                    @endif
                                    <th class="px-6 py-3">Start Date</th>
                                    <th class="px-6 py-3">End Date</th>                                
                                    <th class="px-6 py-3">Created Date</th>                                
                                </tr> 

                                
                                <tr class="hover:bg-gray-100 focus-within:bg-gray-100 tr-data">
                                    <td class="border-t">
                                        @if($plans['is_active'] == '0')
                                            <div class="text-xs text-center p-1 ml-4 font-bold bg-red-200 text-yellow-800 rounded-full w-24">
                                            Inactive
                                            </div>
                                        @elseif($plans['is_active'] == '1')
                                            <div class="text-xs text-center p-1 ml-4 font-bold bg-green-200 text-green-800 rounded-full w-24">
                                            Active
                                            </div>
                                        @endif
                                    </td>
                                    
                                    

                                    <td class="border-t">
                                        <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{$plans['plan']}}</span>
                                    </td>
                                    @if($plans['is_active'] == '0')
                                    <td class="border-t">
                                        <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{ number_format($plans['capital'], 2)}}</span>
                                    </td>
                                    <td class="border-t">
                                        <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{number_format($plans['capital'] * $plans['duration'] * ($plans['total_roi']/100), 2)}}</span>
                                    </td>
                                    @endif

                                    <td class="border-t">
                                        <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">
                                            @if($plans['is_active'] == '1')
                                                {{date('M j, Y', strtotime($plans->inv_start))}}
                                            @endif
                                        </span>
                                    </td>

                                    <td class="border-t">
                                        <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none ">
                                            @if($plans['is_active'] == '1')
                                                {{date('M j, Y', strtotime($plans->inv_end))}}
                                            @endif
                                        </span>
                                    </td>
                                    <td class="border-t">
                                        <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none ">{{date('M j, Y', strtotime($plans->created_at))}}</span>
                                    </td>
                                </tr>
                            </table>
                        </div> 

                        <div class="bg-white rounded shadow overflow-x-auto mt-6">
                            <table class="w-full whitespace-no-wrap">
                                <tr class="text-left font-semibold">
                                    <th class="px-6 py-3">S/N</th>
                                    <th class="px-6 py-3">Date Added</th>
                                    <th class="px-6 py-3">Day Added</th>
                                    <th class="px-6 py-3">Amount Added (₦)</th> 
                                    <th class="px-6 py-3">Days to End date</th> 
                                    <th class="px-6 py-3">ROI at End date (₦)</th>
                                </tr> 
                                @php
                                    $capital = 0;
                                    $roi_earned = 0;
                                @endphp
                                @foreach($plans->details AS $key => $detail)
                                    @php
                                        $capital += $detail->capital;
                                        $roi_earned += $detail->roi_earned;
                                    @endphp
                                    <tr class="focus-within:bg-gray-100 tr-data"> 
                                        <td class="border-t">
                                            <span tabindex="-1" class="px-6 py-4 flex focus:outline-none">{{$key + 1}}</span>
                                        </td>

                                        <td class="border-t">
                                            <span tabindex="-1" class="px-6 py-4 flex focus:outline-none">{{date('M j, Y', strtotime($detail->created_at))}}</span>
                                        </td>
                                        
                                        <td class="border-t">
                                            <span tabindex="-1" class="px-6 py-4 flex focus:outline-none"> Day {{$detail->days_added + 1}}</span>
                                        </td>

                                        <td class="border-t">
                                            <span tabindex="-1" class="px-6 py-4 flex focus:outline-none">{{ number_format($detail->capital)}}</span>
                                        </td>

                                        <td class="border-t">
                                            <span tabindex="-1" class="px-6 py-4 flex focus:outline-none">{{$detail->days_remaining}} days remaining</span>
                                        </td>

                                        <td class="border-t">
                                            <span tabindex="-1" class=" px-6 py-4 flex focus:outline-none">{{ number_format($detail->roi_earned) }}</span>
                                        </td>

                                        
                                    </tr>
                                @endforeach

                                <tr class="focus-within:bg-gray-100 tr-data"> 
                                    <td class="border-t">
                                    </td>

                                    <td class="border-t">
                                    </td>
                                    
                                    <td class="border-t">
                                    </td>

                                    <td class="border-t">
                                        <span tabindex="-1" class="px-6 py-4 flex focus:outline-none"><strong>TOTAL CAPITAL = ₦<?= number_format($capital); ?></strong></span>
                                    </td>

                                    <td class="border-t">
                                    </td>

                                    <td class="border-t">
                                        <span tabindex="-1" class="px-6 py-4 flex focus:outline-none"><strong>TOTAL ROI = ₦<?= number_format($roi_earned); ?></strong></span>
                                    </td>

                                    
                                </tr>
                            </table>
                        </div> 

                        @include('investor.layout.footer')
                    </main>
                </div>
            @else
                <div class="flex-1 min-w-0 flex flex-col bg-white">
                    @include('investor.layout.topbar') 

                    <main class="p-6 flex-1 bg-gray-200 overflow-y-auto relative">
                    <a id="scroll-top-btn"></a>

                        @include('investor.layout.scroll')
                        <div class="flex justify-between py-5">
                            <div><a href="/investor/plan" class="view-more">&lsaquo;&lsaquo; Back to My Investments</a></div>
                        </div>
                        
                        <div class="md:flex">
                            <div class="w-full md:w-4/6 ">                            
                                <span class="text-xl md:text-2xl leading-snug font-semibold tracking-tight text-gray-900">Details</span>
                            </div> 

                            <div class="w-full md:w-2/6">
                                <div class="relative flex justify-end">                                
                                    @if($plans['inv_start'] == null)
                                    <button id="activateBtn" type="button" class="bg-green-600 hover:bg-green-400 text-white font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded" onclick="activateConfirm(this);" data-id="{{$plans['id']}}">Activate</button>

                                    

                                    <button type="button" class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white ml-3 py-2 px-4 border border-red-500 hover:border-transparent rounded" onclick="deleteConfirm(this);" data-id="{{$plans['id']}}" data-name="Delete">Delete</button>                                
                                    @endif
                                    
                                    @if($plans['is_active'] == 1)
                                        @if(!$hasInvestmentPlanEnded)
                                        <button type="button" class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white ml-3 py-2 px-4 border border-red-500 hover:border-transparent rounded" onclick="deactivateConfirm(this);" data-id="{{$plans['id']}}" data-name="Deactivate">Deactivate</button>
                                        @endif                                                             
                                    
                                    <button id="withdrawBtn" type="button" class="ml-3 bg-lime-100 text-white font-semibold hover:text-white py-2 px-4 border border-lime-100 hover:border-transparent rounded" onclick="withdrawFundPrompt();"><span>Withdraw</span></button>                                                             
                                    @endif
                                </div>
                            </div>
                            
                        </div>

                        <div class="bg-white rounded shadow overflow-x-auto mt-6">
                            <table class="w-full whitespace-no-wrap withdrawal-list">
                                <tr class="text-left font-semibold">
                                    <th class="px-6 py-3">Status</th>
                                    <th class="px-6 py-3">Plan</th> 
                                    <th class="px-6 py-3">Capital (₦)</th> 
                                    <th class="px-6 py-3">Total ROI (%)</th>
                                    <th class="px-6 py-3">Profit (₦)</th>                                
                                </tr> 

                                
                                <tr class="hover:bg-gray-100 focus-within:bg-gray-100 tr-data">
                                    <td class="border-t">
                                        @if($plans['remark'] == 'Inactive')
                                            <div class="text-xs text-center p-1 ml-4 font-bold bg-red-200 text-yellow-800 rounded-full w-24">
                                            {{$plans['remark']}}
                                            </div>
                                        @elseif($plans['remark'] == 'Active')
                                            <div class="text-xs text-center p-1 ml-4 font-bold bg-green-200 text-green-800 rounded-full w-24">
                                            {{$plans['remark']}}
                                            </div>
                                        @else
                                            <div class="text-xs text-center p-1 ml-4 font-bold bg-blue-200 text-blue-800 rounded-full w-24">
                                            {{$plans['remark']}}
                                            </div>
                                        @endif
                                    </td>
                                    
                                    

                                    <td class="border-t">
                                        <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{$plans['plan']}}</span>
                                    </td>

                                    <td class="border-t">
                                        <span tabindex="-1" class=" px-6 py-4 flex items-center focus:outline-none">{{$plans['capital']}}</span>
                                    </td>

                                    <td class="border-t">
                                        <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{$plans['total_roi']}}</span>
                                    </td>

                                    <td class="border-t">
                                        <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none ">{{$plans['profit']}}</span>
                                    </td>
                                </tr>
                            </table>
                        </div> 

                        <div class="bg-white rounded shadow overflow-x-auto mt-6">
                            <table class="w-full whitespace-no-wrap">
                                <tr class="text-left font-semibold">
                                    <th class="px-6 py-3">Duration</th>
                                    <th class="px-6 py-3">Total Returns (₦)</th>
                                    <th class="px-6 py-3">Start</th> 
                                    <th class="px-6 py-3">End</th> 
                                    <th class="px-6 py-3">Date Created</th>
                                </tr> 
                                
                                <tr class="focus-within:bg-gray-100 tr-data"> 
                                    <td class="border-t">
                                        <span tabindex="-1" class="px-6 py-4 flex focus:outline-none">{{$plans['duration']}} Months</span>
                                    </td>

                                    <td class="border-t">
                                        <span tabindex="-1" class="px-6 py-4 flex focus:outline-none">{{$plans['total_returns']}}</span>
                                    </td>

                                    <td class="border-t">
                                        <span tabindex="-1" class="px-6 py-4 flex focus:outline-none">{{$plans['inv_start']}}</span>
                                    </td>

                                    <td class="border-t">
                                        <span tabindex="-1" class=" px-6 py-4 flex focus:outline-none">{{$plans['inv_end']}}</span>
                                    </td>

                                    <td class="border-t">
                                        <span tabindex="-1" class="px-6 py-4 flex focus:outline-none">{{$plans['created_at']}}</span>
                                    </td>
                                </tr>
                            </table>
                        </div> 

                        @include('investor.layout.footer')
                    </main>
                </div>
            @endif

            <!-- withdraw confirm -->
            <div class="withdraw-fund-modal" style="display: none">
                <div class="fixed inset-0 z-40 flex items-center justify-center overflow-y-auto max-h-full py-8">
                    <div>
                        <div class="absolute inset-0 bg-black opacity-25"></div>
                    </div> 

                    <div class="relative max-h-full overflow-y-auto w-full md:w-128">
                        <div class="w-full md:w-128 bg-white rounded-lg shadow-2xl px-6 py-6">   
                            
                                <div class="withdrawal-response"></div>
                                 
                                <form method="POST" id="withdraw-form">
                                    <input name="plan_id" type="hidden" value="{{$plans['id']}}" />

                                    <input name="hasInvestmentPlanEnded" type="hidden" value="{{$hasInvestmentPlanEnded ? 1 : 0 }}" />

                                    <div class="wdisplay-success bg-green-100 p-3 text-green-600" style="display: none;">
                                        <strong class="text-sm">Withdrawal created successfully</strong>
                                    </div>

                                    <div class="wdisplay-error bg-red-100 p-3 text-red-700" style="display: none;">
                                        <strong class="text-sm">Make sure the capital left in this investment plan is at least ₦50,000.00 when you withdraw this amount.</strong>
                                    </div>                                    

                                    <h4 class="font-semibold text-gray-800 text-lg leading-tight border-b-2 border-gray-200 pb-4 mt-5">
                                        <span>Withdraw Funds To QG Wallet</span>
                                        <button type="button" class="block text-gray-600 hover:text-gray-800 float-right" onclick="closeModal('.withdraw-fund-modal');">
                                            <svg viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
                                                <path d="M17.293 18.707a1 1 0 001.414-1.414L13.414 12l5.293-5.293a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293z"></path>
                                            </svg>
                                        </button>
                                    </h4>

                                    @if(!$hasInvestmentPlanEnded)
                                    <div class="mt-2 rounded-md bg-blue-50 p-4 text-blue-700 text-sm ">
                                        <p>Any withdrawal made before your investment end date will attract a penalty fee.</p>
                                        <p class="mt-3">The penalty fee is 20% of the amount you withdraw.</p> 
                                        <p class="mt-3">To learn more about <strong> Withdrawal Penalty</strong> fee, <a href="/faq" class="view-more" target="_blank"><strong>click here</strong></a>
                                        </p> 
                                    </div>
                                    @else
                                    <div class="mt-2 rounded-md bg-blue-50 p-4 text-blue-700 text-sm ">
                                        <p><strong>Congratulations!</strong> This investment plan has matured. Click the <strong>Withdraw</strong> button below to move the <strong>Total Returns (Capital + Profit)</strong> to your <strong>QGWallet</strong>.</p>
                                    </div>
                                    @endif

                                    @if(!$hasInvestmentPlanEnded)
                                    <div class="flex flex-wrap -mx-3 mt-2">
                                        <div class="w-full md:w-full px-3">
                                            <div aria-required="true" aria-invalid="true">
                                                <label class="text-gray-700 block mt-2"><strong>Amount to withdraw</strong> <small></small></label> 
                                                <input name="amount" type="number" class="bg-white text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white mt-2 border-gray-400"> 
                                            </div>
                                        </div> 
                                    </div>
                                    @endif

                                    @if(!$hasInvestmentPlanEnded)
                                    <div class="flex flex-wrap -mx-3 mt-5">
                                        <div class="w-full md:w-full px-3">
                                            <div aria-required="true" aria-invalid="true">
                                            <label><strong>Deduct 20% penalty fee from:</strong></label> 
                                                <select name="deduct_from" class="px-6 py-3 rounded text-gray-900 border bg-white mt-2 border-gray-400" style="width: 100%; font-weight: bold" id="invDuration">                                                                   <option value="amount_withdrawn" selected="">Amount</option>
                                                    <option value="balance">Capital</option>
                                                </select> 
                                            </div>
                                        </div> 
                                    </div>
                                    @endif
                                    
                                     
                                    <div class="w-full">
                                        <button type="button" class="focus:outline-none focus:shadow-outline w-full md:flex-1 bg-lime-100 hover:bg-lime-100 px-4 py-3 text-white rounded border-b-2 font-semibold mt-4" onclick="withdrawCapital(this);">
                                            Withdraw
                                        </button>
                                    </div>
                                </form>
                            
                        </div>
                    </div>
                </div>
            </div>
            <!-- end -->

            <!-- delete confirm -->
            <div id="delete-confirm" class="delete-confirm" style="display: none">
                <div class="fixed inset-0 z-40 flex items-center justify-center overflow-y-auto max-h-full py-8">
                    <div>
                        <div class="absolute inset-0 bg-black opacity-25"></div>
                    </div> 

                    <div class="relative max-h-full overflow-y-auto w-full md:w-128">
                        <div class="w-full bg-white rounded-lg shadow-2xl px-6 py-6"> 
                            <div class="display-success bg-green-100 p-3" style="display: none;">
                                <span class="text-green-700">&check; Investment plan deleted successfully.</span>
                            </div>

                            <h4 class="font-semibold text-gray-800 text-lg leading-tight pb-4">
                                <button class="block text-gray-600 hover:text-gray-800 float-right" onclick="closeModal('.delete-confirm');"><svg viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4"><path d="M17.293 18.707a1 1 0 001.414-1.414L13.414 12l5.293-5.293a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293z"></path></svg></button>
                            </h4>

                            <h4 class="font-semibold text-gray-800 text-lg leading-tight pb-4 mt-4 text-center">
                                <span>Do you want to delete this investment plan?</span>
                            </h4>

                            <div class="flex justify-center mt-5">
                                <button type="button" class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white w-2/6 py-2 px-4 border border-red-500 hover:border-transparent rounded" onclick="deletePlan(this);">
                                    Delete
                                </button>

                                <button type="button" class="focus:outline-none focus:shadow-outline bg-gray-300 px-4 py-3 rounded border w-2/6 ml-3 font-semibold" onclick="closeModal('.delete-confirm');">
                                    Cancel
                                </button>
                            </div>                        
                        </div>
                    </div>
                </div>
            </div>
            <!-- end -->

            <!-- deactivate confirm -->
            <div id="deactivate-confirm" class="deactivate-confirm" style="display: none">
                <div class="fixed inset-0 z-40 flex items-center justify-center overflow-y-auto max-h-full py-8">
                    <div>
                        <div class="absolute inset-0 bg-black opacity-25"></div>
                    </div> 

                    <div class="relative max-h-full overflow-y-auto w-full md:w-128">
                        <div class="w-full bg-white rounded-lg shadow-2xl px-6 py-6"> 
                            <div class="display-success bg-green-100 p-3" style="display: none;">
                                <span class="text-green-700">&check; Investment plan deactivate successfully.</span>
                            </div>

                            
                            <h4 class="font-semibold text-gray-800 text-lg leading-tight pb-4">
                                <button class="block text-gray-600 hover:text-gray-800 float-right" onclick="closeModal('.deactivate-confirm');"><svg viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4"><path d="M17.293 18.707a1 1 0 001.414-1.414L13.414 12l5.293-5.293a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293z"></path></svg></button>
                            </h4>
                            
                            
                            <h4 class="font-semibold text-gray-800 text-lg leading-tight pb-4 mt-4">
                                <span>Do you want to deactivate this investment plan?</span>
                            </h4>
                            
                            <div class="bg-blue-50 p-3 text-blue-700 text-sm">
                                <p>
                                Deactivating your investment plan before the end date will attract a <strong>Premature Termination Penalty</strong> fee.</p>
                                <p class="mt-3">The penalty fee will be 20% of the capital; and no profit will be paid on the investment.</p>
                                <p class="mt-3">To learn more about <strong>Premature Termination Penalty</strong> fee, <a href="/faq" class="view-more" target="_blank"><strong>click here</strong></a></p>
                            </div>

                            <div class="flex justify-center mt-10">
                                <button type="button" class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white w-2/6 py-2 px-4 border border-red-500 hover:border-transparent rounded" onclick="deactivatePlan(this);">
                                Deactivate
                                </button>

                                <button type="button" class="focus:outline-none focus:shadow-outline bg-gray-300 px-4 py-3 rounded border w-2/6 ml-3 font-semibold" onclick="closeModal('.deactivate-confirm');">
                                    Cancel
                                </button>
                            </div>                        
                        </div>
                    </div>
                </div>
            </div>
            <!-- end -->

            <!-- activate confirm -->
            <div id="activate-confirm" class="activate-confirm" style="display: none">
                <div class="fixed inset-0 z-40 flex items-center justify-center overflow-y-auto max-h-full py-8">
                    <div>
                        <div class="absolute inset-0 bg-black opacity-25"></div>
                    </div> 

                    <div class="relative max-h-full overflow-y-auto w-full md:w-128">
                        <div class="w-full bg-white rounded-lg shadow-2xl px-6 py-6"> 
                            <div class="display-success bg-green-100 p-3" style="display: none;">
                                <span class="text-green-700">&check; Investment plan activated successfully.</span>
                            </div>

                            <div class="display-error bg-red-100 p-3" style="display: none;">
                                <span class="text-red-700 font-bold">Insufficient funds. Please fund your QGWallet and try again</span>
                            </div>

                            <h4 class="font-semibold text-gray-800 text-lg leading-tight pb-4">
                                <button class="block text-gray-600 hover:text-gray-800 float-right" onclick="closeModal('.activate-confirm');"><svg viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4"><path d="M17.293 18.707a1 1 0 001.414-1.414L13.414 12l5.293-5.293a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293z"></path></svg></button>
                            </h4>

                            <h4 class="font-semibold text-gray-800 text-lg leading-tight pb-4 mt-4 text-center">
                                <span>Do you want to activate this investment plan?</span>
                            </h4>

                            <div class="flex justify-center mt-5">
                                <button type="button" class="bg-gray-200 text-gray-700 font-semibold w-2/6 py-2 px-4 hover:border-transparent rounded" onclick="closeModal('.activate-confirm');">
                                    Cancel
                                </button>

                                <button type="button" class="focus:outline-none focus:shadow-outline bg-green-600 px-4 py-3 rounded border w-2/6 ml-3 font-semibold text-white" onclick="activatePlan(this);">
                                    Activate
                                </button>
                            </div>                        
                        </div>
                    </div>
                </div>
            </div>
            <!-- end -->

            <!-- vue-portal -->
            <div class="add-amount-to-flex-plan" style="display: none">
                <div class="fixed inset-0 z-40 flex items-center justify-center overflow-y-auto max-h-full py-8">
                    <div>
                        <div class="absolute inset-0 bg-black opacity-25"></div>
                    </div> 
                    <div class="relative max-h-full overflow-y-auto w-full md:w-128">
                        <div class="w-full md:w-128 bg-white rounded-lg shadow-2xl px-6 py-6"> 
                                <div class="flex-plan-response"></div>
                                 
                                <form method="POST" class="flex-plan-form">
                                    <h4 class="font-semibold text-gray-800 text-lg leading-tight border-b-2 border-gray-200 pb-4 mt-4">
                                        <span>Add capital to investment</span>
                                        <button type="button" class="block text-gray-600 hover:text-gray-800 float-right" onclick="closeModal('.add-amount-to-flex-plan');"><svg viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6"><path d="M17.293 18.707a1 1 0 001.414-1.414L13.414 12l5.293-5.293a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293z"></path></svg></button>
                                    </h4>

                                  

                                    <div class="flex flex-wrap -mx-3 mt-5">
                                        <div class="w-full md:w-full px-3">
                                            <label><strong>Amount</strong></label>
                                            <div aria-required="true" aria-invalid="true"> 
                                                <input type="number" name="capital" class="px-6 py-3 rounded text-gray-900 border bg-white mt-2 border-gray-400" style="width: 100%; font-weight: bold" min="{{$walletBalance}}" value="{{$walletBalance}}"> 
                                                <input type="text" name="investment_id" value="{{ $plans['id']}}" hidden> 
                                            </div>
                                        </div> 
                                    </div> 
                                    
                                    <div class="w-full">
                                        <button type="button" class="bg-lime-100 px-6 py-3 text-white rounded border-b-2 border-lime-100 font-semibold mt-4" onclick="addAmountToFlexInvestmentPlan(this);" style="width: 100%;">
                                            <span>Select</span>
                                        </button>
                                    </div>
                                </form>
                            
                        </div>
                    </div>
                </div>
            </div>
            <!-- end -->
        </div>

        <input type="hidden" id="plan-hidden-id">
    </body>
</html>
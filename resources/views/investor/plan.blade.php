<!doctype html>
<html class="bg-gray-200"><head>
    

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
    <script type="text/javascript" src="/questergatecapital/public/js/script.js?v=15"></script>
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
                            Watch video to learn how to invest. <a href="/resource" class="font-bold">Click here</a>
                            </p> 
                        </div>
                    </div>
                </div>
                <!-- -->

@include('investor.layout.scroll')
                    <div class="md:flex" >
                        <div class="w-full md:w-5/6 ">                            
                            <span class="text-xl md:text-2xl leading-snug font-semibold tracking-tight text-gray-900">My FIXED Investments</span>
                        </div> 

                        <div class="w-full md:w-1/6">
                            <div class="relative">
                                <button type="button" class="text-white px-4 py-2 font-semibold bg-lime-100 border rounded focus:outline-none focus:shadow-outline w-full withdraw-fund" onclick="withdrawFundPrompt();"><span>Select a fixed plan</span></button>
                            </div>
                        </div>

                        
                    </div>

                    <div class="bg-white rounded shadow overflow-x-auto mt-6">
                        <table class="w-full whitespace-no-wrap withdrawal-list">
                            <tr class="text-left font-semibold">
                                <th class="px-6 py-3 text-center">Status</th>
                                <th class="px-6 py-3">Plan</th> 
                                <th class="px-6 py-3">Capital (₦)</th> 
                                <th class="px-6 py-3">Min ROI (%)</th>
                                <th class="px-6 py-3">Duration</th>
                                <th class="px-6 py-3">Date Created</th>
                                <th class="px-6 py-3"></th>
                            </tr> 

                            @foreach($plans as $p)
                            <tr data-id="{{$p['id']}}" class="hover:bg-gray-100 focus-within:bg-gray-100 tr-data" onclick="viewPlanDetail(this);">
                                <td class="border-t">
                                    @if($p['remark'] == 'Inactive')
                                        <div class="text-xs text-center p-1 font-bold bg-red-200 text-yellow-800 rounded-full mx-auto w-24">
                                        {{$p['remark']}}
                                        </div>
                                    @elseif($p['remark'] == 'Active')
                                        <div class="text-xs text-center p-1 font-bold bg-green-200 text-green-800 rounded-full mx-auto w-24">
                                        {{$p['remark']}}
                                        </div>
                                    @else
                                        <div class="text-xs text-center p-1 font-bold bg-blue-200 text-blue-800 rounded-full mx-auto w-24">
                                        {{$p['remark']}}
                                        </div>
                                    @endif
                                </td>
                                
                                

                                <td class="border-t">
                                    <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{$p['plan']}}</span>
                                </td>

                                <td class="border-t">
                                    <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{$p['capital']}}</span>
                                </td>

                                <td class="border-t">
                                    <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{$p['total_roi']}}</span>
                                </td>

                                <td class="border-t">
                                    <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{$p['duration']}} Months</span>
                                </td>

                                <td class="border-t">
                                    <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{$p['created_at']}}</span>
                                </td>  

                                <td class="border-t">
                                    <a href="/investor/plan-detail/{{$p['id']}}" class="view-more text-blue-600">View</a>
                                </td>
                            </tr> 
                            @endforeach
                        </table>
                    </div> 
                    
                    
                    <div class="md:flex mt-6" >
                        <div class="w-full md:w-5/6 ">                            
                            <span class="text-xl md:text-2xl leading-snug font-semibold tracking-tight text-gray-900">My FLEX Investments</span>
                        </div> 

                        <div class="w-full md:w-1/6">
                            <div class="relative">
                                <button type="button" class="text-white px-4 py-2 font-semibold bg-lime-100 border rounded focus:outline-none focus:shadow-outline w-full withdraw-fund" onclick="addFlexPlan();"><span>Select a flex plan</span></button>
                            </div>
                        </div>

                        
                    </div>

                    <div class="bg-white rounded shadow overflow-x-auto mt-6">
                        <table class="w-full whitespace-no-wrap withdrawal-list">
                            <tr class="text-left font-semibold">
                                <th class="px-6 py-3 text-center">Status</th>
                                <th class="px-6 py-3">Plan</th> 
                                <th class="px-6 py-3">Start Date</th>
                                <th class="px-6 py-3">End Date</th>
                                <th class="px-6 py-3">Date Created</th>
                                <th class="px-6 py-3"></th>
                            </tr> 

                            @foreach($flex_plans as $p)
                            <tr data-id="{{$p->id}}" class="hover:bg-gray-100 focus-within:bg-gray-100 tr-data" onclick="viewPlanDetail(this);">
                                <td class="border-t">
                                    @if($p->is_active == '0')
                                        <div class="text-xs text-center p-1 font-bold bg-red-200 text-yellow-800 rounded-full mx-auto w-24">
                                        Inactive
                                        </div>
                                    @elseif($p->is_active == '1')
                                        <div class="text-xs text-center p-1 font-bold bg-green-200 text-green-800 rounded-full mx-auto w-24">
                                        Active
                                        </div>
                                    @endif
                                </td>
                                
                                

                                <td class="border-t">
                                    <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{$p->plan}}</span>
                                </td>
    
                                <td class="border-t">
                                    <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">
                                        @if($p->is_active == '1')
                                        {{date('M j, Y', strtotime($p->inv_start))}}
                                        @endif
                                    </span>
                                </td>
                                
                                <td class="border-t">
                                    <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">
                                        @if($p->is_active == '1')
                                            {{date('M j, Y', strtotime($p->inv_end))}}
                                        @endif
                                    </span>
                                </td>

                                <td class="border-t">
                                    <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{ date('M j, Y h:i A', strtotime($p->created_at)) }}</span>
                                </td>  

                                <td class="border-t">
                                    <a href="/investor/plan-detail/{{$p->id}}" class="view-more text-blue-600">View</a>
                                </td>
                            </tr> 
                            @endforeach
                        </table>
                    </div> 

                    @include('investor.layout.footer')
                </main>
            </div>

            <!-- vue-portal -->
            <div class="withdraw-fund-modal" style="display: none">
                <div class="fixed inset-0 z-40 flex items-center justify-center overflow-y-auto max-h-full py-8">
                    <div>
                        <div class="absolute inset-0 bg-black opacity-25"></div>
                    </div> 
                    <div class="relative max-h-full overflow-y-auto w-full md:w-128">
                        <div class="w-full md:w-128 bg-white rounded-lg shadow-2xl px-6 py-6"> 
                                <div class="plan-response"></div>
                                 
                                <form method="POST" class="plan-form">
                                    <h4 class="font-semibold text-gray-800 text-lg leading-tight border-b-2 border-gray-200 pb-4 mt-4">
                                        <span>Select A Plan</span>
                                        <button type="button" class="block text-gray-600 hover:text-gray-800 float-right" onclick="closeModal('.withdraw-fund-modal');"><svg viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6"><path d="M17.293 18.707a1 1 0 001.414-1.414L13.414 12l5.293-5.293a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293z"></path></svg></button>
                                    </h4>

                                   
                                    <div class="flex flex-wrap -mx-3">
                                        <div class="w-full md:w-full px-3">
                                            <div aria-required="true" aria-invalid="true">
                                            <label><strong>Plan</strong></label> 
                                                <select name="plan" class="px-6 py-3 rounded text-gray-900 border bg-white mt-2 border-gray-400" style="width: 100%; font-weight: bold" id="invDuration">                                                                   <option value="QG-6:6:10" selected="">QG-6: 6 Months 10% ROI</option>
                                                    <option value="QG-12:12:45">QG-12: 12 Months “Min 45%” ROI</option>
                                                    <option value="QG-18:18:70">QG-18: 18 Months “Min 70%” ROI</option>
                                                    <option value="QG-24:24:120">QG-24: 24 Months “Min 120%” ROI</option>
                                                </select> 
                                            </div>
                                        </div> 
                                    </div> 

                                    <div class="flex flex-wrap -mx-3 mt-5">
                                        <div class="w-full md:w-full px-3">
                                            <label><strong>Amount</strong></label>
                                            <div aria-required="true" aria-invalid="true"> 
                                                <input type="number" name="capital" class="px-6 py-3 rounded text-gray-900 border bg-white mt-2 border-gray-400" style="width: 100%; font-weight: bold" min="{{$walletBalance}}" value="{{$walletBalance}}"> 
                                            </div>
                                        </div> 
                                    </div> 
                                    
                                    <div class="w-full">
                                        <button type="button" class="bg-lime-100 px-6 py-3 text-white rounded border-b-2 border-lime-100 font-semibold mt-4" onclick="createInvestmentPlan(this);" style="width: 100%;">
                                            <span>Select</span>
                                        </button>
                                    </div>
                                </form>
                            
                        </div>
                    </div>
                </div>
            </div>
            <!-- end -->
           
            <!-- vue-portal -->
            <div class="add-flex-plan" style="display: none">
                <div class="fixed inset-0 z-40 flex items-center justify-center overflow-y-auto max-h-full py-8">
                    <div>
                        <div class="absolute inset-0 bg-black opacity-25"></div>
                    </div> 
                    <div class="relative max-h-full overflow-y-auto w-full md:w-128">
                        <div class="w-full md:w-128 bg-white rounded-lg shadow-2xl px-6 py-6"> 
                                <div class="flex-plan-response"></div>
                                 
                                <form method="POST" class="flex-plan-form">
                                    <h4 class="font-semibold text-gray-800 text-lg leading-tight border-b-2 border-gray-200 pb-4 mt-4">
                                        <span>Select A Plan</span>
                                        <button type="button" class="block text-gray-600 hover:text-gray-800 float-right" onclick="closeModal('.add-flex-plan');"><svg viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6"><path d="M17.293 18.707a1 1 0 001.414-1.414L13.414 12l5.293-5.293a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293z"></path></svg></button>
                                    </h4>

                                   
                                    <div class="flex flex-wrap -mx-3">
                                        <div class="w-full md:w-full px-3">
                                            <div aria-required="true" aria-invalid="true">
                                            <label><strong>Plan</strong></label> 
                                                <select name="plan" class="px-6 py-3 rounded text-gray-900 border bg-white mt-2 border-gray-400" style="width: 100%; font-weight: bold" id="invFlexDuration">
                                                    <option value="QG-X12:360:0.089">QG-X12: 360 days “ROI 0.089% per day”</option>
                                                    <option value="QG-X24:720:0.12">QG-X12:  720 days “ROI 0.12% per day”</option>
                                                </select> 
                                            </div>
                                        </div> 
                                    </div> 

                                    <div class="flex flex-wrap -mx-3 mt-5">
                                        <div class="w-full md:w-full px-3">
                                            <label><strong>Amount</strong></label>
                                            <div aria-required="true" aria-invalid="true"> 
                                                <input type="number" name="capital" class="px-6 py-3 rounded text-gray-900 border bg-white mt-2 border-gray-400" style="width: 100%; font-weight: bold" min="{{$walletBalance}}" value="{{$walletBalance}}"> 
                                            </div>
                                        </div> 
                                    </div> 
                                    
                                    <div class="w-full">
                                        <button type="button" class="bg-lime-100 px-6 py-3 text-white rounded border-b-2 border-lime-100 font-semibold mt-4" onclick="createFlexInvestmentPlan(this);" style="width: 100%;">
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

        <script>
            function viewPlanDetail(e){
                let planId =  $(e).attr("data-id");

                location.href = "/investor/plan-detail/"+planId;
            }
        </script>

    </body>
</html>
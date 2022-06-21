<!doctype html>
<html class="bg-gray-200">
    <head>    

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title> Investment Calculator - QuesterGate Capital</title>
    @include('favicon')
    <link href="/questergatecapital/public/css/style.css" rel="stylesheet">
    <link href="/questergatecapital/public/css/tooltips.css" rel="stylesheet">
    <link href="/questergatecapital/public/css/scrolltop.css" rel="stylesheet">
    <style type="text/css">
        #calculator{
      scroll-behavior: smooth;
    }
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
    @media (min-width: 768px){
    .md\:grid-cols-2 {
        grid-template-columns: repeat(2,minmax(0,1fr));
    }}
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
                    <h2 class="text-xl md:text-2xl leading-snug font-semibold tracking-tight text-gray-900">Investment Calculator For Flex Plan </h2>
                    <div class="py-5 border-gray-300 mt-10">
                        <div class="flex flex-col xl:flex-row">
                            <div class="w-full xl:w-3/3">
                                <div class="bg-white rounded-md shadow overflow-hidden p-10 sm:max-w-lg md:max-w-3xl">
                                    <form method="POST" class="bank-account-form">
                                        <div class="flex flex-wrap mb-5 -mx-3">
                                            <div class="w-full md:w-2/2 px-3">
                                                <label style="color:#1e266d;font-size:16px; font-weight: 700">Initial Deposit (₦)</label>
                                                <div class="mt-3">
                                                    <input id="invFlexCapital" type="number" min="10000" class="bg-white text px-3 py-3 text-gray-900 border border-gray-400 rounded" style="width: 100%;" value="10000">
                                                </div> 
                                            </div> 
                                        </div> 

                                        <div class="flex flex-wrap mt-5 -mx-3">
                                            <div class="w-full md:w-2/2 px-3">
                                                <div class="relative">
                                                    <select class="px-3 py-3 rounded text-gray-900 border bg-white mt-2 border-gray-400" style="width: 100%; font-weight: bold" id="invFlexDuration">
                                                        <option value="12">QG-X12 Min. ROI 32%</option>
                                                        <option value="24">QG-X24 Min. ROI 86.4%</option>
                                                    </select>
                                                </div>
                                            </div> 
                                        </div>                                         

                                        <div class="w-full">
                                            <button type="button" class="focus:outline-none focus:shadow-outline w-full md:flex-1 bg-lime-100 hover:bg-lime-100 px-4 py-3 text-white rounded border-b-2  font-semibold mt-4" onclick="calculateFlexInvestment();"><span>Calculate</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                             <!-- RESULT -->
                             <div class="w-full xl:w-3/3 pl-0 xl:pl-5 mt-4 xl:mt-0">
                                <div class="bg-lime-100 overflow-hidden px-10 pt-4 pb-8 sm:max-w-lg md:max-w-3xl">
                                    <div class="row">
                                        <div class="col" style="margin-top:10px">
                                    <h6 class="bold mb-3"> 
                                        <span style="color: #fff"> TOTAL INVESTMENT BREAKDOWN</span>
                                    </h6>
              
                                    <div id="minFlexContainer">
                                        <div class="mb-1" style="border-bottom: 1px solid #1e266d"> 
                                            <div class="text-white square-block ovw-bg-2" style="display:inline-block"></div>
                                            <div class="text-white" style="display:inline-block">Duration:</div>
                                            <div class="bold text-white" id="flex_duration" style="display:inline-block;float:right"></div>
                                        </div>
              
                                        <div class="mb-1" style="border-bottom: 1px solid #1e266d"> 
                                            <div class="square-block ovw-bg-2 text-white" style="display:inline-block"></div>
                                            <div class="text-white" style="display:inline-block">Start Date</div>
                                            <div class="bold text-white" id="flex_start_date" style="display:inline-block;float:right"></div>
                                        </div>
              
                                        <div class="mb-1" style="border-bottom: 1px solid #1e266d"> 
                                            <div class="square-block ovw-bg-2 text-white" style="display:inline-block"></div>
                                            <div class="text-white" style="display:inline-block">End Date</div>
                                            <div class="bold text-white" id="flex_end_date" style="display:inline-block; float:right"></div>
                                        </div>

                                        <div class="mb-1" style="border-bottom: 1px solid #1e266d"> 
                                            <div class="square-block ovw-bg-2 text-white" style="display:inline-block"></div>
                                            <div class="text-white" style="display:inline-block">ROI Per Day</div>
                                            <div class="bold text-white" id="flex_roi_per_day" style="display:inline-block; float:right"></div>
                                        </div>
                                        <div class="mb-1" style="border-bottom: 1px solid #1e266d"> 
                                            <div class="square-block ovw-bg-2 text-white" style="display:inline-block"></div>
                                            <div id="table">
                                                
                                                </table>
                                            </div>
                                        </div>
                                        <div class="mb-1" style="border-bottom: 1px solid #1e266d" id="flex_total_capital_and_roi"> 
                                          <div class="square-block ovw-bg-2 text-white" style="display:inline-block"></div>
                                          <div class="text-white" style="display:inline-block">Total Capital + ROI</div>
                                          <div class="bold text-white" id="min_flex_percent_and_amount" style="display:inline-block; float:right">₦0.00</div>
                                        </div>
                                        <div class="mb-1" > 
                                          <div class="row">
                                            <div class="col-lg-6 col-sm-12 col-xs-12 mb-2">
                                              <label for="flex_added_amount" style=" color: white !important">Add to your capital</label>
                                              <input id="flex_added_amount" type="number" class="bg-white text px-1 py-1 mt-2 text-gray-900 border border-gray-400 rounded" style="width: 100%;" value="10000">
                                            </div>
                                            <div class="col-lg-6 col-sm-12 col-xs-12 mb-2" id="flex_day_added">
                                              <label for="flex_selected_day" style=" color: white !important">Day Added</label>
                                              <select class="px-1 py-1 rounded text-gray-900 border bg-white mt-2 border-gray-400" style="width: 100%; font-weight: bold" id="flex_selected_day">
                                                <option value="">Select Day</option>
                                              </select>
                                            </div>
                                            
                                            <div class="col-lg-6 col-sm-12 col-xs-12 mb-2"></div>
                                            <div class="col-lg-6 col-sm-12 col-xs-12 mb-2" id="add_amount_to_flex_button">
                                              <button type="button" class="px-1 py-1 rounded text-white border mt-2 border-gray-400" style="width: 100%; font-weight: bold">
                                                  <span>ADD</span>
                                              </button>
                                            </div>
                                          </div>

                                        </div>
                                    </div>
                                    
                                    <div class="bg-white" style="padding: 0.05rem; display:none"></div>
              
                                    
                                </div>
                                    </div>
                                </div>
                            </div>
                            <!-- END -->
                        </div>
                    </div>
                    
                    <h2 class="text-xl md:text-2xl leading-snug font-semibold tracking-tight text-gray-900">Investment Calculator For Fixed Plan </h2>

                    <div class="py-5 border-gray-300 mt-10">
                        <div class="flex flex-col xl:flex-row">
                            <!-- CALC-->
                            <div class="w-full xl:w-3/3">
                                <div class="bg-white rounded-md shadow overflow-hidden p-10 sm:max-w-lg md:max-w-3xl">
                                    <form method="POST" class="bank-account-form">
                                        <div class="flex flex-wrap mb-5 -mx-3">
                                            <div class="w-full md:w-2/2 px-3">
                                                <label style="color:#1e266d;font-size:16px; font-weight: 700">Initial Deposit (₦)</label>
                                                <div class="mt-3">
                                                    <input id="invCapital" type="number" min="200000" class="bg-white text px-3 py-3 text-gray-900 border border-gray-400 rounded" style="width: 100%;" value="200000">
                                                </div> 
                                            </div> 
                                        </div> 

                                        <div class="flex flex-wrap mt-5 -mx-3">
                                            <div class="w-full md:w-2/2 px-3">
                                                <div class="relative">
                                                    <select class="px-3 py-3 rounded text-gray-900 border bg-white mt-2 border-gray-400" style="width: 100%; font-weight: bold" id="invDuration">                                                     <option value="6" selected="">QG-6: ROI 10%</option>
                                                        <option value="12">QG-12: Min. ROI 45%</option>
                                                        <option value="18">QG-18: Min. ROI 70%</option>
                                                        <option value="24">QG-24: Min. ROI 120%</option> 
                                                    </select>
                                                </div>
                                            </div> 
                                        </div>                                         

                                        <div class="w-full">
                                            <button type="button" class="focus:outline-none focus:shadow-outline w-full md:flex-1 bg-lime-100 hover:bg-lime-100 px-4 py-3 text-white rounded border-b-2  font-semibold mt-4" onclick="calculateInvestment();"><span>Calculate</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <!-- --> 

                            <!-- RESULT -->
                            <div class="w-full xl:w-3/3 pl-0 xl:pl-5 mt-4 xl:mt-0">
                                <div class="bg-lime-100 overflow-hidden px-10 pt-4 pb-8 sm:max-w-lg md:max-w-3xl">
                                    <div class="row">
                                        <div class="col" style="margin-top:10px">
                                            <h6 class="bold mb-5"> 
                                                <span style="color: #fff"> TOTAL INVESTMENT BREAKDOWN</span>
                                            </h6>

                                            <div id="minContainer">
                                                <div class="mb-5" style="border-bottom: 1px solid #1e266d"> 
                                                    <div class="text-white square-block ovw-bg-2" style="display:inline-block"></div>
                                                    <div class="text-white" style="display:inline-block">Minimum ROI (%)</div>
                                                    <div class="bold text-white" id="min_percent" style="display:inline-block;float:right">₦0.00</div>
                                                </div>

                                                <div class="mb-5" style="border-bottom: 1px solid #1e266d"> 
                                                    <div class="square-block ovw-bg-2 text-white" style="display:inline-block"></div>
                                                    <div class="text-white" style="display:inline-block">Minimum ROI</div>
                                                    <div class="bold text-white" id="min_amount" style="display:inline-block;float:right">₦0.00</div>
                                                </div>

                                                <div class="mb-5"> 
                                                    <div class="square-block ovw-bg-2 text-white" style="display:inline-block"></div>
                                                    <div class="text-white" style="display:inline-block">Min ROI + Capital</div>
                                                    <div class="bold text-white" id="min_percent_and_amount" style="display:inline-block; float:right">₦0.00</div>
                                                </div>
                                            </div>

                                            <div class="bg-white" style="padding: 0.05rem; display: none"></div>
                                            
                                            <div id="maxContainer" style="display: none;">
                                                <div class="mb-5 mt-5" style="border-bottom: 1px solid #1e266d"> 
                                                    <div class="text-white square-block ovw-bg-2" style="display:inline-block"></div>
                                                    <div class="text-white" style="display:inline-block">Max ROI (%)</div>
                                                    <div class="bold text-white" id="max_percent" style="display:inline-block;float:right">₦0.00</div>
                                                </div>

                                                <div class="mb-5" style="border-bottom: 1px solid #1e266d"> 
                                                    <div class="square-block ovw-bg-2 text-white" style="display:inline-block"></div>
                                                    <div class="text-white" style="display:inline-block">Max ROI (₦)</div>
                                                    <div class="bold text-white" id="max_amount" style="display:inline-block;float:right">₦0.00</div>
                                                </div>

                                                <div class="mb-5"> 
                                                    <div class="square-block ovw-bg-2 text-white" style="display:inline-block"></div>
                                                    <div class="text-white" style="display:inline-block">Max ROI + Capital</div>
                                                    <div class="bold text-white" id="max_percent_and_amount" style="display:inline-block;float:right">₦0.00</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- END -->
                        </div>
                    </div>

                    @include('investor.layout.footer')
                </main>
            </div>

        </div>

        <script type="text/javascript" src="/questergatecapital/public/js/jquery.js"></script>
        <script type="text/javascript" src="/questergatecapital/public/js/moment.js"></script>
        <script type="text/javascript" src="/questergatecapital/public/js/script.js?v=18"></script>
        <script type="text/javascript" src="/questergatecapital/public/js/plugin.js"></script>
    </body>
</html>
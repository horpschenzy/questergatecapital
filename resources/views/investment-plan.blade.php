<!DOCTYPE html>
<html lang="en">
    
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Our Investment Plans - QuesterGate Limited</title>
  <link rel="icon" href="/questergatecapital/public/img/favicon.png" type="image/png" sizes="16x16">

  <!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/questergatecapital/public/css/page.css" id="main_style">
  <link rel="stylesheet" href="/questergatecapital/public/css/scrolltop.css">
  <style>
    #flex-calculator{
      scroll-behavior: smooth;
    }
    #calculator{
      scroll-behavior: smooth;
    }
    .hide-me{
      display: none !important;
    }
    .show-me{
      display: block !important;
    }
    ul.menu{
      list-style-type: none;
      padding: 0;
    }
    ul.menu li{
      padding: .5rem;
      border-bottom: 0.0625rem solid #e7eaf3;
      font-weight: bold;
      color: #000;
      cursor: pointer;
    }
    ul.menu li:hover, ul:menu  li a:hover{
      background-color: #001D3D;
      color: #FFF !important;
    }
    ul.menu li.active{
      background-color: #001D3D;
    }
    .menu-content{
      display: none;
    }
    .black-text-color{
      color: #000;
    }
  </style>

<script type="text/javascript"> window.$crisp=[];window.CRISP_WEBSITE_ID="59767aec-ab5f-49a2-9233-f872ade8029a";(function(){ d=document;s=d.createElement("script"); s.src="https://client.crisp.chat/l.js"; s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})(); </script>
</head>

<body data-aos-easing="ease" data-aos-duration="650" data-aos-delay="0">

@include('generic.header')


<main id="content" role="main" class="faq-body">
  <a id="scroll-top-btn"></a>
      <div class="bg-img-hero" style="background-image: url(/questergatecapital/public/img/abstract-shapes-12.svg);">
      <div class="container space-top-3 space-bottom-2 position-relative z-index-2">
        <div class="w-md-80 w-lg-60 text-center mx-md-auto">
          <h1>OUR INVESTMENT PLANS</h1>
        </div>
      </div>
    </div>

    <!-- FAQ Topics Section -->
    <div class="container">
      <div class="row justify-content-lg-center">

        <!-- FAQ MENU -->
        <div class="col-lg-4" style="display: none;">
          <nav>
            <ul class="menu">
              <li class="active" onclick="showFaqMenuContent(this, 'qg-6');"><a href="#">QG-6</a></li>
              <li onclick="showFaqMenuContent(this, 'qg-12');"><a href="#">QG-12</a></li>
              <li onclick="showFaqMenuContent(this, 'qg-18');"><a href="#">QG-18</a></li>
              <li onclick="showFaqMenuContent(this, 'qg-24');"><a href="#">QG-24</a></li>
            </ul>
          </nav>

          <div class="mb-3">
            <button class="btn btn-sm btn-indigo u-btn-indigo transition-3d-hover" onclick="toggleCalculator();">Investment Calculator</button>
          </div>

          <div class="mb-10">
          <a class="btn btn-sm btn-indigo u-btn-indigo transition-3d-hover" href="investor/plan">
            Invest Now
          </a>
          </div>

        </div>
        <!-- -->

        <!-- FAQ MENU -->
        <div class="col-lg-4">
          <!-- <nav>
            <ul class="menu">
              <li class="active" onclick="showFaqMenuContent(this, 'qg-6');"><a href="#">QG-6</a></li>
              <li onclick="showFaqMenuContent(this, 'qg-12');"><a href="#">QG-12</a></li>
              <li onclick="showFaqMenuContent(this, 'qg-18');"><a href="#">QG-18</a></li>
              <li onclick="showFaqMenuContent(this, 'qg-24');"><a href="#">QG-24</a></li>
            </ul>
          </nav> -->

          <div style="font-weight: bold; font-size: 25px; margin-bottom: 10px">FLEX PLANS</div>
          <div class="mb-3">
            <button style="width: 100%" class="text-left btn btn-sm btn-indigo u-btn-indigo transition-3d-hover" onclick="showFaqMenuContent(this, 'qg-x12');">FLEX-STUDENT</button>
          </div>

          <div class="mb-3">
            <button style="width: 100%" class="text-left btn btn-sm btn-indigo u-btn-indigo transition-3d-hover" onclick="showFaqMenuContent(this, 'qg-x24');">FLEX-SALARY</button>
          </div>

          <div class="mb-3">
            <button style="width: 100%" class="text-left btn btn-sm btn-indigo u-btn-indigo transition-3d-hover" onclick="showFaqMenuContent(this, 'business');">FLEX-BUSINESS</button>
          </div>
          
          <div style="margin-bottom: 30px;">
            <button style="width: 100%" class="text-left btn btn-sm btn-indigo u-btn-indigo transition-3d-hover" onclick="showFaqMenuContent(this, 'flex-calculator');">Investment Flex Calculator</button>
          </div>

          <div style="font-weight: bold; font-size: 25px; margin-bottom: 10px">FIXED PLANS</div>

          <div class="mb-3">
            <button style="width: 100%" class="text-left btn btn-sm btn-indigo u-btn-indigo transition-3d-hover" onclick="showFaqMenuContent(this, 'qg-12');">QG-12</button>
          </div>

          <div class="mb-3">
            <button style="width: 100%" class="text-left btn btn-sm btn-indigo u-btn-indigo transition-3d-hover" onclick="showFaqMenuContent(this, 'qg-24');">QG-24</button>
          </div>

          <div class="mb-3">
            <a href="#calculator">
              <button style="width: 100%" class="text-left btn btn-sm btn-indigo u-btn-indigo transition-3d-hover" onclick="toggleCalculator();">Investment Fixed Calculator</button>
            </a>
          </div>

        </div>
        <!-- -->

        <!-- MAIN FAQ BODY -->
        <div class="col-lg-8">
          
          <!-- QG-X12 -->
          <div id="qg-x12" style="display: block" class="menu-content">
            <h2>FLEX-STUDENT</h2>

            <div>
              <div class="card shadow-none mb-3">               

                <div class="faq-body">
                  <div class="card-body px-0">
                    <p>This plan was created for Students (and Non Students) who want to save towards a personal goal and at same time develop a habit of safe investing.</p>
                    <p>With this plan, you can save towards that personal goal by regularly setting aside a portion of your monthly income as investment.</p>

                    {{-- <p style="font-weight: bold;">Unique features of this plan are:</p> --}}

                    <ul>
                        <li><strong>Minimum Capital to activate:</strong> ₦5,000 naira.</li>
                        <li><strong>Investment Duration:</strong> Freedom to pick a duration that suits your personal goal.
                          (Minimum duration is 5 months)</li>
                        <li><strong>Continuous investing:</strong> Freedom to keep adding more capital to your investment plan anytime you want.</li>
                        <li>Withdrawal: Freedom to withdraw as you want every 90days.</li>
                        <li><strong>Termination Of Investment:</strong> You have the freedom to terminate your investment at any
                          time and take your capital.</li>
                        <li><strong>Return On Investment (ROI):</strong> Gain of 0.084% per day (that is minimum 15% in 6 months).</li>
                    </ul>

                    <div style="margin-bottom: 30px;"><a href="/faq"  alt="">visit our FAQ page for more information.</a></div>

                    <p style="font-weight: bold;">How it works:</p>

                    <ol>
                        <li>After you create an investment plan. The Investment plan has an <strong>END DATE</strong>. 
                          (The End Date is when your "Total Capital + Total ROI" will be paid to your account)</li>
                        <li>You can add more money to your investment capital whenever you choose.
                          Every amount you add to the investment plan will make a particular ROI by the End Date depending on when you added it.</li>
                        <li>At the <strong>END DATE</strong> of the investment plan, your "Total Capital and Total ROI" is paid into your account.</li>

                    </ol>

                    <div>Use the investment Calculator below for more details.</div>

                    {{-- <div>The capital is invested in short term assets with high liquidity, low risk and moderate returns
                    </div> --}}

                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- -->

          <!-- QG-X24 -->
          <div id="qg-x24" style="display: none" class="menu-content">
            <h2>FLEX-SALARY</h2>

            <div>
              <div class="card shadow-none mb-3">               

                <div class="faq-body">
                  <div class="card-body px-0">
                    <p>
                      This plan was created to help Salary Earners access safe investments and build wealth by having another stream of income..</p>
                    <p>With this plan, as an Employee you can regularly set aside a portion of your salary to safely invest towards any personal goal you may have like buying a car, building a house, starting a business, retirement income or just earning more money from the return on your investments.
                    </p>

                    {{-- <p style="font-weight: bold;">Unique features of this plan are:</p> --}}

                    <ul>
                        <li><strong>Minimum Capital to activate:</strong> ₦10,000.</li>
                        <li><strong>Investment Duration:</strong> Freedom to pick a duration that suits your personal goal.
                          (Minimum duration is 5 months) </li>
                        <li><strong>Continuous investing:</strong> Freedom to keep adding more capital to your investment plan anytime you want.</li>
                        <li><strong>Withdrawal:</strong> You have the freedom to withdraw as you want every 90days.</li>
                        <li><strong>Termination Of Investment:</strong> You have the freedom to terminate your investment at any
                          time and take your capital.</li>
                        <li><strong>Return On Investment (ROI):</strong> Gain of 0.1% per day (that is ROI of 18% in 6 months).</li>
                    </ul>

                    <div style="margin-bottom: 30px;"><a href="/faq"  alt="">visit our FAQ page for more information.</a></div>

                    <p style="font-weight: bold;">How it works:</p>

                    <ol>
                       <li>After you create an investment plan. The Investment plan has an <strong> END DATE </strong>. 
                          (The End Date is when your "Total Capital + Total ROI" will be paid to your account)</li>


                        <li>You can add more money to your investment capital whenever you choose.
                          Every amount you add to the investment plan will make a particular ROI by the End Date depending on when you added it.</li>

                        <li>At the <strong> END DATE </strong> of the investment plan, your "Total Capital and Total ROI" is paid into your account.</li>

                    </ol>

                    <div>Use the investment Calculator below for more details.</div>

                    {{-- <div>The capital is invested in assets with moderate liquidity, low risk, and moderate returns.
                    </div> --}}

                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- -->
         
          <div id="business" style="display: none" class="menu-content">
            <h2>FLEX-BUSINESS</h2>

            <div>
              <div class="card shadow-none mb-3">               

                <div class="faq-body">
                  <div class="card-body px-0">
                    <p>This Is the plan for Business Owners who want to invest towards a personal/business goal while also earning more from another stream of income.</p>
                    <p>With this plan, as Business Owner you can regularly set aside a portion of your business profit to safely invest towards expanding your business, starting a new business, taking a personal vacation or earning ROI as another stream of income.</p>

                    {{-- <p style="font-weight: bold;">Unique features of this plan are:</p> --}}

                    <ul>
                        <li><strong>Minimum Capital to activate:</strong> ₦15,000.</li>
                        <li><strong>Investment Duration:</strong> Freedom to pick a duration that suits your personal goal.
                          (Minimum duration is 5months)</li>
                        <li><strong>Continuous investing:</strong> Freedom to keep adding more capital to your investment plan anytime you want.</li>
                        <li><strong>Withdrawal:</strong> You have the freedom to withdraw as you want every 90days.</li>
                        <li><strong>Termination Of Investment:</strong> You have the freedom to terminate your investment at any
                          time and take your capital.</li>
                        <li><strong>Return On Investment (ROI):</strong> Gain of 0.12% per day (that is minimum ROI of 21% in 6 months).</li>
                    </ul>

                    <div style="margin-bottom: 30px;"><a href="/faq"  alt="">visit our FAQ page for more information.</a></div>

                    <p style="font-weight: bold;">How it works:</p>

                    <ol>
                       <li>After you create an investment plan. The Investment plan has an <strong> END DATE </strong>. 
                          (The End Date is when your "Total Capital + Total ROI" will be paid to your account)</li>


                        <li>You can add more money to your investment capital whenever you choose.
                          Every amount you add to the investment plan will make a particular ROI by the End Date depending on when you added it.</li>

                        <li>At the <strong> END DATE </strong> of the investment plan, your "Total Capital and Total ROI" is paid into your account.</li>

                    </ol>

                    <div>Use the investment Calculator below for more details.</div>

                    {{-- <div>The capital is invested in assets with moderate liquidity, low risk, and moderate returns.
                    </div> --}}

                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Flex-calculator -->
          <div id="flex-calculator" style="display: none" class="menu-content">
            <h2>Flex Calculator</h2>

            <div>
              <div class="card shadow-none mb-3">               

                <div class="faq-body">
                  <div class="card-body px-0">
                        <div class="row">
                      <div class="col-lg-5 col-sm-12 col-xs-12 mb-2">
                        <div class="mb-5">
                          <div>
                                <label style="color:#1e266d;font-size:16px; font-weight: 700">Initial Deposit (₦)</label>
                            </div>
        
                            <div style="display: flex;">
                                <input id="invFlexCapital" type="number" min="10000" class="bg-white text px-3 py-3 text-gray-900 border border-gray-400 rounded" style="width: 100%;" value="10000">
                            </div> 
                        </div>
        
                        <div class="">
                          <div class="relative">
                              <select class="px-3 py-3 rounded text-gray-900 border bg-white mt-2 border-gray-400" style="width: 100%; font-weight: bold" id="invFlexDuration">
                                <option value="12">QG-X12 Min. ROI 32%</option>
                                <option value="24">QG-X24 Min. ROI 86.4%</option>
                              </select>
                          </div>
                        </div>
        
                        <div>
                          <button type="button" class="bg-indigo px-4 py-3 text-white md:flex-1 rounded font-semibold mt-4 opacity-75" style="width: 100%; font-weight: bold" onclick="calculateFlexInvestment();">
                              <span>Calculate</span>
                          </button>
                        </div>
                      </div>

                      <div class="col-lg-7 col-sm-12 col-xs-12 mb-2">
                        <div class="bg-indigo text-white">
                          <div class="py-5 px-5 px-sm-5">
                            <div class="row">
                                <div class="col" style="margin-top:1px">
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
                                              <label for="flex_added_amount">Add to your capital</label>
                                              <input id="flex_added_amount" type="number" class="bg-white text px-1 py-1 mt-2 text-gray-900 border border-gray-400 rounded" style="width: 100%;" value="10000">
                                            </div>
                                            <div class="col-lg-6 col-sm-12 col-xs-12 mb-2" id="flex_day_added">
                                              <label for="flex_selected_day">Day Added</label>
                                              <select class="px-1 py-1 rounded text-gray-900 border bg-white mt-2 border-gray-400" style="width: 100%; font-weight: bold" id="flex_selected_day">
                                                <option value="">Select Day</option>
                                              </select>
                                            </div>
                                            
                                            <div class="col-lg-6 col-sm-12 col-xs-12 mb-2"></div>
                                            <div class="col-lg-6 col-sm-12 col-xs-12 mb-2" id="add_amount_to_flex_button">
                                              <button type="button" class="bg-indigo px-4 py-3 text-white md:flex-1 rounded font-semibold mt-4 opacity-75" style="width: 100%; font-weight: bold">
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- -->

          <!-- QG-6 -->
          <div id="qg-6" style="display: none" class="menu-content">
            <h2>QG-6</h2>

            <div>
              <div class="card shadow-none mb-3">               

                <div class="faq-body">
                  <div class="card-body px-0">
                    <p>Investment duration for this plan is 6months.</p>

                    <p>Minimum Capital required to activate this plan is ₦100,000</p>

                    <p>This plan gives a return of 10% at the end of the investment duration.</p>

                    <div>
                      <p style="font-weight: bold;">Unique features of this plan are:</p>

                      <ul>
                          <li>Freedom to withdraw any amount from your capital  at any time.</li>
                          <li>Freedom to terminate your investment at any time and take back your capital.
                          <li>You cannot add more capital to this investment plan once activated.
                          </li>
                      </ul>

                      <div style="margin-bottom: 30px;">
                          <a href="/faq"  alt="">visit our FAQ page for more information.</a>
                      </div>
                    </div>

                    <p>This plan is suitable for investors who are looking to invest their money for a short duration.</p>
                    <p>The capital is invested in short term assets with high liquidity, low risk and low returns.</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- -->

          <!-- QG-12 -->
          <div id="qg-12" style="display: none" class="menu-content">
            <h2>QG-12</h2>

            <div>
              <div class="card shadow-none mb-3">

                <div class="faq-body">
                  <div class="card-body px-0">
                    <p>Investment duration for this plan is 12months.</p>

                    <p>Minimum Capital required to activate this plan is ₦100,000</p>

                    <p>This plan gives a return which ranges between 45% to 52% at the end of the investment duration.</p>

                    <div>
                      <p style="font-weight: bold;">Unique features of this plan are:</p>

                      <ul>
                          <li>Freedom to withdraw any amount from your capital  at any time.</li>
                          <li>Freedom to terminate your investment at any time and take back your capital.
                          <li>You cannot add more capital to this investment plan once activated.
                          </li>
                      </ul>

                      <div style="margin-bottom: 30px;">
                          <a href="/faq"  alt="">visit our FAQ page for more information.</a>
                      </div>
                    </div>

                    <p> This plan is for people/businesses who need a safe place to set aside money for a
                      project.
                      This plan serves as a safe place to keep and invest your money so as to protect it against
                      inflation and also yield good returns when they need it.
                      </p>

                    <p> Your money is kept in a safe portfolio that contains short term assets with:</p>
                    <p>30% low risk (moderate yield) assets with moderate liquidity;</p>
                    <p>70% moderate risk (high yield) assets with low liquidity;</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- -->

          <!-- QG-18 -->
          <div id="qg-18" style="display: none" class="menu-content">
            <h2>QG-18</h2>

            <div>
              <div class="card shadow-none mb-3">
               
                <div class="faq-body">
                  <div class="card-body px-0">
                      <p>Investment duration for this plan is 18months.</p>

                      <p>Minimum Capital required to activate this plan is ₦100,000</p>

                      <p>This plan gives a return which ranges between 70% to 76% at the end of the investment duration.</p>

                      <div>
                        <p style="font-weight: bold;">Unique features of this plan are:</p>

                        <ul>
                            <li>Freedom to withdraw any amount from your capital  at any time.</li>
                            <li>Freedom to terminate your investment at any time and take back your capital.
                            <li>You cannot add more capital to this investment plan once activated.
                            </li>
                        </ul>

                        <div style="margin-bottom: 30px;">
                            <a href="/faq"  alt="">visit our FAQ page for more information.</a>
                        </div>
                      </div>

                      <p> This plan is suitable for investors with a long term investment mindset and have set multi-year goals for certain projects and would like to invest in preparation for the projects</p>

                      <p> your capital is invested in a well diversified portfolio that contains:</p>
                      <p>30% low risk (moderate yield) assets with moderate liquidity;</p>
                      <p>40% moderate risk (high yield) assets with low liquidity;</p>
                      <p>30% moderate risk (moderate yield) assets with high liquidity.</p>

                    </div>
                  </div>
              </div>
            </div>
          </div>
          <!-- -->

          <!-- QG-24 -->
          <div id="qg-24" style="display: none" class="menu-content">
            <h2>QG-24</h2>

            <div>
              <div class="card shadow-none mb-3">
                

                <div class="faq-body">
                  <div class="card-body px-0">
                  <div class="card-body px-0">
                      <p>Investment duration for this plan is 24months.</p>

                      <p>Minimum Capital required to activate this plan is ₦100,000</p>

                      <p>This plan gives a return which ranges between 125% to 135% at the end of the investment duration.</p>

                      <div>
                        <p style="font-weight: bold;">Unique features of this plan are:</p>

                        <ul>
                            <li>Freedom to withdraw any amount from your capital  at any time.</li>
                            <li>Freedom to terminate your investment at any time and take back your capital.
                            <li>You cannot add more capital to this investment plan once activated.
                            </li>
                        </ul>

                        <div style="margin-bottom: 30px;">
                            <a href="/faq"  alt="">visit our FAQ page for more information.</a>
                        </div>
                      </div>

                      <p> If you need a safe place to keep and invest money you have set aside for a project and you want to ensure your money does not lose value due to inflation. 
                        Then this plan is perfect for you.  </p>

                      <p> Your money is kept in a well diversified portfolio that contains: </p>
                      <p>60% low risk (high yield) assets with low liquidity;</p>
                      <p>20% moderate risk (moderate yield) assets with low liquidity;</p>
                      <p>20% moderate risk (high yield) assets with high liquidity.</p>

                    </div>
                  </div>

                  </div>
                </div>
              </div>
            </div>
          
            <div class="mb-10 mx-auto text-center">
              <a class="text-left btn btn-sm btn-indigo u-btn-indigo transition-3d-hover" href="investor/plan">Invest Now</a>
            </div>
          </div>
          <!-- -->
          
        </div>
        <!-- END -->

        <!-- CALCULATOR -->
        <div class="container hide-me calc-body" id="calculator">
          <p style="color: #000; font-size: 1.5rem; font-weight: bold"><strong>INVESTMENT CALCULATOR</strong></p>

          <div class="row no-gutters align-items-lg-center mb-7 mb-md-11">
              <div class="col-lg-7 shadow-lg rounded">
                  <div class="pt-5 pb-11 px-5 px-sm-9">
                      
                      <div class="mb-5">
                      `   <div>
                              <label style="color:#1e266d;font-size:16px; font-weight: 700">Initial Deposit (₦)</label>
                          </div>

                          <div style="display: flex;">
                              <input id="invCapital" type="number" min="200000" class="bg-white text px-3 py-3 text-gray-900 border border-gray-400 rounded" style="width: 100%;" value="200000">
                          </div> 
                      </div>

                      <div class="">
                        <div class="relative">
                            <select class="px-3 py-3 rounded text-gray-900 border bg-white mt-2 border-gray-400" style="width: 100%; font-weight: bold" id="invDuration">                                                                                    <option value="6" selected="">6 Months</option>
                                <option value="12">12 Months</option>
                                <option value="18">18 Months</option>
                                <option value="24">24 Months</option>
                            </select>
                        </div>
                      </div>

                      <div>
                        <button type="button" class="bg-indigo px-4 py-3 text-white md:flex-1 rounded font-semibold mt-4 opacity-75" style="width: 100%; font-weight: bold" onclick="calculateInvestment();">
                            <span>Calculate</span>
                        </button>
                      </div>
                  </div>
              </div>

              <div class="col-lg-5 bg-indigo text-white">
                  <div class="py-9 px-5 px-sm-9">
                      <div class="row">
                          <div class="col" style="margin-top:50px">
                              <h6 class="bold mb-5"> <span style="color: #fff"> Total Investment Breakdown</span></h6>
                              <div id="minContainer">
                              <div class="mb-5" style="border-bottom: 1px solid #1e266d"> 
                                  <div class="text-white square-block ovw-bg-2" style="display:inline-block"></div>
                                  <div class="text-white" style="display:inline-block">Minimum ROI (%)</div>
                                  <div class="bold text-white" id="min_percent" style="display:inline-block;float:right">₦0.00</div>
                              </div>

                              <div class="mb-5" style="border-bottom: 1px solid #1e266d"> 
                                  <div class="square-block ovw-bg-2 text-white" style="display:inline-block"></div>
                                  <div class="text-white" style="display:inline-block">Minimum ROI </div>
                                  <div class="bold text-white" id="min_amount" style="display:inline-block;float:right">₦0.00</div>
                              </div>

                              <div class="mb-5"> 
                                  <div class="square-block ovw-bg-2 text-white" style="display:inline-block"></div>
                                  <div class="text-white" style="display:inline-block">Min ROI + Capital</div>
                                  <div class="bold text-white" id="min_percent_and_amount" style="display:inline-block; float:right">₦0.00</div>
                              </div>
                          </div>

                          <div class="bg-white" style="padding: 0.05rem; display: none"></div>
                          
                          <div id="maxContainer"  style="display: none;">
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

                              <div> 
                                  <div class="square-block ovw-bg-2 text-white" style="display:inline-block"></div>
                                  <div class="text-white" style="display:inline-block">Max ROI + Capital</div>
                                  <div class="bold text-white" id="max_percent_and_amount" style="display:inline-block;float:right">₦0.00</div>
                              </div>
                          </div>
                          
                          </div>
                      </div>
                  </div>
              </div>
          </div>

        </div>
        <!-- END -->

      </div>
    </div>
    <!-- End FAQ Topics Section -->


  </main>

  @include('generic.footer')


</div>

<script type="text/javascript" src="/questergatecapital/public/js/jquery.js"></script>
<script src="/questergatecapital/public/js/moment.js"></script>
<script type="text/javascript" src="/questergatecapital/public/js/main.js"></script>
<script type="text/javascript" src="/questergatecapital/public/js/script.js?v=21"></script>

<script>
  function toggleCalculator(){
    if($(".calc-body").hasClass("hide-me")){
        $(".calc-body").removeClass("hide-me")
    }
    else{
      $(".calc-body").addClass("hide-me")
    }
  }
</script>
</body></html>

<!DOCTYPE html>
<html lang="en"><head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Investment Calculator- QuesterGate Limited</title>
  <link rel="icon" href="/questergatecapital/public/img/favicon.png" type="image/png" sizes="16x16">

  <!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600&amp;display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/questergatecapital/public/css/page.css" id="main_style">
  <link rel="stylesheet" href="/questergatecapital/public/css/scrolltop.css">
  <style>
    .hide-me{
      display: none !important;
    }
    .show-me{
      display: block !important;
    }
  </style>

<script type="text/javascript"> window.$crisp=[];window.CRISP_WEBSITE_ID="59767aec-ab5f-49a2-9233-f872ade8029a";(function(){ d=document;s=d.createElement("script"); s.src="https://client.crisp.chat/l.js"; s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})(); </script>
</head>

<body data-aos-easing="ease" data-aos-duration="650" data-aos-delay="0">

@include('generic.header')

<main id="content" role="main" class="overflow-hidden">
<a id="scroll-top-btn"></a>
<div class="bg-img-hero" style="background-image: url(https://www.payflexi.co/landingv2/svg/components/abstract-shapes-12.svg);">
    <div class="container space-top-3 space-bottom-1 position-relative z-index-2">
        <div class="w-md-80 w-lg-50 text-center mx-md-auto">
            <h2 class="h1">Investment Calculator</h2>
            <span class="d-block small font-weight-bold text-cap mb-2">
            Use this free Investment calculator to estimate your investment growth over time. With this growth calculator, you can set a goal and figure out how much you need to save each month to hit the mark.
            </span>
        </div>
    </div>
</div>

<div class="container pt-3">

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
                  <select class="px-3 py-3 rounded text-gray-900 border bg-white mt-2 border-gray-400" style="width: 100%; font-weight: bold" id="invDuration">                                                                                             
                      {{-- <option value="6" selected="">QG-6: ROI 10%</option> --}}
                      <option value="12" selected="">QG-12: Min. ROI 45%</option>
                      {{-- <option value="18">QG-18: Min. ROI 70%</option> --}}
                      <option value="24">QG-24: Min. ROI 120%</option>
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
        <div class="py-5 px-5 px-sm-5">
          <div class="row">
              <div class="col" style="margin-top:10px">
                  <h6 class="bold mb-5"> 
                      <span style="color: #fff"> TOTAL INVESTMENT BREAKDOWN</span>
                  </h6>

                  <div id="minContainer">
                      <div class="mb-5" style="border-bottom: 1px solid #1e266d"> 
                          <div class="text-white square-block ovw-bg-2" style="display:inline-block"></div>
                          <div class="text-white" style="display:inline-block">Min ROI (%)</div>
                          <div class="bold text-white" id="min_percent" style="display:inline-block;float:right">₦0.00</div>
                      </div>

                      <div class="mb-5" style="border-bottom: 1px solid #1e266d"> 
                          <div class="square-block ovw-bg-2 text-white" style="display:inline-block"></div>
                          <div class="text-white" style="display:inline-block">Min ROI (₦)</div>
                          <div class="bold text-white" id="min_amount" style="display:inline-block;float:right">₦0.00</div>
                      </div>

                      <div class="mb-5"> 
                          <div class="square-block ovw-bg-2 text-white" style="display:inline-block"></div>
                          <div class="text-white" style="display:inline-block">Min ROI + Capital</div>
                          <div class="bold text-white" id="min_percent_and_amount" style="display:inline-block; float:right">₦0.00</div>
                      </div>
                  </div>

                  <div class="bg-white" style="padding: 0.05rem"></div>
                  
                  <div id="maxContainer">
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
<!-- End Pricing -->


</div>


</main>

@include('generic.footer')

<script type="text/javascript" src="/questergatecapital/public/js/jquery.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js"></script>
<script type="text/javascript" src="/questergatecapital/public/js/main.js"></script>
<script type="text/javascript" src="/questergatecapital/public/js/script.js?v=16"></script>

</body></html>
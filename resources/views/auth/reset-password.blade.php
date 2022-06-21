<html class="bg-gray-200"><head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="/questergatecapital/public/css/main.css" rel="stylesheet" id="main_css">
    <link href="/questergatecapital/public/css/primer-tooltips.css" rel="stylesheet">
    <link rel="icon" href="/questergatecapital/public/img/favicon.png" type="image/png" sizes="16x16">

<title>Reset Password | QuesterGate Limited</title></head>

<body class="font-sans antialiased text-gray-900 leading-normal">

    <div class="bg-indigo-600"><div class="flex md:min-h-screen flex-col md:flex-row"><div class="w-full md:w-2/5 h-96 md:h-auto md:min-h-screen relative"><div class="absolute inset-0 bg-cover bg-center" style="background-image: url(&quot;/img/africa-family.jpg&quot;);"></div></div> <div class="w-full md:w-3/5 bg-white md:min-h-screen"><div class="flex items-center justify-center h-full p-12"><div class="mt-6 w-full max-w-sm">
    <a href="/" class="logo flex justify-center mb-12">
                <img src="/questergatecapital/public/img/qgc-logo.png" alt="Logo" class="h-12 w-auto">
            </a> 
            
            
            <div class="flex items-center justify-between"><h2 class="font-semibold text-gray-900 text-lg uppercase leading-tight border-b-2 border-gray-200 pb-4">Reset your password</h2></div> 
            
            <form action="#" method="POST" class="w-full" id="resetPassword">
              <div>
                <p class="alert-success-alt p-3 rounded text-sm my-2 display-success" style="display: none;">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" style="display: inline-block">
                      <path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z" class=""></path>
                    </svg> 
                    <span style="vertical-align: middle;">Password reset successfull.</span>
                </p>

                <p class="alert-danger-alt p-3 rounded text-sm my-2 display-error" style="display: none;">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" style="display: inline-block">
                    <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z" class=""></path>
                  </svg>

                  <span style="vertical-align: middle;" id="alert-danger-text">Something went wrong. Try again later.</span>
                </p>

              </div>

              <div class="mt-8">
                <div aria-required="true" aria-invalid="false">
                  <input id="email" name="email" type="text" placeholder="Email" class="bg-gray-200 text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white mt-3 border-gray-400" readonly value="{{$email}}"> 
                  <p class="text-red-500 text-xs italic my-2" style="display: none;"></p> 
                </div>
              </div> 

              <div class="mt-8">
                <div aria-required="true" aria-invalid="false">
                  <input id="new_password" name="new_password" type="password" placeholder="New Password" class="bg-white text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white mt-3 border-gray-400"> 
                  <p class="text-red-500 text-xs italic my-2" style="display: none;"></p> 
                </div>
              </div> 

              <div class="mt-8">
                <div aria-required="true" aria-invalid="false">
                  <input id="confirm_password" name="confirm_password" type="password" placeholder="Confirm Password" class="bg-white text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white mt-3 border-gray-400"> 
                  <p class="text-red-500 text-xs italic my-2" style="display: none;"></p> 
                </div>
              </div> 
              
              <div class="mt-6">
                <div>
                  <button type="button" class="focus:outline-none focus:shadow-outline bg-indigo-500 hover:bg-indigo-600 px-4 py-3 text-white w-full md:flex-1 rounded border-b-2 border-indigo-600 font-semibold mt-4 opacity-75" onclick="Plugin.resetPassword(this);">
                    <span>Reset Password</span>
                  </button> 
                  <p class="text-indigo-600 text-sm text-center mt-3">
                    <span>Don't need to reset your password?</span> 
                    <span class="ml-1">
                      <a href="/login" class="font-semibold hover:underline">Sign in</a>.
                    </span>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div> 
    
    <div role="alert" class="alert alert-flash rounded p-5 fixed max-w-xs font-medium flex items-center justify-between transition transition-property-opacity z-50 alert-success" style="display: none;">
      <div class="icon">
        <div class="text-white mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thumbs-up">
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
          </svg>
        </div>
      </div> 
      <div class="body"></div>
    </div>
  </div>
            


<script src="/questergatecapital/public/js/jquery.js"></script>
  <script src="/questergatecapital/public/js/plugin.js?v=11"></script>
</body></html>
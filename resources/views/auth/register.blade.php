<!DOCTYPE html>
<html class="bg-gray-200">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon" href="/questergatecapital/public/img/favicon.png" type="image/png" sizes="16x16">
    <link href="/questergatecapital/public/css/main.css" rel="stylesheet" id="main_css">
    <link href="/questergatecapital/public/css/primer-tooltips.css" rel="stylesheet">
    <title>Register | QuesterGate Limited</title>
</head>

<body class="font-sans antialiased text-gray-900 leading-normal">

    <div class="bg-indigo-600">
        <div class="flex md:min-h-screen flex-col md:flex-row">
            <div class="w-full md:w-1/3 h-96 md:h-auto md:min-h-screen relative">
                <div class="absolute inset-0 bg-cover bg-center" style="background-image: url(&quot;/questergatecapital/public/img/africa-family.jpg&quot;);"></div>
            </div>
            <div class="w-full md:w-2/3 bg-white md:min-h-screen">
                <div class="flex items-center lg:items-start justify-center h-full p-12">
                    <div class="mt-6 w-full max-w-md lg:max-w-3xl">
                        <a href="/" class="logo flex justify-center mb-12">
                            <img src="/questergatecapital/public/img/qgc-logo.png" alt="Logo" class="h-12 w-auto">
                        </a>

                        <div class="flex items-center justify-between">
                            <h2 class="font-semibold text-gray-900 text-lg uppercase leading-tight border-b-2 border-gray-200 pb-4">Register</h2>
                        </div>

                        <form class="w-full register-form">
                            <div>
                                <p class="alert-success-alt p-3 rounded text-sm my-2 display-success" style="display: none;">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" style="display: inline-block">
                                        <path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z" class=""></path>
                                    </svg>
                                    <span style="vertical-align: middle;">Account created successfully. You will be redirected shortly.</span>
                                </p>
                            </div>

                            <div class="mt-8 grid grid-cols-1 lg:grid-cols-2 col-gap-8 row-gap-2">
                                <div aria-required="true" aria-invalid="false">
                                    <input id="firstname" name="firstname" type="text" placeholder="First Name" class="bg-white text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white mt-3 border-gray-400">
                                    <p class="text-red-500 text-xs italic my-2 err-txt" id="firstname-err"></p>
                                </div>

                                <div aria-required="true" aria-invalid="false">
                                    <input id="lastname" name="lastname" type="text" placeholder="Last Name" class="bg-white text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white mt-3 border-gray-400">
                                    <p class="text-red-500 text-xs italic my-2 err-txt" id="lastname-err"></p>
                                </div>

                                <div aria-required="true" aria-invalid="false">
                                    <input id="phone" name="phone" type="phone" placeholder="Phone" class="bg-white text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white mt-3 border-gray-400">
                                    <p class="text-red-500 text-xs italic my-2 err-txt" id="phone-err"></p>
                                </div>

                                <div aria-required="true" aria-invalid="false">
                                    <input id="email" name="email" type="email" placeholder="Email" class="bg-white text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white mt-3 border-gray-400">
                                    <p class="text-red-500 text-xs italic my-2 err-txt" id="email-err"></p>
                                </div>

                                <div aria-required="false" aria-invalid="false">
                                    <div class="relative mt-3">
                                        <input id="password" name="password" type="password" placeholder="Password" class="bg-white text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white border-gray-400" onkeyup="Plugin.checkPasswordStrength(this);">
                                        <div class="absolute inset-y-0 right-0 flex items-center px-2 pr-3 text-gray-700 cursor-pointer" onclick="Plugin.showOrHidePassword(this);">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye h-4 w-4">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye-off h-4 w-4 hidden">
                                                <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22"></path>
                                            </svg>
                                        </div>
                                    </div>

                                    <p class="text-red-500 text-xs italic my-2 err-txt" id="password-err"></p>
                                </div>

                                <div aria-required="true" aria-invalid="false">
                                    <div class="relative mt-3">
                                        <input id="password_confirmation" name="password_confirmation" type="password" placeholder="Confirm Password" class="bg-white text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white border-gray-400">
                                        <div class="absolute inset-y-0 right-0 flex items-center px-2 pr-3 text-gray-700 cursor-pointer" onclick="Plugin.showOrHidePassword(this);">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye h-4 w-4">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye-off h-4 w-4 hidden">
                                                <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {{-- <div aria-required="true" aria-invalid="false">
                                    <input id="referral_code" name="referral_code" type="text" placeholder="Enter referral code if any..." class="bg-white text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white mt-3 border-gray-400" value="{{$refcode}}">
                                    <p class="text-red-500 text-xs italic my-2 err-txt" id="referral-code-err"></p>
                                </div> --}}

                            </div>

                            <div class="mt-6 w-full">
                                <div>
                                    <p class="text-indigo-600 text-sm mt-3">
                                        <span class="ml-1">
                                            By clicking <span class="font-bold">Sign up</span>, you agree to the <a href="/terms" class="font-semibold hover:underline">terms & conditions</a> and <a href="/privacy" class="font-semibold hover:underline">privacy policy</a> of this website.
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div class="grid grid-cols-1 lg:grid-cols-2 col-gap-8">
                                <div>
                                    <button type="button" class="focus:outline-none focus:shadow-outline bg-indigo-500 hover:bg-indigo-600 px-4 py-3 text-white w-full md:flex-1 rounded border-b-2 border-indigo-600 font-semibold mt-4 opacity-75" onclick="Plugin.registerUser(this);">
                                        <span>Sign up</span>
                                    </button>

                                    <p class="text-indigo-600 text-sm text-center mt-3">
                                        <span>Already have an account?</span>
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
    <script src="/questergatecapital/public/js/plugin.js"></script>

</body>

</html>
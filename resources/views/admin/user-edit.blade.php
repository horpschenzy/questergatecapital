<!doctype html>
<html class="bg-gray-200"><head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Admin Active Users - QuesterGate Limited</title>
    @include('favicon')
    <link href="/questergatecapital/public/css/style.css" rel="stylesheet">
    <link href="/questergatecapital/public/css/tooltips.css" rel="stylesheet">
    <link href="/questergatecapital/public/css/scrolltop.css" rel="stylesheet">
    <style type="text/css">
    .alert-flash {
      right: 25px;
      top: 25px;
    }
    .fullname-initial{
        padding: 7px 9px; background-color: #001D3D; color: #fff; border-radius: 5em
    }
    .btn-icon:hover{
        text-decoration: underline;
    }
    a{
        cursor: pointer;
    }

    </style>

    </head>

    <body class="font-sans antialiased text-gray-900 leading-normal">
        <div class="h-screen flex">
            @include('admin.layout.sidebar')

            <div class="flex-1 min-w-0 flex flex-col bg-white">
                @include('admin.layout.topbar') 

                <main class="p-6 flex-1 bg-gray-200 overflow-y-auto relative">
                    <a id="scroll-top-btn"></a>
                    <h2 class="text-xl md:text-2xl leading-snug font-semibold tracking-tight text-gray-900">{{$user->firstname.' '.$user->lastname}} Profile</h2> 

                    <div class="py-5 border-b border-gray-300 mt-10">
                        <div class="flex flex-col xl:flex-row">
                            <div class="w-full xl:w-1/3">
                                <h3 class="text-lg leading-snug font-semibold text-gray-900">Basic Profile</h3> 
                                <p class="mt-2 text-gray-500">Manage account personal profile</p>
                            </div> 
                            <div class="w-full xl:w-2/3 pl-0 xl:pl-5 mt-4 xl:mt-0">
                                <div class="bg-white rounded-md shadow overflow-hidden p-5 sm:max-w-lg md:max-w-3xl">
                                    <form method="POST" class="basic-profile-form">
                                        <div class="basic-profile-form-response"></div>
                                        <div class="flex flex-wrap -mx-3 mb-3">
                                            <div class="w-full md:w-1/2 px-3 ">
                                                <div class="w-full">
                                                    <div aria-required="true" aria-invalid="false">
                                                        <label class="text-gray-700 block mt-2 mb-2">Firstname</label> 
                                                        <input readonly name="firstname" type="text" class="bg-white text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white mt-2 border-gray-400" value="{{$user->firstname}}"> 
                                                        <p class="text-red-500 text-xs italic my-2" style="display: none;"></p>
                                                    </div>
                                                </div>                                                 
                                            </div> 

                                            <div class="w-full md:w-1/2 px-3 ">
                                                <div class="w-full">
                                                    <div aria-required="true" aria-invalid="false">
                                                        <label class="text-gray-700 block mt-2 mb-2">Lastname</label> 
                                                        <input readonly name="lastname" type="text" class="bg-white text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white mt-2 border-gray-400" value="{{$user->lastname}}"> 
                                                        <p class="text-red-500 text-xs italic my-2" style="display: none;"></p>
                                                    </div>
                                                </div>                                                 
                                            </div>                                            
                                        </div> 

                                        <div class="flex flex-wrap -mx-3">
                                            <div class="w-full md:w-1/2 px-3">
                                                <div class="w-full">
                                                    <div aria-required="true" aria-invalid="false">
                                                        <label class="text-gray-700 block mt-2 mb-2">Email</label> 
                                                        <input  name="email" type="email" class="bg-white text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white mt-2 border-gray-400" value="{{$user->email}}"> 
                                                        <p class="text-red-500 text-xs italic my-2" style="display: none;"></p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="w-full md:w-1/2 px-3">
                                                <div aria-required="false" aria-invalid="false">
                                                    <label class="text-gray-700 block mt-2 mb-2">Phone</label> 
                                                    <input name="phone" type="number" class="bg-white text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white mt-2 border-gray-400" value="{{$user->phone}}"> 
                                                    <p class="text-red-500 text-xs italic my-2" style="display: none;"></p>
                                                </div>
                                            </div> 

                                            <div class="w-full md:w-1/2 px-3 mt-3">
                                                <div>
                                                    <label for="gender" class="text-gray-700 block mt-2 mb-2">Gender</label> 
                                                    <div class="relative">
                                                        <select name="gender" class="block appearance-none w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white bg-white mt-2 border-gray-400">
                                                            @if($user->gender == 'Male')
                                                                <option value="{{$user->gender}}" selected>{{$user->gender}}</option>
                                                                <option value="Female">Female</option>
                                                                <option value=""></option>
                                                            @elseif($user->gender == 'Female')
                                                                <option value="{{$user->gender}}" selected>{{$user->gender}}</option>
                                                                <option value="Male">Male</option>
                                                                <option value=""></option>
                                                            @else
                                                                <option value=""></option>
                                                                <option value="Male">Male</option>
                                                                <option value="Female">Female</option>
                                                            @endif
                                                        </select>
                                                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current h-4 w-4"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg></div>
                                                    </div> 
                                                    <p class="text-red-500 text-xs italic my-2" style="display: none;"></p>
                                                </div>
                                            </div>

                                            <div class="w-full md:w-1/2 px-3 mt-3">
                                                    <div aria-required="true" aria-invalid="false">
                                                        <label for="state" class="text-gray-700 block mt-2 mb-2">State</label> 
                                                        <div class="relative">
                                                            <input name="state" type="text" class="bg-white text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white border-gray-400" value="{{$user->state}}"> 
                                                        </div> 
                                                        <p class="text-red-500 text-xs italic my-2" style="display: none;"></p>
                                                    </div>
                                            </div>

                                            <div class="w-full md:w-1/2 px-3 mt-3">
                                                <div aria-required="true" aria-invalid="false">
                                                    <label for="address" class="text-gray-700 block mt-2 mb-2">City</label> 
                                                    <input name="city" type="text" class="bg-white text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white mt-2 border-gray-400" value="{{$user->city}}"> 
                                                    <p class="text-red-500 text-xs italic my-2" style="display: none;"></p>
                                                </div>
                                            </div> 

                                            <div class="w-full md:w-1/2 px-3 mt-3">
                                                <div aria-required="true" aria-invalid="false">
                                                    <label class="text-gray-700 block mt-2 mb-2">Adress</label> 
                                                    <input name="address" type="text" class="bg-white text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white mt-2 border-gray-400" value="{{$user->address}}"> 
                                                    <p class="text-red-500 text-xs italic my-2" style="display: none;"></p>
                                                </div>
                                            </div>
                                        </div> 
                                        @if(Auth::user()->usertype == 'superadmin')
                                        <div class="w-full sm:w-56">
                                            <button type="button" class="focus:outline-none focus:shadow-outline w-full md:flex-1 bg-lime-100 hover:bg-lime-100 px-4 py-3 text-white rounded border-b-2  font-semibold mt-4" onclick="adminUpdateProfile(this, {{$user->id}});"><span>Update Profile</span></button>
                                        </div>
                                        @endif
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div> 

                    <div class="py-5 border-b border-gray-300 mt-10">
                        <div class="flex flex-col xl:flex-row">
                            <div class="w-full xl:w-1/3">
                                <h3 class="text-lg leading-snug font-semibold text-gray-900">Next of Kin Information</h3> 
                                <p class="mt-2 text-gray-500">Manage next of kin's information</p>
                            </div> 

                            <div class="w-full xl:w-2/3 pl-0 xl:pl-5 mt-4 xl:mt-0">
                                <div class="bg-white rounded-md shadow overflow-hidden p-5 sm:max-w-lg md:max-w-3xl">
                                    <form  method="POST" class="contact-form">
                                        <div class="contact-form-response"></div>
                                        <div class="flex flex-wrap -mx-3"> 

                                            <div class="w-full md:w-1/2 px-3"><div aria-required="true" aria-invalid="false"><label class="text-gray-700 block mt-2">Next of kin</label> <input name="nok_name" type="text" class="bg-white text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white mt-2 border-gray-400" value="{{($nok) ? $nok['nok_name'] : ''}}"> <p class="text-red-500 text-xs italic my-2" style="display: none;"></p> <!----></div></div>

                                            <div class="w-full md:w-1/2 px-3"><div aria-required="true" aria-invalid="false"><label class="text-gray-700 block mt-2">Next of kin's Phone</label> <input name="nok_phone" type="number" class="bg-white text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white mt-2 border-gray-400" value="{{($nok) ? $nok['nok_phone'] : ''}}"> <p class="text-red-500 text-xs italic my-2" style="display: none;"></p> <!----></div></div> 

                                            <div class="w-full md:w-1/2 px-3"><div aria-required="true" aria-invalid="false"><label for="next_of_kin_relationship" class="text-gray-700 block mt-2">Next of kin's Relationship</label> <input name="nok_relationship" type="text" class="bg-white text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white mt-2 border-gray-400" value="{{($nok) ? $nok['nok_relationship'] : ''}}"> <p class="text-red-500 text-xs italic my-2" style="display: none;"></p> <!----></div></div> 

                                            <div class="w-full md:w-1/2 px-3"><div aria-required="true" aria-invalid="false"><label for="next_of_kin_state" class="text-gray-700 block mt-2">Next of kin's State</label> <div class="relative"><input name="nok_state" type="text" class="bg-white text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white mt-2 border-gray-400" value="{{($nok) ? $nok['nok_state'] : ''}}"> <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div></div> <p class="text-red-500 text-xs italic my-2" style="display: none;"></p> <!----></div></div> 

                                            <div class="w-full md:w-1/2 px-3"><div aria-required="true" aria-invalid="false"><label class="text-gray-700 block mt-2">Next of kin's City</label> <div class="relative"><input name="nok_city" type="text" placeholder="123 Street name" class="bg-white text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white mt-2 border-gray-400" value="{{($nok) ? $nok['nok_city'] : ''}}"> <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div></div> <p class="text-red-500 text-xs italic my-2" style="display: none;"></p> <!----></div></div> 

                                            <div class="w-full md:w-1/2 px-3"><div aria-required="true" aria-invalid="false"><label class="text-gray-700 block mt-2">Next of kin's Address</label> <input name="nok_address" type="text" placeholder="123 Street name" class="bg-white text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white mt-2 border-gray-400" value="{{($nok) ? $nok['nok_address'] : ''}}"> <p class="text-red-500 text-xs italic my-2" style="display: none;"></p> <!----></div></div></div> 
                                            @if(Auth::user()->usertype == 'superadmin')
                                            <div class="w-full sm:w-56"><button type="button" class="focus:outline-none focus:shadow-outline w-full md:flex-1 bg-lime-100 hover:bg-lime-100 px-4 py-3 text-white rounded border-b-2  font-semibold mt-4" onclick="adminUpdateNOK(this, {{ $user->id }});"><span>Update Next Of Kin</span></button></div>
                                            @endif
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>  

                    <div class="py-5 border-b border-gray-300 mt-10">
                        <div class="flex flex-col xl:flex-row">
                            <div class="w-full xl:w-1/3">
                                <h3 class="text-lg leading-snug font-semibold text-gray-900">Security</h3> 
                                <p class="mt-2 text-gray-500">Manage account password or set a new password</p>
                            </div> 
                            <div class="w-full xl:w-2/3 pl-0 xl:pl-5 mt-4 xl:mt-0">
                                <div class="bg-white rounded-md shadow overflow-hidden p-5 sm:max-w-lg md:max-w-3xl">
                                    <form method="POST" class="security-form">
                                        <div class="security-form-response"></div>
                                        <div class="flex flex-wrap -mx-3">
                                            <div class="w-full md:w-1/2 px-3">
                                                <div aria-required="true" aria-invalid="false">
                                                    <label for="old_password" class="text-gray-700 block mt-2">Current Password</label> 
                                                    <input name="old_password" type="password" class="bg-white text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white mt-2 border-gray-400"> 
                                                    <p class="text-red-500 text-xs italic my-2" style="display: none;"></p> <!---->
                                                </div>
                                            </div> 

                                            <div class="w-full md:w-1/2 px-3">
                                                <div aria-required="false" aria-invalid="false">
                                                    <label for="password" class="text-gray-700 block mt-2">New Password</label> 
                                                    <input name="password" type="password" class="bg-white text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white mt-2 border-gray-400"> 
                                                    <p class="text-red-500 text-xs italic my-2" style="display: none;"></p> <!---->
                                                </div>
                                            </div> 

                                            <div class="w-full md:w-1/2 px-3">
                                                <div aria-required="true" aria-invalid="false">
                                                    <label for="password_confirmation" class="text-gray-700 block mt-2">Confirm New Password</label> 
                                                    <input name="password_confirmation" type="password" class="bg-white text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white mt-2 border-gray-400"> <p class="text-red-500 text-xs italic my-2" style="display: none;"></p> <!---->
                                                </div>
                                            </div>
                                        </div> 
                                        @if(Auth::user()->usertype == 'superadmin')
                                        <div class="w-full sm:w-56">
                                            <button type="button" class="focus:outline-none focus:shadow-outline w-full md:flex-1 bg-lime-100 hover:bg-lime-100 px-4 py-3 text-white rounded border-b-2  font-semibold mt-4" onclick="adminChangePassword(this, {{ $user->id }});"><span>Update Password</span>
                                            </button>
                                        </div>
                                        @endif
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="py-5 border-b border-gray-300 mt-10">
                        <div class="flex flex-col xl:flex-row">
                            <div class="w-full xl:w-1/3">
                                <h3 class="text-lg leading-snug font-semibold text-gray-900">Bank Account</h3> 
                                <p class="mt-2 text-gray-500">Manage bank account details</p>
                            </div> 

                            <div class="w-full xl:w-2/3 pl-0 xl:pl-5 mt-4 xl:mt-0">
                                <div class="bg-white rounded-md shadow overflow-hidden p-5 sm:max-w-lg md:max-w-3xl">
                                    <form method="POST" class="bank-account-form">
                                        <div class="bank-account-form-response"></div>
                                        <div class="flex flex-wrap -mx-3">
                                            <div class="w-full md:w-1/2 px-3">
                                                <div class="relative">
                                                    <label class="text-gray-700 block mt-2">Bank</label>
                                                    <select name="bank" class="block appearance-none w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white bg-white mt-2 border-gray-400">
                                                        @if(($bank))
                                                        <option value="{{$bank['bank']}}">{{$bank['bank']}}</option>
                                                        @endif

                                                        <option value="Access Bank Plc">Access Bank Plc</option><option value="Citibank Nigeria Limited">Citibank Nigeria Limited</option><option value="Ecobank Nigeria Plc">Ecobank Nigeria Plc</option><option value="Fidelity Bank Plc">Fidelity Bank Plc</option><option value="First Bank Nigeria Limited">First Bank Nigeria Limited</option><option value="First City Monument Bank Plc">First City Monument Bank Plc</option><option value="Globus Bank Limited">Globus Bank Limited</option><option value="Guaranty Trust Bank Plc">Guaranty Trust Bank Plc</option><option value="Heritage Banking Company Ltd">Heritage Banking Company Ltd</option><option value="Key Stone Bank">Key Stone Bank</option><option value="Polaris Bank">Polaris Bank</option><option value="Providus Bank">Providus Bank</option><option value="Stanbic IBTC Bank Ltd">Stanbic IBTC Bank Ltd</option><option value="Standard Chartered Bank Nigeria Ltd">Standard Chartered Bank Nigeria Ltd</option><option value="Sterling Bank Plc">Sterlink Bank Plc</option><option value="SunTrust Bank Nigeria Limited">SunTrust Bank Nigeria Limited</option><option value="Titan Trust Bank Ltd">Titan Trust Bank Ltd</option><option value="Union Bank of Nigeria Plc">Union Bank of Nigeria Plc</option><option value="United Bank For Africa Plc">United Bank For Africa Plc</option><option value="Unity Bank Plc">Unity Bank Plc</option> <option value="Wema Bank Plc">Wema Bank Plc</option><option value="Zenith Bank Plc">Zenith Bank Plc</option></select><div class="pointer-events-none absolute right-0 flex items-center px-2 text-gray-700" style="top:0; bottom: -30px"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current h-4 w-4"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg></div>
                                                    
                                                </div>
                                            </div> 

                                            <div class="w-full md:w-1/2 px-3">
                                                <div aria-required="false" aria-invalid="false">
                                                    <label class="text-gray-700 block mt-2">Account Name</label> 
                                                    <input name="account_name" type="text" class="bg-white text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white mt-2 border-gray-400" value="{{($bank) ? $bank['account_name'] : ''}}"> 
                                                    <p class="text-red-500 text-xs italic my-2" style="display: none;"></p> <!---->
                                                </div>
                                            </div> 

                                            <div class="w-full md:w-1/2 px-3">
                                                <div aria-required="true" aria-invalid="false">
                                                    <label class="text-gray-700 block mt-2">Account Number</label> 
                                                    <input name="account_number" type="text" class="bg-white text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white mt-2 border-gray-400" value="{{($bank) ? $bank['account_number'] : ''}}"> <p class="text-red-500 text-xs italic my-2" style="display: none;"></p> <!---->
                                                </div>
                                            </div>
                                        </div> 
                                        @if(Auth::user()->usertype == 'superadmin')
                                        <div class="w-full sm:w-56">
                                            <button type="button" class="focus:outline-none focus:shadow-outline w-full md:flex-1 bg-lime-100 hover:bg-lime-100 px-4 py-3 text-white rounded border-b-2  font-semibold mt-4" onclick="adminUpdateBankAccount(this, {{ $user->id }});"><span>Update Bank Account</span>
                                            </button>
                                        </div>
                                        @endif
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="py-5 border-gray-300 mt-10">
                        <div class="flex flex-col xl:flex-row">
                            <div class="w-full xl:w-1/3">
                                <h3 class="text-lg leading-snug font-semibold text-gray-900">QG Wallet</h3> 
                                <p class="mt-2 text-gray-500">Manage QG Wallet</p>
                            </div> 

                            <div class="w-full xl:w-2/3 pl-0 xl:pl-5 mt-4 xl:mt-0">
                                <div class="bg-white rounded-md shadow overflow-hidden p-5 sm:max-w-lg md:max-w-3xl">
                                    <form method="POST" class="qg-wallet-form">
                                        <div class="qg-wallet-form-response"></div>
                                        <div class="flex flex-wrap -mx-3">
                                            <div class="w-full md:w-1/2 px-3">
                                                <div class="relative">
                                                    <label class="text-gray-700 block mt-2">QG Wallet ({{$tqgwallet}})</label>
                                                    <input name="amount" type="number" class="bg-white text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white mt-2 border-gray-400"> 
                                                    <p class="text-red-500 text-xs italic my-2" style="display: none;"></p>
                                                </div>
                                            </div> 
                                        </div> 
                                        @if(Auth::user()->usertype == 'superadmin')
                                        <div class="w-full sm:w-56">
                                            <button type="button" class="focus:outline-none focus:shadow-outline w-full md:flex-1 bg-lime-100 hover:bg-lime-100 px-4 py-3 text-white rounded border-b-2  font-semibold mt-4" onclick="adminUpdateQgWallet(this, {{ $user->id }});"><span>Update QG Wallet</span>
                                            </button>
                                        </div>
                                        @endif
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    @include('admin.layout.scroll')

                    @include('admin.layout.footer')
                </main>
            </div>
        </div>
    <script type="text/javascript" src="/questergatecapital/public/js/jquery.js"></script>
    <script type="text/javascript" src="/questergatecapital/public/js/moment.js"></script>
    <script type="text/javascript" src="/questergatecapital/public/js/script.js"></script>
    <script type="text/javascript"> window.$crisp=[];window.CRISP_WEBSITE_ID="59767aec-ab5f-49a2-9233-f872ade8029a";(function(){ d=document;s=d.createElement("script"); s.src="https://client.crisp.chat/l.js"; s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})(); </script>
    <input type="hidden" id="plan-hidden-id">
</body>
</html>
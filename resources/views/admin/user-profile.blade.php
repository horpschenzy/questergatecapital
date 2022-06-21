<!doctype html>
<html class="bg-gray-200"><head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Admin User Profile - QuesterGate Limited</title>
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
    </style>

    <script type="text/javascript" src="/questergatecapital/public/js/jquery.js"></script>
    <script type="text/javascript" src="/questergatecapital/public/js/moment.js"></script>
    <script type="text/javascript" src="/questergatecapital/public/js/script.js"></script>
    <script src="https://kit.fontawesome.com/f07be47b4c.js" crossorigin="anonymous"></script>
    <script type="text/javascript"> window.$crisp=[];window.CRISP_WEBSITE_ID="59767aec-ab5f-49a2-9233-f872ade8029a";(function(){ d=document;s=d.createElement("script"); s.src="https://client.crisp.chat/l.js"; s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})(); </script>
    </head>

    <body class="font-sans antialiased text-gray-900 leading-normal">
        <div class="h-screen flex">
            @include('admin.layout.sidebar')

            <div class="flex-1 min-w-0 flex flex-col bg-white">
                @include('admin.layout.topbar') 

                <main class="p-6 flex-1 bg-gray-200 overflow-y-auto relative">
                    <a id="scroll-top-btn"></a>

                    <h2 class="text-xl md:text-2xl leading-snug font-semibold tracking-tight text-gray-900">User Profile</h2>
                    <div class="bg-white rounded shadow overflow-x-auto mt-6">
                        <table class="w-full whitespace-no-wrap withdrawal-list">
                      <tr class="text-left font-semibold">
                          <th class="px-6 pt-6 pb-4 ">ID</th> 
                          <th class="px-6 pt-6 pb-4">Fullname</th> 
                          <th class="px-6 pt-6 pb-4">Email</th>
                          <th class="px-6 pt-6 pb-4">Phone</th>
                          <th class="px-6 pt-6 pb-4">Gender</th>
                          <th class="px-6 pt-6 pb-4">State</th>
                          <th class="px-6 pt-6 pb-4">City</th>
                          <th class="px-6 pt-6 pb-4">Address</th>
                          <th class="px-6 pt-6 pb-4">Date</th>
                          @if(Auth::user()->usertype == 'superadmin')
                            <th class="px-6 pt-6 pb-4">Action</th>
                          @endif
                      </tr>

                      <tr class="hover:bg-gray-100 focus-within:bg-gray-100 tr-data">
                        <td class="border-t">
                          <span tabindex="-1" class="px-6 py-4 flex focus:outline-none">{{$user->id}}</span>
                        </td>
                        <td class="border-t">
                          <span tabindex="-1" class="px-6 py-4 flex focus:outline-none">{{$user->firstname.' '.$user->lastname}}</span>
                        </td><td class="border-t">
                          <span tabindex="-1" class="px-6 py-4 flex focus:outline-none">{{$user->email}}</span>
                        </td><td class="border-t">
                          <span tabindex="-1" class="px-6 py-4 flex focus:outline-none">{{$user->phone}}</span>
                        </td><td class="border-t">
                          <span tabindex="-1" class="px-6 py-4 flex focus:outline-none">{{$user->gender}}</span>
                        </td><td class="border-t">
                          <span tabindex="-1" class="px-6 py-4 flex focus:outline-none">{{$user->state}}</span>
                        </td><td class="border-t">
                          <span tabindex="-1" class="px-6 py-4 flex focus:outline-none">{{$user->city}}</span>
                        </td><td class="border-t">
                          <span tabindex="-1" class="px-6 py-4 flex focus:outline-none">{{$user->address}}</span>
                        </td><td class="border-t">
                          <span tabindex="-1" class="px-6 py-4 flex focus:outline-none">{{$user->created_at}}</span>
                        </td>
                        @if(Auth::user()->usertype == 'superadmin')
                        <td class="border-t">
                            <a onclick="changeUserPrompt('edit-user-modal{{$user->id}}');" data-id="{{$user->id}}"><span tabindex="-1" class="items-center">Edit</span></a>
                        </td>
                        @endif
                        
                        <div class="edit-user-modal{{$user->id}}" style="display: none">
                            <div class="fixed inset-0 z-40 flex items-center justify-center overflow-y-auto max-h-full py-8">
                                <div>
                                    <div class="absolute inset-0 bg-black opacity-25"></div>
                                </div> 
                
                                <div class="relative max-h-full overflow-y-auto w-full md:w-128">
                                    <div class="w-full md:w-128 bg-white rounded-lg shadow-2xl px-6 py-6">   
                                        <form method="POST" class="basic-profile-form">
                                            <h4 class="font-semibold text-gray-800 text-lg leading-tight border-b-2 border-gray-200 pb-4 mt-4">
                                                <span>Edit User Details</span>
                                                <button type="button" class="block text-gray-600 hover:text-gray-800 float-right" onclick="closeModal('.edit-user-modal{{$user->id}}');"><svg viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6"><path d="M17.293 18.707a1 1 0 001.414-1.414L13.414 12l5.293-5.293a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293z"></path></svg></button>
                                            </h4>
            
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
                      </tr>
                    </table>
                    </div>

                    <div class="md:flex mt-6" >
                        <div class="w-full md:w-5/6 ">                            
                            <span class="text-xl md:text-2xl leading-snug font-semibold tracking-tight text-gray-900">QG Wallet Balance: <strong style="padding-left: 30px">{{ $tqgwallet }}</strong></span>
                        </div> 

                        

                        
                    </div>
                    <h2 class="mt-5 text-xl md:text-2xl leading-snug font-semibold tracking-tight text-gray-900">Bank Account</h2>
                    <div class="bg-white rounded shadow overflow-x-auto mt-6">
                      <table class="w-full whitespace-no-wrap withdrawal-list">
                      <tr class="text-left font-semibold">
                          <th class="px-6 pt-6 pb-4 ">USER ID</th> 
                          <th class="px-6 pt-6 pb-4 ">Account Number</th> 
                          <th class="px-6 pt-6 pb-4">Account Name</th> 
                          <th class="px-6 pt-6 pb-4">Bank</th>
                          @if(Auth::user()->usertype == 'superadmin')
                            <th class="px-6 pt-6 pb-4">Action</th>
                          @endif
                      </tr>

                      @foreach($ba as $b)
                      <tr class="hover:bg-gray-100 focus-within:bg-gray-100 tr-data">
                        <td class="border-t">
                          <span tabindex="-1" class="px-6 py-4 flex  focus:outline-none">{{$b->user_id}}</span>
                        </td>
                        <td class="border-t">
                          <span tabindex="-1" class="px-6 py-4 flex  focus:outline-none">{{$b->account_number}}</span>
                        </td>
                        <td class="border-t">
                          <span tabindex="-1" class="px-6 py-4 flex  focus:outline-none">{{$b->account_name}}</span>
                        </td>
                        <td class="border-t">
                          <span tabindex="-1" class="px-6 py-4 flex focus:outline-none">{{$b->bank}}</span>
                        </td>
                        @if(Auth::user()->usertype == 'superadmin')
                        <td class="border-t">
                            <a onclick="changeBankPrompt('edit-user-bank-modal{{$b->id}}');" data-id="{{$b->id}}"><span tabindex="-1" class="items-center">Edit</span></a>
                        </td>
                        @endif
                      </tr>
                        
                        <div class="edit-user-bank-modal{{$b->id}}" style="display: none">
                            <div class="fixed inset-0 z-40 flex items-center justify-center overflow-y-auto max-h-full py-8">
                                <div>
                                    <div class="absolute inset-0 bg-black opacity-25"></div>
                                </div> 
                
                                <div class="relative max-h-full overflow-y-auto w-full md:w-128">
                                    <div class="w-full md:w-128 bg-white rounded-lg shadow-2xl px-6 py-6">   
                                            <div class="adminedit-response{{$b->id}}">
                
                                            </div>
                                             
                                            <form method="POST" class="bank-account-form">
                                                <h4 class="font-semibold text-gray-800 text-lg leading-tight border-b-2 border-gray-200 pb-4 mt-4">
                                                    <span>Edit User Bank Details</span>
                                                    <button type="button" class="block text-gray-600 hover:text-gray-800 float-right" onclick="closeModal('.edit-user-bank-modal{{$b->id}}');"><svg viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6"><path d="M17.293 18.707a1 1 0 001.414-1.414L13.414 12l5.293-5.293a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293z"></path></svg></button>
                                                </h4>
                
                                                <div class="bank-account-form-response"></div>
                                                <div class="flex flex-wrap">
                                                    <div class="w-full px-3">
                                                        <div class="relative">
                                                            <label class="text-gray-700 block mt-2">Bank</label>
                                                            <select name="bank" class="block appearance-none w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white bg-white mt-2 border-gray-400">
                                                                @if($b->bank)
                                                                <option value="{{$b->bank}}">{{$b->bank}}</option>
                                                                @endif
        
                                                                <option value="Access Bank Plc">Access Bank Plc</option><option value="Citibank Nigeria Limited">Citibank Nigeria Limited</option><option value="Ecobank Nigeria Plc">Ecobank Nigeria Plc</option><option value="Fidelity Bank Plc">Fidelity Bank Plc</option><option value="First Bank Nigeria Limited">First Bank Nigeria Limited</option><option value="First City Monument Bank Plc">First City Monument Bank Plc</option><option value="Globus Bank Limited">Globus Bank Limited</option><option value="Guaranty Trust Bank Plc">Guaranty Trust Bank Plc</option><option value="Heritage Banking Company Ltd">Heritage Banking Company Ltd</option><option value="Key Stone Bank">Key Stone Bank</option><option value="Polaris Bank">Polaris Bank</option><option value="Providus Bank">Providus Bank</option><option value="Stanbic IBTC Bank Ltd">Stanbic IBTC Bank Ltd</option><option value="Standard Chartered Bank Nigeria Ltd">Standard Chartered Bank Nigeria Ltd</option><option value="Sterling Bank Plc">Sterlink Bank Plc</option><option value="SunTrust Bank Nigeria Limited">SunTrust Bank Nigeria Limited</option><option value="Titan Trust Bank Ltd">Titan Trust Bank Ltd</option><option value="Union Bank of Nigeria Plc">Union Bank of Nigeria Plc</option><option value="United Bank For Africa Plc">United Bank For Africa Plc</option><option value="Unity Bank Plc">Unity Bank Plc</option> <option value="Wema Bank Plc">Wema Bank Plc</option><option value="Zenith Bank Plc">Zenith Bank Plc</option></select><div class="pointer-events-none absolute right-0 flex items-center px-2 text-gray-700" style="top:0; bottom: -30px"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current h-4 w-4"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg></div>
                                                            
                                                        </div>
                                                    </div> 
        
                                                    <div class="w-full px-3">
                                                        <div aria-required="false" aria-invalid="false">
                                                            <label class="text-gray-700 block mt-2">Account Name</label> 
                                                            <input name="account_name" type="text" class="bg-white text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white mt-2 border-gray-400" value="{{$b->account_name}}"> 
                                                            <p class="text-red-500 text-xs italic my-2" style="display: none;"></p> <!---->
                                                        </div>
                                                    </div> 
        
                                                    <div class="w-full px-3">
                                                        <div aria-required="true" aria-invalid="false">
                                                            <label class="text-gray-700 block mt-2">Account Number</label> 
                                                            <input name="account_number" type="text" class="bg-white text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white mt-2 border-gray-400" value="{{$b->account_number}}"> <p class="text-red-500 text-xs italic my-2" style="display: none;"></p> <!---->
                                                        </div>
                                                    </div>
                                                </div> 
                                                @if(Auth::user()->usertype == 'superadmin')
                                                <div class="w-full sm:w-56">
                                                    <button type="button" class="focus:outline-none focus:shadow-outline w-full md:flex-1 bg-lime-100 hover:bg-lime-100 px-4 py-3 text-white rounded border-b-2  font-semibold mt-4" onclick="adminUpdateBankAccount(this, {{ $user->id }},'edit-user-bank-modal{{$b->id}}');"><span>Update Bank Account</span>
                                                    </button>
                                                </div>
                                                @endif
                                            </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                      @endforeach
                    </table>
                    </div>


                    <h2 class="mt-5 text-xl md:text-2xl leading-snug font-semibold tracking-tight text-gray-900">Withdrawal</h2>
                    <div class="bg-white rounded shadow overflow-x-auto mt-6">
                        <table class="w-full whitespace-no-wrap withdrawal-list">
                      <tr class="text-left font-semibold">
                          <th class="px-6 pt-6 pb-4 ">Reference</th> 
                          <th class="px-6 pt-6 pb-4 ">Amount</th> 
                          <th class="px-6 pt-6 pb-4 ">Status</th> 
                          <th class="px-6 pt-6 pb-4 ">Date</th> 
                          @if(Auth::user()->usertype == 'superadmin')
                            <th class="px-6 pt-6 pb-4">Action</th>
                          @endif
                      </tr>

                      @foreach($withdrawal as $w)
                      <tr class="hover:bg-gray-100 focus-within:bg-gray-100 tr-data">
                        <td class="border-t">
                          <span tabindex="-1" class="px-6 py-4 flex focus:outline-none">{{$w->reference}}</span>
                        </td>
                        <td class="border-t">
                          <span tabindex="-1" class="px-6 py-4 flex focus:outline-none">{{$w->amount}}</span>
                        </td>
                        <td class="border-t">
                            @if($w->status == '1')
                                <div class="text-xs text-center p-1 font-bold bg-red-200 text-yellow-800 rounded-full mx-auto w-24">
                                    Pending
                                </div>
                            @elseif($w->status == '2')
                            <div class="text-xs text-center p-1 font-bold bg-yellow-200 text-green-800 rounded-full mx-auto w-24">
                                Processing
                            </div>
                            @elseif($w->status == '3')
                                <div class="text-xs text-center p-1 font-bold bg-green-200 text-green-800 rounded-full mx-auto w-24">
                                    Approved
                                </div>
                            @elseif($w->status == '4')
                                <div class="text-xs text-center p-1 font-bold bg-red-200 text-red-800 rounded-full mx-auto w-24">
                                    Declined
                                </div>
                            @endif
                        </td>
                        <td class="border-t">
                          <span tabindex="-1" class="px-6 py-4 flex focus:outline-none">{{$w->created_at}}</span>
                        </td>
                        @if(Auth::user()->usertype == 'superadmin')
                        <td class="border-t">
                            <a onclick="changeWithdrawalStatusPrompt(this);" data-id="{{$w->id}}" data-value="{{$w->status}}"><span tabindex="-1" class="items-center">Change Status</span></a>
                        </td>
                        @endif
                      </tr>
                      @endforeach
                    </table>
                    </div>


                    <h2 class="mt-5 text-xl md:text-2xl leading-snug font-semibold tracking-tight text-gray-900">Deposit</h2>
                    <div class="bg-white rounded shadow overflow-x-auto mt-6">
                      <table class="w-full whitespace-no-wrap withdrawal-list">
                        <tr class="text-left font-semibold">
                            <th class="px-6 pt-6 pb-4 ">Reference</th> 
                            <th class="px-6 pt-6 pb-4 ">Amount</th> 
                            <th class="px-6 pt-6 pb-4 ">Status</th> 
                            <th class="px-6 pt-6 pb-4 ">Date</th> 
                            @if(Auth::user()->usertype == 'superadmin')
                                <th class="px-6 pt-6 pb-4">Action</th>
                            @endif
                        </tr>

                        @foreach($deposit as $d)
                        <tr class="hover:bg-gray-100 focus-within:bg-gray-100 tr-data">
                          <td class="border-t">
                            <span tabindex="-1" class="px-6 py-4 flex focus:outline-none">{{$d->reference}}</span>
                          </td>
                          <td class="border-t">
                            <span tabindex="-1" class="px-6 py-4 flex focus:outline-none">{{$d->amount}}</span>
                          </td>
                          <td class="border-t">
                            @if($d->status == '1')
                                <div class="text-xs text-center p-1 font-bold bg-red-200 text-yellow-800 rounded-full mx-auto w-24">
                                    Pending
                                </div>
                            @elseif($d->status == '2')
                            <div class="text-xs text-center p-1 font-bold bg-yellow-200 text-green-800 rounded-full mx-auto w-24">
                                Processing
                            </div>
                            @elseif($d->status == '3')
                                <div class="text-xs text-center p-1 font-bold bg-green-200 text-green-800 rounded-full mx-auto w-24">
                                    Approved
                                </div>
                            @elseif($d->status == '4')
                                <div class="text-xs text-center p-1 font-bold bg-red-200 text-red-800 rounded-full mx-auto w-24">
                                    Declined
                                </div>
                            @endif
                          </td>
                          <td class="border-t">
                            <span tabindex="-1" class="px-6 py-4 flex focus:outline-none">{{$d->created_at}}</span>
                          </td>
                          <td class="border-t">
                            <a onclick="changeStatusPrompt(this);" data-id="{{$d->id}}" data-value="{{$d->status}}"><span tabindex="-1" class="items-center">Change Status</span></a>
                          </td>
                        </tr>
                        @endforeach
                      </table>
                    </div>


                    <div class="md:flex mt-6" >
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
                                    <a href="/admin/plan-detail/{{$user->id}}/{{$p['id']}}" class="view-more text-blue-600">View</a>
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
                                    <a href="/admin/plan-detail/{{$user->id}}/{{$p->id}}" class="view-more text-blue-600">View</a>
                                </td>
                            </tr> 
                            @endforeach
                        </table>
                    </div> 
                        
                    @include('admin.layout.scroll')

                    @include('admin.layout.footer')
                </main>
            </div>
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
                                          <input type="text" name="user_id" class="px-6 py-3 rounded text-gray-900 border bg-white mt-2 border-gray-400" style="width: 100%; font-weight: bold" value="{{$user->id}}" hidden> 
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
                                              <input type="text" name="user_id" class="px-6 py-3 rounded text-gray-900 border bg-white mt-2 border-gray-400" style="width: 100%; font-weight: bold" value="{{$user->id}}" hidden> 
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
      
        <div id="change-deposit-status" class="change-deposit-status" style="display: none">
            <div class="fixed inset-0 z-40 flex items-center justify-center overflow-y-auto max-h-full py-8">
                <div>
                    <div class="absolute inset-0 bg-black opacity-25"></div>
                </div> 
                <div class="relative max-h-full overflow-y-auto w-full md:w-128">
                    <div class="w-full md:w-128 bg-white rounded-lg shadow-2xl px-6 py-6">   
                        <div class="adminadd-response">

                        </div>
                        
                        <form method="POST" class="change-deposit-status-form">
                            <h4 class="font-semibold text-gray-800 text-lg leading-tight border-b-2 border-gray-200 pb-4 mt-4">
                                <span>Change Deposit Status</span>
                                <button type="button" class="block text-gray-600 hover:text-gray-800 float-right" onclick="closeModal('.change-deposit-status');"><svg viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6"><path d="M17.293 18.707a1 1 0 001.414-1.414L13.414 12l5.293-5.293a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293z"></path></svg></button>
                            </h4>

                            <div class="flex flex-wrap -mx-3">
                                <div class="w-full md:w-full px-3">
                                    <div aria-required="true" aria-invalid="true">
                                        <label class="text-gray-700 block mt-2"><strong>Status</strong> <small></small></label> 
                                        <select name="status" id="status" class="bg-white text w-full focus:outline-none px-3 py-2 rounded text-gray-900 border focus:bg-white mt-2 border-gray-400" required>
                                            <option value="">Select Status</option>
                                            <option value="1">Pending</option>
                                            <option value="2">Processing</option>
                                            <option value="3">Completed</option>
                                            <option value="4">Declined</option>
                                        </select>
                                    </div>
                                </div> 
                            </div> 
                            <div class="w-full">
                                <button type="button" class="focus:outline-none focus:shadow-outline w-full md:flex-1 bg-lime-100 hover:bg-lime-100 px-4 py-3 text-white rounded border-b-2 border-lime-100 font-semibold mt-4" onclick="changeDepositStatus(this);">
                                    <span>Submit</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- end -->
        
        <!-- change Withdrawal status -->
        <div id="change-withdrawal-status" class="change-withdrawal-status" style="display: none">
            <div class="fixed inset-0 z-40 flex items-center justify-center overflow-y-auto max-h-full py-8">
                <div>
                    <div class="absolute inset-0 bg-black opacity-25"></div>
                </div> 
                <div class="relative max-h-full overflow-y-auto w-full md:w-128">
                    <div class="w-full md:w-128 bg-white rounded-lg shadow-2xl px-6 py-6">   
                        <div class="adminadd-response">

                        </div>
                        
                        <form method="POST" class="change-withdrawal-status-form">
                            <h4 class="font-semibold text-gray-800 text-lg leading-tight border-b-2 border-gray-200 pb-4 mt-4">
                                <span>Change Withdrawal Status</span>
                                <button type="button" class="block text-gray-600 hover:text-gray-800 float-right" onclick="closeModal('.change-withdrawal-status');"><svg viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6"><path d="M17.293 18.707a1 1 0 001.414-1.414L13.414 12l5.293-5.293a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293z"></path></svg></button>
                            </h4>

                            <div class="flex flex-wrap -mx-3">
                                <div class="w-full md:w-full px-3">
                                    <div aria-required="true" aria-invalid="true">
                                        <label class="text-gray-700 block mt-2"><strong>Status</strong> <small></small></label> 
                                        <select name="status" id="withdrawalstatus" class="bg-white text w-full focus:outline-none px-3 py-2 rounded text-gray-900 border focus:bg-white mt-2 border-gray-400" required>
                                            <option value="">Select Status</option>
                                            <option value="1">Pending</option>
                                            <option value="2">Processing</option>
                                            <option value="3">Completed</option>
                                            <option value="4">Declined</option>
                                        </select>
                                    </div>
                                </div> 
                            </div> 
                            <div class="w-full">
                                <button type="button" class="focus:outline-none focus:shadow-outline w-full md:flex-1 bg-lime-100 hover:bg-lime-100 px-4 py-3 text-white rounded border-b-2 border-lime-100 font-semibold mt-4" onclick="changeWithdrawalStatus(this);">
                                    <span>Submit</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- end -->
        
        <input type="hidden" id="plan-hidden-id">
        <input type="hidden" id="plan-hidden-value">
    </body>
</html>
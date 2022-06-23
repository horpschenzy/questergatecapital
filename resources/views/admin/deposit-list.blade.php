<!doctype html>
<html class="bg-gray-200"><head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Admin Deposit Lists - QuesterGate Limited</title>
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

    <script type="text/javascript" src="/questergatecapital/public/js/jquery.js"></script>
    <script type="text/javascript" src="/questergatecapital/public/js/moment.js"></script>
    <script type="text/javascript" src="/questergatecapital/public/js/script.js"></script>
    <script type="text/javascript"> window.$crisp=[];window.CRISP_WEBSITE_ID="59767aec-ab5f-49a2-9233-f872ade8029a";(function(){ d=document;s=d.createElement("script"); s.src="https://client.crisp.chat/l.js"; s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})(); </script>
    </head>

    <body class="font-sans antialiased text-gray-900 leading-normal">
        <div class="h-screen flex">
            @include('admin.layout.sidebar')

            <div class="flex-1 min-w-0 flex flex-col bg-white">
                @include('admin.layout.topbar') 

                <main class="p-6 flex-1 bg-gray-200 overflow-y-auto relative">
                    <a id="scroll-top-btn"></a>
                    <div class="md:flex">
                        <div class="w-full md:w-4/6 ">                            
                            <span class="text-xl md:text-2xl leading-snug font-semibold tracking-tight text-gray-900">Deposit Lists</span>
                        </div>

                        <div class="w-full md:w-1/6">
                            <div class="relative">
                                @if(Auth::user()->usertype == 'superadmin')
                                    <button type="button" class="text-white px-4 py-2 font-semibold bg-lime-100 border rounded focus:outline-none focus:shadow-outline w-full withdraw-fund" onclick="addDepositPrompt();"><span>Add Deposit</span></button>
                                 @endif
                            </div>
                        </div>
                        <div class="w-full md:w-1/6">
                            <div class="relative">
                                @if(Auth::user()->usertype == 'superadmin')
                                    <a href="{{ url('admin/export/deposits') }}"><button type="button" class="text-white px-4 py-2 font-semibold bg-lime-100 border rounded focus:outline-none focus:shadow-outline w-full withdraw-fund""><span>Export Deposit</span></button></a>
                                @endif
                            </div>
                        </div>

                        
                    </div>
                    <div class="bg-white rounded shadow overflow-x-auto mt-6">
                        <table class="w-full whitespace-no-wrap withdrawal-list">
                            <tr class="text-left font-semibold">
                                <th class="px-6 pt-6 pb-4 text-center">Status</th> 
                                <th class="px-6 pt-6 pb-4 text-center">Reference</th> 
                                <th class="px-6 pt-6 pb-4">Amount</th> 
                                <th class="px-6 pt-6 pb-4">Fullname</th> 
                                <th class="px-6 pt-6 pb-4">User ID</th> 
                                <th class="px-6 pt-6 pb-4">Date</th>
                                <th class="px-6 pt-6 pb-4">Action</th>
                            </tr> 
                    
                            @foreach($deposit as $d)
                            @if($d->amount != 0.00)
                                <tr class="hover:bg-gray-100 focus-within:bg-gray-100 tr-data">
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
                                        <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{$d->reference}}</span>
                                    </td>
                                    <td class="border-t">
                                        <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{$d->amount}}</span>
                                    </td>
                                    <td class="border-t">
                                        @if (Auth::user()->usertype == 'superadmin')
                                            <a href="{{url('admin/user/'.$d->user->id)}}"><span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{$d->user->firstname}} {{$d->user->lastname}}</span></a>
                                        @else
                                            <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{$d->user->firstname.' '.$d->user->lastname}}</span>
                                        @endif
                                    </td>
                                    <td class="border-t">
                                        <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{$d->user->user_id}}</span>
                                    </td>
                                    <td class="border-t">
                                        <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{date('M j, Y', strtotime($d->created_at))}}</span>
                                    </td>
                                    <td class="border-t">
                                        <a onclick="changeStatusPrompt(this);" data-id="{{$d->id}}" data-value="{{$d->status}}"><span tabindex="-1" class="items-center">Change Status</span></a>
                                    </td>
                                </tr>
                            @endif 
                            @endforeach
                        </table>
                        <div class="p-6"> {!! $deposit->links() !!} </div>
                    </div> 
                    @include('admin.layout.scroll')
                    @include('admin.layout.footer')
                </main>
            </div>
        </div>
        <!-- add deposit -->
        <div id="add-deposit" class="add-deposit" style="display: none">
            <div class="fixed inset-0 z-40 flex items-center justify-center overflow-y-auto max-h-full py-8">
                <div>
                    <div class="absolute inset-0 bg-black opacity-25"></div>
                </div> 
                <div class="relative max-h-full overflow-y-auto w-full md:w-128">
                    <div class="w-full md:w-128 bg-white rounded-lg shadow-2xl px-6 py-6">   
                        <div class="adminadd-deposit-response">

                        </div>
                        
                        <form method="POST" class="add-deposit-form" enctype="multipart/form-data">
                            <h4 class="font-semibold text-gray-800 text-lg leading-tight border-b-2 border-gray-200 pb-4 mt-4">
                                <span>Add Deposit Status</span>
                                <button type="button" class="block text-gray-600 hover:text-gray-800 float-right" onclick="closeModal('.add-deposit');"><svg viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6"><path d="M17.293 18.707a1 1 0 001.414-1.414L13.414 12l5.293-5.293a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293z"></path></svg></button>
                            </h4>

                            <div class="flex flex-wrap -mx-3">
                                <div class="w-full md:w-full px-3">
                                    <div aria-required="true" aria-invalid="true">
                                        <label class="text-gray-700 block mt-2"><strong>User</strong> <small></small></label> 
                                        <select name="user_id" id="user_id" class="bg-white text w-full focus:outline-none px-3 py-2 rounded text-gray-900 border focus:bg-white mt-2 border-gray-400" required>
                                            <option value="">Select User</option>
                                            @foreach ($users as $user)
                                            <option value="{{ $user->id }}">{{ $user->firstname.' '.$user->lastname .' ('.$user->user_id.')' }}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div> 
                                <div class="w-full md:w-full px-3">
                                    <div aria-required="true" aria-invalid="true">
                                        <label class="text-gray-700 block mt-2"><strong>Amount</strong> <small></small></label> 
                                        <input type="number" name="amount" class="bg-white text w-full focus:outline-none px-3 py-2 rounded text-gray-900 border focus:bg-white mt-2 border-gray-400" required>
                                    </div>
                                </div> 
                                <div class="w-full md:w-full px-3">
                                    <div aria-required="true" aria-invalid="true">
                                        <label class="text-gray-700 block mt-2"><strong>Proof of payment</strong> <small></small></label> 
                                        <input type="file" name="proof" class="bg-white text w-full focus:outline-none px-3 py-2 rounded text-gray-900 border focus:bg-white mt-2 border-gray-400" required>
                                    </div>
                                </div> 
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
                                <button type="button" class="focus:outline-none focus:shadow-outline w-full md:flex-1 bg-lime-100 hover:bg-lime-100 px-4 py-3 text-white rounded border-b-2 border-lime-100 font-semibold mt-4" onclick="addDepositStatus(this);">
                                    <span>Submit</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- end -->
        <!-- change deposit status -->
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
        <input type="hidden" id="plan-hidden-id">
        <input type="hidden" id="plan-hidden-value">
    </body>
</html>
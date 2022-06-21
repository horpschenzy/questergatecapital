<!doctype html>
<html class="bg-gray-200"><head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Admin Audit Logs - QuesterGate Limited</title>
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
    span.break { 
            word-break: break-all; 
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

                    <div class="md:flex">
                        <div class="w-full md:w-2/6 ">                            
                            <span class="text-xl md:text-2xl leading-snug font-semibold tracking-tight text-gray-900"> Audit Logs {{ $type }}</span>
                        </div>

                        <div class="w-full md:w-4/6">
                            <div class="relative">
                                @if(Auth::user()->usertype == 'superadmin')
                                    <a href="{{url('/admin/audits/users')}}" class="text-white px-4 py-2 font-semibold bg-lime-100 border rounded focus:outline-none focus:shadow-outline w-full withdraw-fund"><span>Users</span></a>
                                    <a href="{{url('/admin/audits/deposit')}}" class="text-white px-4 py-2 font-semibold bg-lime-100 border rounded focus:outline-none focus:shadow-outline w-full withdraw-fund"><span>Deposits</span></a>
                                    <a href="{{url('/admin/audits/earning')}}" class="text-white px-4 py-2 font-semibold bg-lime-100 border rounded focus:outline-none focus:shadow-outline w-full withdraw-fund"><span>Earnings</span></a>
                                    <a href="{{url('/admin/audits/investment')}}" class="text-white px-4 py-2 font-semibold bg-lime-100 border rounded focus:outline-none focus:shadow-outline w-full withdraw-fund"><span>Investments</span></a>
                                    <a href="{{url('/admin/audits/withdrawal')}}" class="text-white px-4 py-2 font-semibold bg-lime-100 border rounded focus:outline-none focus:shadow-outline w-full withdraw-fund"><span>Withdrawals</span></a>
                                @endif
                            </div>
                        </div>

                        
                    </div>
                    <div class="bg-white rounded shadow overflow-x-auto mt-6">
                        <table class="w-full whitespace-no-wrap withdrawal-list">
                            <tr class="text-left font-semibold">
                                <th class="px-6 pt-6 pb-4 text-center">Author</th> 
                                <th class="px-6 pt-6 pb-4">Date</th>
                                <th class="px-6 pt-6 pb-4">Event</th> 
                                <th class="px-6 pt-6 pb-4">IP</th> 
                                <th class="px-6 pt-6 pb-4">URL</th>
                                <th class="px-6 pt-6 pb-4">Browser</th>
                                @if(Auth::user()->usertype == 'superadmin')
                                <th class="px-6 pt-6 pb-4">Action</th>
                                @endif
                            </tr> 

                            @if(!empty($audits) && $audits->count())
                            @foreach($audits as $a)
                            <tr class="hover:bg-gray-100 focus-within:bg-gray-100 tr-data">
                                <td class="border-t">
                                    @if (Auth::user()->usertype == 'superadmin')
                                    <a href="{{url('admin/user/'.$a->user->id)}}"><span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{$a->user->firstname}} {{$a->user->lastname}}</span></a>
                                    @else
                                        <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{$a->user->firstname}} {{$a->user->lastname}}</span>
                                    @endif
                                </td>
                                <td class="border-t">
                                    <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{date('M j, Y', strtotime($a->created_at))}}</span>
                                </td>
                                <td class="border-t">
                                    <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{ ucfirst($a->event)}}</span>
                                </td>
                                <td class="border-t">
                                    <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{$a->ip_address}}</span>
                                </td>
                                <td class="border-t">
                                    <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{$a->url}}</span>
                                </td>
                                <td class="border-t">
                                    <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{$a->user_agent}}</span>
                                </td>
                                <td class="border-t">
                                    <a onclick="viewMoreAuditPrompt('view-more-audit{{$a->id}}');"><span tabindex="-1" class=items-center">View More</span></a>
                                </td>
                                <div class="view-more-audit{{$a->id}}" style="display: none">
                                    <div class="fixed inset-0 z-40 flex items-center justify-center overflow-y-auto max-h-full py-8">
                                        <div>
                                            <div class="absolute inset-0 bg-black opacity-25"></div>
                                        </div> 
                                        <div class="relative max-h-full overflow-y-auto w-full md:w-128">
                                            <div class="w-full bg-white rounded-lg shadow-2xl px-6 py-6"> 
                                                <h4 class="font-semibold text-gray-800 text-lg leading-tight border-b-2 border-gray-200 pb-4 mt-4">
                                                    <span>Changes Made</span>
                                                    <button type="button" class="block text-gray-600 hover:text-gray-800 float-right" onclick="closeModal('.view-more-audit{{$a->id}}');"><svg viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6"><path d="M17.293 18.707a1 1 0 001.414-1.414L13.414 12l5.293-5.293a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293z"></path></svg></button>
                                                </h4>
                        
                                                <h4 class="font-semibold text-gray-800 text-lg leading-tight pb-4 mt-4 text-center">
                                                    <span>Old Values</span>
                                                </h4>
                                                <div class="display-success bg-green-100 p-3">
                                                    <span class="text-green-700 break">
                                                        {{$a->old_values}}
                                                    </span>
                                                </div>
                                                
                                                <h4 class="font-semibold text-gray-800 text-lg leading-tight pb-4 mt-4 text-center">
                                                    <span>New Values</span>
                                                </h4>
                                                <div class="display-success bg-green-100 p-3">
                                                    <span class="text-green-700 break">
                                                        {{$a->new_values}}
                                                    </span>
                                                </div>
                        
                                                <div class="flex justify-center mt-5">
                        
                                                    <button type="button" class="focus:outline-none focus:shadow-outline bg-gray-300 px-4 py-3 rounded border w-2/6 ml-3 font-semibold" onclick="closeModal('.view-more-audit{{$a->id}}');">
                                                        Cancel
                                                    </button>
                                                </div>                        
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </tr> 
                            @endforeach
                            @else
                            <tr class="hover:bg-gray-100 focus-within:bg-gray-100 tr-data">
                                <td class="border-t">
                                    <span  tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">No Audits</span>
                                </td>
                            </tr>
                            @endif
                            
                        </table>
                        <div class="p-6"> {!! $audits->links() !!} </div>
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
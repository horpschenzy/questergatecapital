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
    a{
        cursor: pointer;
    }
    </style>

    <script type="text/javascript" src="/questergatecapital/public/js/jquery.js"></script>
    <script type="text/javascript" src="/questergatecapital/public/js/moment.js"></script>
    <script type="text/javascript" src="/questergatecapital/public/js/script.js?v=15"></script>
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

@include('admin.layout.scroll')
                    <div class="md:flex" >
                        <div class="w-full md:w-5/6 ">                            
                            <span class="text-sm md:text-2xl leading-snug font-semibold tracking-tight text-gray-900">Active Fixed Investments</span>
                        </div> 

                        <div class="w-full md:w-1/6">
                        </div>

                        
                    </div>

                    <div class="bg-white rounded shadow overflow-x-auto mt-6">
                        <table class="w-full whitespace-no-wrap withdrawal-list">
                            <tr class="text-left font-semibold">
                                <th class="px-6 py-3 text-center">Status</th>
                                <th class="px-6 py-3">Name</th> 
                                <th class="px-6 py-3">Plan</th> 
                                <th class="px-6 py-3">Capital (₦)</th> 
                                <th class="px-6 py-3">Min ROI (%)</th>
                                <th class="px-6 py-3">Duration</th>
                                <th class="px-6 py-3">Date Created</th>
                                @if (Auth::user()->usertype == 'superadmin')
                                <th class="px-6 py-3">Action</th>
                                @endif
                            </tr> 

                            @foreach($plans as $p)
                            <tr data-id="{{$p['id']}}" data-userid="{{$p['user_id']}}" class="hover:bg-gray-100 focus-within:bg-gray-100 tr-data">
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
                                
                                
                                @if (Auth::user()->usertype == 'superadmin')
                                    <td class="border-t">
                                        <a href="{{url('admin/user/'.$p['user_id'])}}"><span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{$p['fullname']}}</span></a>
                                    </td>
                                @else
                                    <td class="border-t">
                                        <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{$p['fullname']}}</span>
                                    </td>
                                @endif
                                
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
                                @if (Auth::user()->usertype == 'superadmin')
                                <td class="border-t">
                                    <a href="/admin/plan-detail/{{$p['user_id']}}/{{$p['id']}}" class="view-more text-blue-600"><i class="fa-solid fa-eye" title="view investment info"></i></a>
                                </td>
                                @endif
                            </tr> 
                            @endforeach
                        </table>
                    </div> 
                    
                    
                    <div class="md:flex mt-6" >
                        <div class="w-full md:w-5/6 ">                            
                            <span class="text-sm md:text-2xl leading-snug font-semibold tracking-tight text-gray-900">Active Flex Investments</span>
                        </div> 

                        <div class="w-full md:w-1/6">
                        </div>
                    </div>

                    <div class="bg-white rounded shadow overflow-x-auto mt-6">
                        <table class="w-full whitespace-no-wrap withdrawal-list">
                            <tr class="text-left font-semibold">
                                <th class="px-6 py-3 text-center">Status</th>
                                <th class="px-6 py-3">Name</th> 
                                <th class="px-6 py-3">Plan</th> 
                                <th class="px-6 py-3">Start Date</th>
                                <th class="px-6 py-3">End Date</th>
                                <th class="px-6 py-3">Date Created</th>
                                @if (Auth::user()->usertype == 'superadmin')
                                <th class="px-6 py-3">Action</th>
                                @endif
                            </tr> 

                            @foreach($flex_plans as $p)
                            <tr data-id="{{$p->id}}" data-userid="{{$p->user->id}}" class="hover:bg-gray-100 focus-within:bg-gray-100 tr-data">
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
                                
                                @if (Auth::user()->usertype == 'superadmin')
                                    <td class="border-t">
                                        <a href="{{url('admin/user/'.$p->user->id)}}"> <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{$p->user->firstname.' '.$p->user->lastname}}</span></a>
                                    </td>
                                @else
                                    <td class="border-t">
                                        <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{$p->user->firstname.' '.$p->user->lastname}}</span>
                                    </td>
                                @endif 
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
                                @if (Auth::user()->usertype == 'superadmin')
                                <td class="border-t">
                                    <a href="/admin/plan-detail/{{$p->user->id}}/{{$p->id}}" class="view-more text-blue-600"><i class="fa-solid fa-eye" title="view investment info"></i></a>
                                </td>
                                @endif
                            </tr> 
                            @endforeach
                        </table>
                    </div> 

                    @include('admin.layout.footer')
                </main>
            </div>

            
        </div>

        <script>
            function viewPlanDetail(e){
                let planId =  $(e).attr("data-id");
                let userId =  $(e).attr("data-userid");

                location.href = "/admin/plan-detail/"+userId+"/"+planId;
            }
        </script>

    </body>
</html>
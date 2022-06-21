<!doctype html>
<html class="bg-gray-200"><head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Admin Notifications - QuesterGate Limited</title>
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

                    <div class="md:flex">
                        <div class="w-full md:w-5/6 ">                            
                            <span class="text-xl md:text-2xl leading-snug font-semibold tracking-tight text-gray-900">Notifications</span>
                        </div>

                        <div class="w-full md:w-1/6">
                        </div>

                        
                    </div>
                    <div class="bg-white rounded shadow overflow-x-auto mt-6">
                        <table class="w-full whitespace-no-wrap withdrawal-list">
                            <tr class="text-left font-semibold">
                                <th class="px-6 pt-6 pb-4 text-center">Fullname</th> 
                                <th class="px-6 pt-6 pb-4">Title</th>
                                <th class="px-6 pt-6 pb-4">Date</th>
                                <th class="px-6 pt-6 pb-4">Comment</th>
                                
                            </tr> 
                            @if(!empty($notifications) && $notifications->count())
                            @foreach($notifications as $n)
                            <tr class="hover:bg-gray-100 focus-within:bg-gray-100 tr-data">
                                <td class="border-t">
                                    <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{$n->user->firstname}} {{$n->user->lastname}}</span>
                                </td>
                                <td class="border-t">
                                    <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{ ucFirst($n->title)}}</span>
                                </td>
                                <td class="border-t">
                                    <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{date('M j, Y', strtotime($n->created_at))}}</span>
                                </td>
                                <td class="border-t">
                                    <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{ ucFirst($n->comment)}}</span>
                                </td>
                            </tr> 
                            @endforeach
                            @else
                            <tr class="hover:bg-gray-100 focus-within:bg-gray-100 tr-data">
                                <td class="border-t">
                                    <span  tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">No Notifications</span>
                                </td>
                            </tr>
                            @endif
                        </table>
                       <div class="p-6"> {!! $notifications->links() !!} </div>
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
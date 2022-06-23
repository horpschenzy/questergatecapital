<!doctype html>
<html class="bg-gray-200"><head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Admin Subcribers - QuesterGate Limited</title>
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

                    <div class="md:flex">
                        <div class="w-full md:w-5/6 ">                            
                            <span class="text-xl md:text-2xl leading-snug font-semibold tracking-tight text-gray-900">Subscribers</span>
                        </div>

                        <div class="w-full md:w-1/6">
                            <div class="relative">
                                {{-- @if(Auth::user()->usertype == 'superadmin')
                                    <a href="{{ url('admin/export/active/users') }}"><button type="button" class="text-white px-4 py-2 font-semibold bg-lime-100 border rounded focus:outline-none focus:shadow-outline w-full withdraw-fund"><span>Export Subscribers</span></button></a>
                                @endif --}}
                            </div>
                        </div>

                        
                    </div>
                    <div class="bg-white rounded shadow overflow-x-auto mt-6">
                        <table class="w-full whitespace-no-wrap withdrawal-list">
                            <tr class="text-left font-semibold">
                                <th class="px-6 pt-6 pb-4 text-center">S/N</th>
                                <th class="px-6 pt-6 pb-4 text-center">EMAIL OF MEMBERS</th> 
                                <th class="px-6 pt-6 pb-4">EMAIL OF NON-MEMBERS</th> 
                            </tr> 
                            @if($count)
                            @for($i = 0; $i < $count; $i++)
                            <tr class="hover:bg-gray-100 focus-within:bg-gray-100 tr-data">
                                <td class="border-t">
                                    <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{$i + 1}}</span>
                                </td>
                                <td class="border-t">
                                        <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{isset($members[$i]) ? $members[$i]['first_name'] .' - '. $members[$i]['email']: ''}} </span>
                                </td>
                                <td class="border-t">
                                    <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{isset($nonmembers[$i]) ? $nonmembers[$i]['first_name'] .' - '. $nonmembers[$i]['email']: ''}} </span>
                                </td>
                            </tr> 
                            @endfor
                            @else
                            <tr class="hover:bg-gray-100 focus-within:bg-gray-100 tr-data">
                                <td class="border-t">
                                    <span  tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">No Subscribers</span>
                                </td>
                            </tr>
                            @endif
                        </table>
                    </div> 
                    @include('admin.layout.scroll')

                    @include('admin.layout.footer')
                </main>
            </div>
        </div>
        <!-- delete confirm -->
        <div id="delete-confirm" class="delete-confirm" style="display: none">
            <div class="fixed inset-0 z-40 flex items-center justify-center overflow-y-auto max-h-full py-8">
                <div>
                    <div class="absolute inset-0 bg-black opacity-25"></div>
                </div> 

                <div class="relative max-h-full overflow-y-auto w-full md:w-128">
                    <div class="w-full bg-white rounded-lg shadow-2xl px-6 py-6"> 
                        <div class="display-success bg-green-100 p-3" style="display: none;">
                            <span class="text-green-700">&check;  User deleted successfully.</span>
                        </div>

                        <h4 class="font-semibold text-gray-800 text-lg leading-tight pb-4">
                            <button class="block text-gray-600 hover:text-gray-800 float-right" onclick="closeModal('.delete-confirm');"><svg viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4"><path d="M17.293 18.707a1 1 0 001.414-1.414L13.414 12l5.293-5.293a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293z"></path></svg></button>
                        </h4>

                        <h4 class="font-semibold text-gray-800 text-lg leading-tight pb-4 mt-4 text-center">
                            <span>Do you want to delete this  user?</span>
                        </h4>

                        <div class="flex justify-center mt-5">
                            <button type="button" class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white w-2/6 py-2 px-4 border border-red-500 hover:border-transparent rounded" onclick="deleteAdminUser(this);">
                                Delete
                            </button>

                            <button type="button" class="focus:outline-none focus:shadow-outline bg-gray-300 px-4 py-3 rounded border w-2/6 ml-3 font-semibold" onclick="closeModal('.delete-confirm');">
                                Cancel
                            </button>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
        <!-- end -->
        <input type="hidden" id="plan-hidden-id">
    </body>
</html>
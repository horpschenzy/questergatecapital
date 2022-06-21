<!doctype html>
<html class="bg-gray-200"><head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <title>Admin - Earnaya</title>
    <link rel="shortcut icon" href="{{asset('img/favicon.ico')}}">
    <link href="{{asset('css/style.css')}}" rel="stylesheet">
    <link href="{{asset('css/tooltips.css')}}" rel="stylesheet">
    <style type="text/css">.alert-flash {
      right: 25px;
      top: 25px;
    }
    .fullname-initial{
        padding: 7px 9px; background-color: #00B9B6; color: #fff; border-radius: 5em
    }
    </style>

    <script type="text/javascript" src="{{asset('js/jquery.js')}}"></script>
    <script type="text/javascript" src="{{asset('js/moment.js')}}"></script>
    <script type="text/javascript" src="{{asset('js/fuse.js')}}"></script>
    <script type="text/javascript" src="{{asset('js/clipboard.js')}}"></script>
    <script type="text/javascript" src="{{asset('js/script.js')}}"></script>

    <body class="font-sans antialiased text-gray-900 leading-normal">
        <div class="h-screen flex">
            <div class="fixed z-30 inset-y-0 left-0 w-64 px-8 py-4 bg-gray-200 border-r overflow-y-auto lg:inset-auto lg:static lg:translate-x-0 -translate-x-full ease-in transition-medium mobile-sidebar">
                <div class="-mx-3 mt-5 pl-3 flex items-center justify-between">
                    <img src="../img/earnaya-lime.png" class="h-8 w-auto">
                    <button class="block text-gray-600 hover:text-gray-800 lg:hidden" onclick="toggleMobileSidebar('close')">
                        <svg viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
                            <path d="M17.293 18.707a1 1 0 001.414-1.414L13.414 12l5.293-5.293a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293z"></path>
                        </svg>
                    </button>
                </div> 

                
            </div> 

            <div class="flex-1 min-w-0 flex flex-col bg-white">
                

                <main class="p-6 flex-1 bg-gray-200 overflow-y-auto">
                    <h2 class="text-xl md:text-2xl leading-snug font-semibold tracking-tight text-gray-900">Support</h2>

                    <div class="bg-white rounded shadow overflow-x-auto mt-6">
                        <table class="w-full whitespace-no-wrap withdrawal-list">
                            <tr class="text-left font-semibold">
                                <th class="px-6 pt-6 pb-4 text-center">Fullname</th> 
                                <th class="px-6 pt-6 pb-4">Phone</th> 
                                <th class="px-6 pt-6 pb-4">Email</th> 
                                <th class="px-6 pt-6 pb-4">Message</th> 
                                <th class="px-6 pt-6 pb-4">Date</th>
                            </tr> 

                            @foreach($support as $s)
                            <tr class="hover:bg-gray-100 focus-within:bg-gray-100 tr-data">
                                <td class="border-t">
                                    <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{$s->fullname}}</span>
                                </td>
                                <td class="border-t">
                                    <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{$s->phone}}</span>
                                </td>
                                <td class="border-t">
                                    <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{$s->email}}</span>
                                </td>
                                <td class="border-t">
                                    <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{$s->support_message}}</span>
                                </td>
                                <td class="border-t">
                                    <span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">{{$s->created_at}}</span>
                                </td>
                            </tr> 
                            @endforeach
                        </table>
                    </div> 

                    
                </main>
            </div>

           
        </div>

        <script src="{{asset('js/footer.js')}}"></script>

    </body>
</html>
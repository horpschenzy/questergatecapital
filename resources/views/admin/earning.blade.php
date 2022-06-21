<!doctype html>
<html class="bg-gray-200"><head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
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
                    <h2 class="text-xl md:text-2xl leading-snug font-semibold tracking-tight text-gray-900">Earning</h2>
                        <form  method="POST" class="user-earning-form">
                            <div class="earning-response"></div>
                            

                            <div class="mt-5">
                                <label>Amount</label>
                                <input type="number" name="amount" class="bg-white text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white mt-2 border-gray-400">
                            </div>

                            <div class="mt-5">
                                <label>User Id</label>
                                <input type="number" name="user_id" class="bg-white text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white mt-2 border-gray-400">
                            </div>

                            <button type="button" onclick="createEarning(this)" class="focus:outline-none focus:shadow-outline w-full md:flex-1 bg-red-500 hover:bg-red-600 px-4 py-3 text-white rounded border-b-2 border-red-500 font-semibold mt-4">Save</button>
                        </form>


                        <h2 class="text-xl md:text-2xl leading-snug font-semibold tracking-tight text-gray-900" style="margin-top: 5rem">Delete Earning</h2>
                        <form  method="POST" class="delete-earning-form">
                            <div class="delete-earning-response"></div>

                            <div class="mt-5">
                                <label>User Id</label>
                                <input type="number" name="user_id" class="bg-white text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white mt-2 border-gray-400">
                            </div>

                            <button type="button" onclick="deleteEarning(this)" class="focus:outline-none focus:shadow-outline w-full md:flex-1 bg-red-500 hover:bg-red-600 px-4 py-3 text-white rounded border-b-2 border-red-500 font-semibold mt-4">Delete</button>
                        </form>

                    
                </main>
            </div>

           
        </div>

        <script src="{{asset('js/footer.js')}}"></script>

        <script type="text/javascript">
    var _shost = window.location.host;
var _protocol = window.location.protocol+"//";
var _urlpath = window.location.host != "earnaya.com" ? "/earnaya-ui" : "/app";

    function createEarning(e){
      $(e).html("Sending...");

      var ajaxPost = $.ajax({
         type:'POST',
         url:_protocol+""+_shost+"/admin/user/earning/create",
         data:$(".user-earning-form").serialize(),
         dataType: "json",
        headers:{'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
      });

      ajaxPost.done(function(res){
        $(e).html("Send");
          if(res.message == "success"){
            $(".earning-response").html('<div style="color: green"><strong>Earning sent successfully.</strong></div>');

            window.location.href = _protocol+""+_shost+"/admin/earning/list";
          }
          else{
            $(".earning-response").html('<div style="color: red"><strong>'+res.message+'</strong></div>');
          }
      });

      ajaxPost.fail(function(err){
        console.log(err);
      });
    }


    function deleteEarning(e){
      $(e).html("Sending...");

      var ajaxPost = $.ajax({
         type:'DELETE',
         url:_protocol+""+_shost+"/admin/user/earning/delete",
         data:$(".delete-earning-form").serialize(),
         dataType: "json",
        headers:{'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
      });

      ajaxPost.done(function(res){
        $(e).html("Send");
          if(res.message == "success"){
            $(".delete-earning-response").html('<div style="color: green"><strong>Earning deleted successfully.</strong></div>');

            window.location.reload();
          }
          else{
            $(".delete-earning-response").html('<div style="color: red"><strong>'+res.message+'</strong></div>');
          }
      });

      ajaxPost.fail(function(err){
        console.log(err);
      });
    }
</script>

    </body>
</html>
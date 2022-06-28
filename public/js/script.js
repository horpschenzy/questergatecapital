var _shost = window.location.host;
var _protocol = window.location.protocol+"//";
var resp;

var scrollTopBtn = $('#scroll-top-btn');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    scrollTopBtn.addClass('show');
  } else {
    scrollTopBtn.removeClass('show');
  }
});

scrollTopBtn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


$(".filter-parent").on("click",function(){
	$(".fixed-inset").show();
	$(".deposit-filter").show();
});

$(document).on("click",function(event){
    var trigger = $(".filter-parent");
    if(trigger !== event.target && !trigger.has(event.target).length){
        $(".fixed-inset").addClass("lg:hidden");
        $(".deposit-filter").addClass("lg:hidden");
    }  
});

function closeModal(type){
    $(type).hide();
}

function deposit(e){
    $(e).html('<span class="flex justify-center items-center"><svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff" class="h-4 w-4 mr-2"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity="0.5" cx="18" cy="18" r="18"></circle> <path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(349.238 18 18)"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g></svg> <span class="font-normal">Loading...</span></span>');

	var ajaxPost = $.ajax({
        url: _protocol+""+_shost+"/account/deposit",
        method: "POST",
        data: $(".deposit-fund-form").serialize(),
        dataType: "json",
        headers:{'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
    });

    ajaxPost.done(function(res){
        if(res.message == "success"){
            $(e).html("Send")
            $(".response").html('<div class="alert alert-success">Your deposit request have been queued and will be processed within 24 hours.</div>')

            setTimeout(function(){
                window.location.reload();
            },5000);
        }
        else{
            $(e).html("Send")
            $(".response").html('<div class="alert alert-error"><strong>'+res.message+'</strong></div>')
        }
    });

    ajaxPost.fail(function(res){
    });
}

function editAdminUser(e, form_class, response_class){
    $(e).html('<span class="flex justify-center items-center"><svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff" class="h-4 w-4 mr-2"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity="0.5" cx="18" cy="18" r="18"></circle> <path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(349.238 18 18)"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g></svg> <span class="font-normal">Loading...</span></span>');

    var ajaxPost = $.ajax({
        url: _protocol+""+_shost+"/admin/edit/user",
        method: "POST",
        data: $("."+form_class).serialize(),
        dataType: "json",
        headers:{'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
    });

    ajaxPost.done(function(res){
        if(res.status == 201){
            $("."+response_class).html('<div class="alert alert-success"><h3><strong>Admin User Updated Successfully!</strong></h3></div>');
            $(e).html("Withdraw");

            setTimeout(function(){
                window.location.reload();
            },2000);
        }
        else{
            $("."+response_class).html('<div class="alert alert-error"><h3><strong>'+res.message+'</strong></h3></div>');
             $(e).html("Withdraw");
        }
    });
}

function addAdminUser(e){
    $(e).html('<span class="flex justify-center items-center"><svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff" class="h-4 w-4 mr-2"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity="0.5" cx="18" cy="18" r="18"></circle> <path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(349.238 18 18)"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g></svg> <span class="font-normal">Loading...</span></span>');

    var ajaxPost = $.ajax({
        url: _protocol+""+_shost+"/admin/add/user",
        method: "POST",
        data: $(".admin-add-form").serialize(),
        dataType: "json",
        headers:{'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
    });

    ajaxPost.done(function(res){
        if(res.status == 201){
            $(".adminadd-response").html('<div class="alert alert-success"><h3><strong>Admin User Added Successfully!</strong></h3></div>');
            $(e).html("Withdraw");

            setTimeout(function(){
                window.location.reload();
            },2000);
        }
        else{
            $(".adminadd-response").html('<div class="alert alert-error"><h3><strong>'+res.message+'</strong></h3></div>');
             $(e).html("Withdraw");
        }
    });
}

function withdrawFund(e){
    $(e).html('<span class="flex justify-center items-center"><svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff" class="h-4 w-4 mr-2"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity="0.5" cx="18" cy="18" r="18"></circle> <path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(349.238 18 18)"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g></svg> <span class="font-normal">Loading...</span></span>');

    var ajaxPost = $.ajax({
        url: _protocol+""+_shost+"/investor/withdrawal",
        method: "POST",
        data: $(".withdraw-fund-form").serialize(),
        dataType: "json",
        headers:{'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
    });

    ajaxPost.done(function(res){
        if(res.message == "success"){
            $(".withdrawal-response").html('<div class="alert alert-success"><h3><strong>Withdrawal request sent!</strong></h3><p>Your request will be processed within 24 hours</p></div>');
            $(e).html("Withdraw");

            setTimeout(function(){
                window.location.reload();
            },2000);
        }
        else{
            $(".withdrawal-response").html('<div class="alert alert-error"><h3><strong>'+res.message+'</strong></h3></div>');
             $(e).html("Withdraw");
        }
    });
}

function getWithdrawal(){
    var ajaxPost = $.ajax({
        url: _protocol+""+_shost+"/api/withdrawal/show/user",
        method: "GET",
        data: {user_id: localStorage.getItem("_userid")},
        dataType: "json"
    });

    ajaxPost.done(function(res){
        $(".tr-data").remove();
        $.map(res.withdrawal,function(item,index){
            //var remark =  item.status == 1 ? "Successful" : item.status == 2 ? "Processing" : "Cancelled";
            var status =  item.status == "Successful" ? "bg-green-500" : item.status == "Processing" ? "bg-yellow-500" : "bg-red-500";

            $(".withdrawal-list").append('<tr class="hover:bg-gray-100 focus-within:bg-gray-100 tr-data">'+
                '<td class="border-t">'+
                    '<span tabindex="-1" class="px-6 py-4 flex items-center justify-center focus:outline-none">'+
                        '<span class="w-2 h-2 '+status+' rounded-full"></span>'+
                    '</span>'+
                '</td> '+
                '<td class="border-t">'+
                    '<span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">'+item.reference+'</span>'+
                '</td> '+
                '<td class="border-t">'+
                    '<span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none justify-end">₦'+new Intl.NumberFormat().format(item.amount)+'</span>'+
                '</td>'+ 
                '<td class="border-t">'+
                    '<span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">'+
                        '<span>'+item.status+'</span>'+
                    '</span>'+
                '</td>'+ 
                '<td class="border-t">'+
                    '<span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">'+moment(item.created_at).format("MMM Do, YYYY, h:mm A")+'</span>'+
                '</td>'+
            '</tr>');
        });
    });

    ajaxPost.fail(function(res){
    });
}

function getDeposit(){
    var ajaxPost = $.ajax({
        url: _protocol+""+_shost+"/api/deposit/show/user",
        method: "GET",
        data: {user_id: localStorage.getItem("_userid")},
        dataType: "json"
    });

    ajaxPost.done(function(res){
        $(".tr-data").remove();
        $.map(res.deposit,function(item,index){
            //var remark =  item.status == 1 ? "Successful" : item.status == 2 ? "Processing" : "Cancelled";
            var status =  item.status == "Successful" ? "bg-green-500" : item.status == "Processing" ? "bg-yellow-500" : "bg-red-500";

            $(".deposit-list").append('<tr class="hover:bg-gray-100 focus-within:bg-gray-100 tr-data">'+
                '<td class="border-t">'+
                    '<span tabindex="-1" class="px-6 py-4 flex items-center justify-center focus:outline-none">'+
                        '<span class="w-2 h-2 '+status+' rounded-full"></span>'+
                    '</span>'+
                '</td> '+
                '<td class="border-t">'+
                    '<span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">'+item.reference+'</span>'+
                '</td> '+
                '<td class="border-t">'+
                    '<span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none justify-end">₦'+new Intl.NumberFormat().format(item.amount)+'</span>'+
                '</td>'+ 
                '<td class="border-t">'+
                    '<span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">'+
                        '<span>'+item.status+'</span>'+
                    '</span>'+
                '</td>'+ 
                '<td class="border-t">'+
                    '<span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">'+moment(item.created_at).format("MMM Do, YYYY, h:mm A")+'</span>'+
                '</td>'+
            '</tr>');
        });
    });

    ajaxPost.fail(function(res){
    });
}

function getBankAccount(){
    var ajaxPost = $.ajax({
        url: _protocol+""+_shost+"/api/bank/account/show/user",
        method: "GET",
        data: {user_id:localStorage.getItem("_userid")},
        dataType: "json"
    });

    ajaxPost.done(function(res){
        if(res.account){
            $(".withdraw-fund-form").show();
            $(".withdraw-fund-important").hide();
            $(".withdraw-fund-important-hide").hide();

            if(res.account.length > 0){
                $(".withdraw-fund-important").hide();
                $(".withdraw-fund-important-de").hide();
                $(".withdraw-fund-form").show();

                $(".bank-list").append('<select name="bank" class="block appearance-none w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white bg-white mt-2 border-gray-400"><option value="'+res.account[0].bank+'">'+res.account[0].bank+'</option><option value="Access Bank Plc">Access Bank Plc</option><option value="Citibank Nigeria Limited">Citibank Nigeria Limited</option><option value="Ecobank Nigeria Plc">Ecobank Nigeria Plc</option><option value="Fidelity Bank Plc">Fidelity Bank Plc</option><option value="First Bank Nigeria Limited">First Bank Nigeria Limited</option><option value="First City Monument Bank Plc">First City Monument Bank Plc</option><option value="Globus Bank Limited">Globus Bank Limited</option><option value="Guaranty Trust Bank Plc">Guaranty Trust Bank Plc</option><option value="Heritage Banking Company Ltd">Heritage Banking Company Ltd</option><option value="Key Stone Bank">Key Stone Bank</option><option value="Polaris Bank">Polaris Bank</option><option value="Providus Bank">Providus Bank</option><option value="Stanbic IBTC Bank Ltd">Stanbic IBTC Bank Ltd</option><option value="Standard Chartered Bank Nigeria Ltd">Standard Chartered Bank Nigeria Ltd</option><option value="Sterling Bank Plc">Sterlink Bank Plc</option><option value="SunTrust Bank Nigeria Limited">SunTrust Bank Nigeria Limited</option><option value="Titan Trust Bank Ltd">Titan Trust Bank Ltd</option><option value="Union Bank of Nigeria Plc">Union Bank of Nigeria Plc</option><option value="United Bank For Africa Plc">United Bank For Nigeria Plc</option><option value="Unity Bank Plc">Unity Bank Plc</option> <option value="Wema Bank Plc">Wema Bank Plc</option><option value="Zenith Bank Plc">Zenith Bank Plc</option></select><div class="pointer-events-none absolute right-0 flex items-center px-2 text-gray-700" style="top:0; bottom: -30px"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current h-4 w-4"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg></div>');

                $("[name='account_name']").val(res.account[0].account_name);
                $(".bank").val(res.account[0].bank);
                $("[name='account_number']").val(res.account[0].account_number);
            }
            else{
                $(".withdraw-fund-important").show();
                $(".withdraw-fund-important-hide").show();
                $(".withdraw-fund-form").hide();

                $(".bank-list").append('<select name="bank" class="block appearance-none w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white bg-white mt-2 border-gray-400"><option value="Access Bank Plc">Access Bank Plc</option><option value="Citibank Nigeria Limited">Citibank Nigeria Limited</option><option value="Ecobank Nigeria Plc">Ecobank Nigeria Plc</option><option value="Fidelity Bank Plc">Fidelity Bank Plc</option><option value="First Bank Nigeria Limited">First Bank Nigeria Limited</option><option value="First City Monument Bank Plc">First City Monument Bank Plc</option><option value="Globus Bank Limited">Globus Bank Limited</option><option value="Guaranty Trust Bank Plc">Guaranty Trust Bank Plc</option><option value="Heritage Banking Company Ltd">Heritage Banking Company Ltd</option><option value="Key Stone Bank">Key Stone Bank</option><option value="Polaris Bank">Polaris Bank</option><option value="Providus Bank">Providus Bank</option><option value="Stanbic IBTC Bank Ltd">Stanbic IBTC Bank Ltd</option><option value="Standard Chartered Bank Nigeria Ltd">Standard Chartered Bank Nigeria Ltd</option><option value="Sterling Bank Plc">Sterlink Bank Plc</option><option value="SunTrust Bank Nigeria Limited">SunTrust Bank Nigeria Limited</option><option value="Titan Trust Bank Ltd">Titan Trust Bank Ltd</option><option value="Union Bank of Nigeria Plc">Union Bank of Nigeria Plc</option><option value="United Bank For Africa Plc">United Bank For Nigeria Plc</option><option value="Unity Bank Plc">Unity Bank Plc</option> <option value="Wema Bank Plc">Wema Bank Plc</option><option value="Zenith Bank Plc">Zenith Bank Plc</option></select><div class="pointer-events-none absolute right-0 flex items-center px-2 text-gray-700" style="top:0; bottom: -30px"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current h-4 w-4"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg></div>');
            }
        }
        else{
            $(".withdraw-fund-form").hide();
            $(".withdraw-fund-important").show();
            $(".withdraw-fund-important-hide").show();
        }
    });

    ajaxPost.fail(function(res){
    });
}

function updateBankAccount(e){
    $(e).html('<span class="flex justify-center items-center"><svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff" class="h-4 w-4 mr-2"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity="0.5" cx="18" cy="18" r="18"></circle> <path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(349.238 18 18)"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g></svg> <span class="font-normal">Loading...</span></span>');

    var ajaxPost = $.ajax({
        url: _protocol+""+_shost+"/investor/bank",
        method: "PUT",
        data: $(".bank-account-form").serialize(),
        dataType: "json",
        headers:{'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
    });


    ajaxPost.done(function(res){
        $(e).html("Update Bank Account");

        if(res.message == "success"){
            $(".bank-account-form-response").html('<div class="alert alert-success"><strong>Bank Account updated successfully.</strong></div>');

            setTimeout(function(){
                window.location.reload();
            },2000);
        }
        else{
            $(".bank-account-form-response").html('<div class="alert alert-error"><strong>'+res.message+'</strong></div>');
        }
    });

    ajaxPost.fail(function(res){
    });
}
function adminUpdateBankAccount(e, id){
    $(e).html('<span class="flex justify-center items-center"><svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff" class="h-4 w-4 mr-2"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity="0.5" cx="18" cy="18" r="18"></circle> <path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(349.238 18 18)"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g></svg> <span class="font-normal">Loading...</span></span>');

    var ajaxPost = $.ajax({
        url: _protocol+""+_shost+"/admin/update/bank/" + id,
        method: "PUT",
        data: $(".bank-account-form").serialize(),
        dataType: "json",
        headers:{'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
    });


    ajaxPost.done(function(res){
        $(e).html("Update Bank Account");

        if(res.message == "success"){
            $(".bank-account-form-response").html('<div class="alert alert-success"><strong>Bank Account updated successfully.</strong></div>');

            setTimeout(function(){
                window.location.reload();
            },2000);
        }
        else{
            $(".bank-account-form-response").html('<div class="alert alert-error"><strong>'+res.message+'</strong></div>');
        }
    });

    ajaxPost.fail(function(res){
    });
}
function adminUpdateQgWallet(e, id){
    $(e).html('<span class="flex justify-center items-center"><svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff" class="h-4 w-4 mr-2"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity="0.5" cx="18" cy="18" r="18"></circle> <path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(349.238 18 18)"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g></svg> <span class="font-normal">Loading...</span></span>');

    var ajaxPost = $.ajax({
        url: _protocol+""+_shost+"/admin/update/qgwallet/" + id,
        method: "PUT",
        data: $(".qg-wallet-form").serialize(),
        dataType: "json",
        headers:{'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
    });


    ajaxPost.done(function(res){
        $(e).html("Update QG Wallet");

        if(res.message == "success"){
            $(".qg-wallet-form-response").html('<div class="alert alert-success"><strong>QG Wallet updated successfully.</strong></div>');

            setTimeout(function(){
                window.location.reload();
            },2000);
        }
        else{
            $(".qg-wallet-form-response").html('<div class="alert alert-error"><strong>'+res.message+'</strong></div>');
        }
    });

    ajaxPost.fail(function(res){
    });
}

function adminChangePassword(e, id){
    $(e).html('<span class="flex justify-center items-center"><svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff" class="h-4 w-4 mr-2"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity="0.5" cx="18" cy="18" r="18"></circle> <path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(349.238 18 18)"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g></svg> <span class="font-normal">Loading...</span></span>');

    var ajaxPost = $.ajax({
        url: _protocol+""+_shost+"/admin/change/password/"+id,
        method: "PUT",
        data: $(".security-form").serialize(),
        dataType: "json",
        headers:{'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
    });


    ajaxPost.done(function(res){
        $(e).html("Update Password");

        if(res.message == "success"){
            $(".security-form-response").html('<div class="alert alert-success"><strong>Password changed successfully.</strong></div>');

            setTimeout(function(){
                window.location.reload();
            },2000);
        }
        else{
            $(".security-form-response").html('<div class="alert alert-error"><strong>'+res.message+'</strong></div>');
        }
    });

    ajaxPost.fail(function(res){
    });
}
function changePassword(e){
    $(e).html('<span class="flex justify-center items-center"><svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff" class="h-4 w-4 mr-2"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity="0.5" cx="18" cy="18" r="18"></circle> <path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(349.238 18 18)"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g></svg> <span class="font-normal">Loading...</span></span>');

    var ajaxPost = $.ajax({
        url: _protocol+""+_shost+"/investor/setting/password",
        method: "PUT",
        data: $(".security-form").serialize(),
        dataType: "json",
        headers:{'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
    });


    ajaxPost.done(function(res){
        $(e).html("Update Password");

        if(res.message == "success"){
            $(".security-form-response").html('<div class="alert alert-success"><strong>Password changed successfully.</strong></div>');

            setTimeout(function(){
                window.location.reload();
            },2000);
        }
        else{
            $(".security-form-response").html('<div class="alert alert-error"><strong>'+res.message+'</strong></div>');
        }
    });

    ajaxPost.fail(function(res){
    });
}

function getNOK(){
    var ajaxPost = $.ajax({
        url: _protocol+""+_shost+"/api/nok/show/user",
        method: "GET",
        data: {user_id:localStorage.getItem("_userid")},
        dataType: "json"
    });

    ajaxPost.done(function(res){
        if(res.nok){
            $("[name='nok_name']").val(res.nok.nok_name);
            $("[name='nok_phone']").val("0"+res.nok.nok_phone);
            $("[name='nok_relationship']").val(res.nok.nok_relationship);
            $("[name='nok_state']").val(res.nok.nok_state);
            $("[name='nok_city']").val(res.nok.nok_city);
            $("[name='nok_address']").val(res.nok.nok_address);
        }
    });

    ajaxPost.fail(function(res){
    });
}

function getUser(){
    var ajaxPost = $.ajax({
        url: _protocol+""+_shost+"/api/user/show/",
        method: "GET",
        data: {user_id:localStorage.getItem("_userid")},
        dataType: "json"
    });

    ajaxPost.done(function(res){
        if(res.user){
            $("[name='fullname']").val(res.user.fullname);
            $("[name='email']").val(res.user.email);
            $("[name='phone']").val("0"+res.phone);
            $("[name='state']").val(res.user.state);
            $("[name='city']").val(res.user.city);
            $("[name='address']").val(res.user.address);

            if(res.user.gender){
                $(".gender-list").append('<select name="gender" class="block appearance-none w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white bg-white mt-2 border-gray-400"><option value="'+res.user.gender+'">'+res.user.gender+'</option><option value="Male">Male</option><option value="Female">Female</option></select><div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current h-4 w-4"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg></div>');
            }
            else{
                $(".gender-list").append('<select name="gender" class="block appearance-none w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white bg-white mt-2 border-gray-400"><option value="Male">Male</option><option value="Female">Female</option></select><div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current h-4 w-4"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg></div>');
            }
        }
    });

    ajaxPost.fail(function(res){
    });
}

function updateNOK(e){
    $(e).html('<span class="flex justify-center items-center"><svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff" class="h-4 w-4 mr-2"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity="0.5" cx="18" cy="18" r="18"></circle> <path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(349.238 18 18)"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g></svg> <span class="font-normal">Loading...</span></span>');

    var ajaxPost = $.ajax({
        url: _protocol+""+_shost+"/investor/nok",
        method: "PUT",
        data: $(".contact-form").serialize(),
        dataType: "json",
        headers:{'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
    });

    ajaxPost.done(function(res){
        $(e).html("Update Contact");

        if(res.message == "success"){
            $(".contact-form-response").html('<div class="alert alert-success"><strong>Next Of Kin updated successfully.</strong></div>');

            setTimeout(function(){
                window.location.reload();
            },2000);
        }
        else{
            $(".contact-form-response").html('<div class="alert alert-error"><strong>'+res.message+'</strong></div>');
        }
    });

    ajaxPost.fail(function(res){
    });
}
function adminUpdateNOK(e, id){
    $(e).html('<span class="flex justify-center items-center"><svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff" class="h-4 w-4 mr-2"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity="0.5" cx="18" cy="18" r="18"></circle> <path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(349.238 18 18)"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g></svg> <span class="font-normal">Loading...</span></span>');

    var ajaxPost = $.ajax({
        url: _protocol+""+_shost+"/admin/update/nok/"+id,
        method: "PUT",
        data: $(".contact-form").serialize(),
        dataType: "json",
        headers:{'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
    });

    ajaxPost.done(function(res){
        $(e).html("Update Contact");

        if(res.message == "success"){
            $(".contact-form-response").html('<div class="alert alert-success"><strong>Next Of Kin updated successfully.</strong></div>');

            setTimeout(function(){
                window.location.reload();
            },2000);
        }
        else{
            $(".contact-form-response").html('<div class="alert alert-error"><strong>'+res.message+'</strong></div>');
        }
    });

    ajaxPost.fail(function(res){
    });
}

function adminUpdateProfile(e, id){
    $(e).html('<span class="flex justify-center items-center"><svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff" class="h-4 w-4 mr-2"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity="0.5" cx="18" cy="18" r="18"></circle> <path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(349.238 18 18)"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g></svg> <span class="font-normal">Loading...</span></span>');

    var ajaxPost = $.ajax({
        url: _protocol+""+_shost+"/admin/user/setting/"+ id,
        method: "PUT",
        data: $(".basic-profile-form").serialize(),
        dataType: "json",
        headers:{'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
    });


    ajaxPost.done(function(res){
        $(e).html("Update Profile");

        if(res.message == "success"){
            $(".basic-profile-form-response").html('<div class="alert alert-success"><strong>Profile updated successfully.</strong></div>');

            setTimeout(function(){
                window.location.reload();
            },2000);
        }
        else{
            $(".basic-profile-form-response").html('<div class="alert alert-error"><strong>'+res.message+'</strong></div>');
        }
    });

    ajaxPost.fail(function(res){
    });
}

function updateProfile(e){
    $(e).html('<span class="flex justify-center items-center"><svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff" class="h-4 w-4 mr-2"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity="0.5" cx="18" cy="18" r="18"></circle> <path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(349.238 18 18)"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g></svg> <span class="font-normal">Loading...</span></span>');

    var ajaxPost = $.ajax({
        url: _protocol+""+_shost+"/investor/setting",
        method: "PUT",
        data: $(".basic-profile-form").serialize(),
        dataType: "json",
        headers:{'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
    });


    ajaxPost.done(function(res){
        $(e).html("Update Profile");

        if(res.message == "success"){
            $(".basic-profile-form-response").html('<div class="alert alert-success"><strong>Profile updated successfully.</strong></div>');

            setTimeout(function(){
                window.location.reload();
            },2000);
        }
        else{
            $(".basic-profile-form-response").html('<div class="alert alert-error"><strong>'+res.message+'</strong></div>');
        }
    });

    ajaxPost.fail(function(res){
    });
}

function toggleMobileSidebar(type){
    if(type == "open"){
        $(".mobile-sidebar").removeClass("-translate-x-full");
        $(".mobile-sidebar").removeClass("ease-in");

        $(".mobile-sidebar").addClass("ease-out")
        $(".mobile-sidebar").addClass("translate-x-0")
    }
    else if(type == "close"){
        $(".mobile-sidebar").addClass("-translate-x-full");
        $(".mobile-sidebar").addClass("ease-in");

        $(".mobile-sidebar").removeClass("ease-out")
        $(".mobile-sidebar").removeClass("translate-x-0")
    }
    else{
        return false;
    }
}

function toggleAdminMenu(e){
    if($(e).parent().hasClass("user-menu-open")){
         $(".user-menu-inset").remove(); 
         $(".user-menu-dropdown").remove(); 
         $(e).parent().removeClass("user-menu-open"); 
    }
    else{
        $(e).parent().addClass("user-menu-open");  

        $(e).parent().prepend('<div class="fixed inset-0 user-menu-inset"></div>');

        $(e).parent().append('<div class="origin-top-right absolute right-0 mt-2 w-64 bg-white rounded-lg border shadow-md py-2 z-50 user-menu-dropdown"><ul><li><a href="/admin/dashboard" class="block px-4 py-2 hover:bg-lime-100 hover:text-white">Home</a></li> <li><a href="/logout" class="block px-4 py-2 hover:bg-lime-100 hover:text-white">Sign out</a></li></ul></div>');
    }   
}
function toggleUserMenu(e){
    if($(e).parent().hasClass("user-menu-open")){
         $(".user-menu-inset").remove(); 
         $(".user-menu-dropdown").remove(); 
         $(e).parent().removeClass("user-menu-open"); 
    }
    else{
        $(e).parent().addClass("user-menu-open");  

        $(e).parent().prepend('<div class="fixed inset-0 user-menu-inset"></div>');

        $(e).parent().append('<div class="origin-top-right absolute right-0 mt-2 w-64 bg-white rounded-lg border shadow-md py-2 z-50 user-menu-dropdown"><ul><li><a href="/investor/dashboard" class="block px-4 py-2 hover:bg-lime-100 hover:text-white">Home</a></li> <li><a href="/logout" class="block px-4 py-2 hover:bg-lime-100 hover:text-white">Sign out</a></li></ul></div>');
    }   
}

function toggleFilter(e,type){
    if($(e).parent().hasClass("filter-open")){
         $(".filter-inset").remove(); 
         $(".filter-dropdown").remove(); 
         $(e).parent().removeClass("filter-open"); 
    }
    else{
        $(e).parent().addClass("filter-open");  

        $(e).parent().prepend('<div class="fixed inset-0 filter-inset"></div>');

        if(type == "withdrawal"){
            $(e).parent().append('<div class="origin-top-left absolute left-0 mt-2 w-64 bg-white rounded border shadow-md p-4 filter-dropdown z-50"> <label for="status" class="text-gray-700 block mt-1">Status</label><div class="relative"><select name="filter-withdrawal" class="block appearance-none w-full focus:outline-none px-3 py-2 rounded text-gray-800 text-sm border border-gray-400 focus:bg-white bg-white mt-2" onchange="filterWithdrawal(this);"><option value="all">All</option><option value="1">Successful</option> <option value="2">Processing</option> <option value="0">Cancelled</option></select> <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current h-4 w-4"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg></div></div></div>');
        }
        else{
            $(e).parent().append('<div class="origin-top-left absolute left-0 mt-2 w-64 bg-white rounded border shadow-md p-4 filter-dropdown z-50"> <label for="status" class="text-gray-700 block mt-1">Status</label><div class="relative"><select name="filter-deposit" class="block appearance-none w-full focus:outline-none px-3 py-2 rounded text-gray-800 text-sm border border-gray-400 focus:bg-white bg-white mt-2" onchange="filterDeposit(this);"><option value="all">All</option><option value="1">Successful</option> <option value="2">Processing</option> <option value="0">Cancelled</option></select> <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current h-4 w-4"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg></div></div></div>');
        }
    }   
}

function filterWithdrawal(e,type){
    $(".tr-data").remove();
    var ajaxPost = $.ajax({
        url: _protocol+""+_shost+"/account/withdrawal/filter",
        method: "GET",
        data: {filter : $(e).val()},
        dataType: "json"
    });


    ajaxPost.done(function(res){
        $.map(res.withdrawal,function(item,index){

            $(".withdrawal-list").append('<tr class="hover:bg-gray-100 focus-within:bg-gray-100 tr-data">'+
                '<td class="border-t">'+
                    '<span tabindex="-1" class="px-6 py-4 flex items-center justify-center focus:outline-none">'+
                        '<span class="w-2 h-2 '+item.status+' rounded-full"></span>'+
                    '</span>'+
                '</td> '+
                '<td class="border-t">'+
                    '<span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">'+item.reference+'</span>'+
                '</td> '+
                '<td class="border-t">'+
                    '<span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none justify-end">₦'+item.amount+'</span>'+
                '</td>'+ 
                '<td class="border-t">'+
                    '<span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">'+
                        '<span>'+item.remark+'</span>'+
                    '</span>'+
                '</td>'+ 
                '<td class="border-t">'+
                    '<span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">'+item.created_at+'</span>'+
                '</td>'+
            '</tr>');
        });
    });

    ajaxPost.fail(function(res){
    });
}

function filterDeposit(e){
    $(".tr-data").remove();
    var ajaxPost = $.ajax({
        url: _protocol+""+_shost+"/account/deposit/filter",
        method: "GET",
        data: {filter : $(e).val()},
        dataType: "json"
    });


    ajaxPost.done(function(res){
        $.map(res.deposit,function(item,index){
            $(".deposit-list").append('<tr class="hover:bg-gray-100 focus-within:bg-gray-100 tr-data">'+
                '<td class="border-t">'+
                    '<span tabindex="-1" class="px-6 py-4 flex items-center justify-center focus:outline-none">'+
                        '<span class="w-2 h-2 '+item.status+' rounded-full"></span>'+
                    '</span>'+
                '</td> '+
                '<td class="border-t">'+
                    '<span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">'+item.reference+'</span>'+
                '</td> '+
                '<td class="border-t">'+
                    '<span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">₦'+item.amount+'</span>'+
                '</td>'+ 
                '<td class="border-t">'+
                    '<span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">'+
                        '<span>'+item.remark+'</span>'+
                    '</span>'+
                '</td>'+ 
                '<td class="border-t">'+
                    '<span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">'+item.created_at+'</span>'+
                '</td>'+
            '</tr>');
        });
    });

    ajaxPost.fail(function(res){
    });
}

function searchWithdrawal(){
    var searchInput = $(".withdrawal-search").val();

    if(searchInput == ""){
        $(".tr-data").remove();
        getWithdrawal();
    }
    else{
        var ajaxPost = $.ajax({
            url: _protocol+""+_shost+"/account/withdrawal/filter",
            method: "GET",
            data: {filter: "all"},
            dataType: "json"
        });

        ajaxPost.done(function(res){

            const fuse = new Fuse(res.withdrawal, {
              keys: ['amount','reference','created_at','remark'],
              findAllMatches:true
            });

            if(fuse.search(searchInput).length > 0 ){
                $(".tr-data").remove();

                $.map(fuse.search(searchInput),function(item,index){

                    $(".withdrawal-list").append('<tr class="hover:bg-gray-100 focus-within:bg-gray-100 tr-data">'+
                        '<td class="border-t">'+
                            '<span tabindex="-1" class="px-6 py-4 flex items-center justify-center focus:outline-none">'+
                                '<span class="w-2 h-2 '+item.item.status+' rounded-full"></span>'+
                            '</span>'+
                        '</td> '+
                        '<td class="border-t">'+
                            '<span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">'+item.item.reference+'</span>'+
                        '</td> '+
                        '<td class="border-t">'+
                            '<span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none justify-end">₦'+item.item.amount+'</span>'+
                        '</td>'+ 
                        '<td class="border-t">'+
                            '<span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">'+
                                '<span>'+item.item.remark+'</span>'+
                            '</span>'+
                        '</td>'+ 
                        '<td class="border-t">'+
                            '<span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">'+item.item.created_at+'</span>'+
                        '</td>'+
                    '</tr>');
                });
            }
            else{
                $(".tr-data").remove();
            }
        });

        ajaxPost.fail(function(res){
        });
    }
}

function searchDeposit(){
    var searchInput = $(".deposit-search").val();

    var ajaxPost = $.ajax({
        url: _protocol+""+_shost+"/account/deposit/filter",
        method: "GET",
        data: {filter: "all"},
        dataType: "json"
    });

    ajaxPost.done(function(res){

        const fuse = new Fuse(res.deposit, {
          keys: ['amount','reference','created_at','remark'],
          findAllMatches:true
        });

        if(fuse.search(searchInput).length > 0 ){
            $(".tr-data").remove();

            $.map(fuse.search(searchInput),function(item,index){
                $(".deposit-list").append('<tr class="hover:bg-gray-100 focus-within:bg-gray-100 tr-data">'+
                    '<td class="border-t">'+
                        '<span tabindex="-1" class="px-6 py-4 flex items-center justify-center focus:outline-none">'+
                            '<span class="w-2 h-2 '+item.item.status+' rounded-full"></span>'+
                        '</span>'+
                    '</td> '+
                    '<td class="border-t">'+
                        '<span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">'+item.item.reference+'</span>'+
                    '</td> '+
                    '<td class="border-t">'+
                        '<span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">₦'+item.item.amount+'</span>'+
                    '</td>'+ 
                    '<td class="border-t">'+
                        '<span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">'+
                            '<span>'+item.item.remark+'</span>'+
                        '</span>'+
                    '</td>'+ 
                    '<td class="border-t">'+
                        '<span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">'+item.item.created_at+'</span>'+
                    '</td>'+
                '</tr>');
            });
        }
        else{
            $(".tr-data").remove();
        }
    });

    ajaxPost.fail(function(res){
    });
}

function searchAllWithdrawal(){
    var searchInput = $(".withdrawal-search").val();

    if(searchInput == ""){
        $(".tr-data").remove();
        getWithdrawal();
    }
}

function searchAllDeposit(){
    var searchInput = $(".deposit-search").val();

    if(searchInput == ""){
        $(".tr-data").remove();
        getDeposit();
    }
}

function withdrawFlexFundPrompt(id){
    $("#plan-detail-hidden-id").val(id);
    $(".withdraw-flex-fund-modal").show();
}

function withdrawFundPrompt(){
    $(".withdraw-fund-modal").show();
}

function viewMoreAuditPrompt(className){
    $("."+className).show();
}
function editAdminUserPrompt(className){
    $("."+className).show();
}
function changeBankPrompt(className){
    $("."+className).show();
}
function changeUserPrompt(className){
    $("."+className).show();
}
function addAdminUserPrompt(){
    $(".add-admin-user-modal").show();
}

function addFlexPlan(){
    $(".add-flex-plan").show();
}

function addAmountToFlexPlan(){
    $(".add-amount-to-flex-plan").show();
}

function depositFundPrompt(){
    $(".deposit-fund-modal").show();
}

function launchPaystackCheckoutForm(){
    closeModal('.deposit-fund-modal');

    let amountVal = $("#amount").val();

    let handler = PaystackPop.setup({
        key: 'pk_live_e441f1100cd0290848e67ad097d0b7ac8007cd6a',
        email: localStorage.getItem('userEmail'),
        amount: amountVal * 100,
        onClose: function(){
        },
        callback: function(response){
            location.reload();
        }
    });

    handler.openIframe();
}

function searchKeypress(event,type){
    var keycode = (event.keyCode ? event.keyCode : event.which);

    if(keycode == '13'){
        event.preventDefault();
        if(type == "withdrawal"){
            searchWithdrawal();
        } 
        else{
            searchDeposit();
        }
    }
}


function getEarning(){
    var arr  = ["00","10","20","30","40","50","60","70","80","90"];

    var ajaxPost = $.ajax({
        url: _protocol+""+_shost+"/api/earning/show/user",
        method: "GET",
        data: {user_id:localStorage.getItem("_userid")},
        dataType: "json"
    });


    ajaxPost.done(function(res){
        var _s = res.total_earning.split(".")[1];

        if(res.total_earning == "0.00"){
            $(".earning").html("₦"+res.total_earning);
        }
        else{
            if(_s == arr[0]){
                $(".earning").html("₦"+new Intl.NumberFormat().format(res.total_earning)+".00");
            }
            else{
                if(arr.includes(_s)){
                    $(".earning").html("₦"+new Intl.NumberFormat().format(res.total_earning)+"0");
                }
                else{
                    $(".earning").html("₦"+new Intl.NumberFormat().format(res.total_earning));
                }
            }
        }

        $(".tr-data").remove();
        $.map(res.earning_list,function(item,index){
            var _earning
            if(item.amount == "0.00"){
                _earning = item.amount
            }
            else{
                if(_s == arr[0]){
                    _earning = new Intl.NumberFormat().format(res.total_earning)+".00";
                }
                else{
                    if(arr.includes(_s)){
                        _earning = new Intl.NumberFormat().format(res.total_earning)+"0";
                    }
                    else{
                        _earning = new Intl.NumberFormat().format(res.total_earning);
                    }
                }
            }

            $(".earning-list").append('<tr class="hover:bg-gray-100 focus-within:bg-gray-100 tr-data">'+
                '<td class="border-t">'+
                    '<span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">'+item.reference+
                    '</span>'+
                '</td> '+
                '<td class="border-t">'+
                    '<span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">₦'+_earning+'</span>'+
                '</td>'+ 
                '<td class="border-t">'+
                    '<span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">'+moment(item.created_at).format("MMM Do, YYYY, h:mm A")+'</span>'+
                '</td>'+
            '</tr>');
        });
    });

    ajaxPost.fail(function(res){
    });
}

function getReferral(){

    var ajaxPost = $.ajax({
        url: _protocol+""+_shost+"/api/referral/show/user",
        method: "GET",
        data: {user_id:localStorage.getItem("_userid")},
        dataType: "json"
    });


    ajaxPost.done(function(res){
        $(".tr-data").remove();
        $.map(res.referral,function(item,index){
            $(".referral-list").append('<tr class="hover:bg-gray-100 focus-within:bg-gray-100 tr-data">'+
                '<td class="border-t">'+
                    '<span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">'+item.fullname+'</span>'+
                '</td> '+
                '<td class="border-t">'+
                    '<span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">₦ 0.00</span>'+
                '</td> '+
                '<td class="border-t">'+
                    '<span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">Referral</span>'+
                '</td> '+
                '<td class="border-t">'+
                    '<span tabindex="-1" class="px-6 py-4 flex items-center focus:outline-none">'+
                        '<span>'+moment(item.created_at).format("MMM Do, YYYY, h:mm A")+'</span>'+
                    '</span>'+
                '</td>'+
            '</tr>');
        });
    });

    ajaxPost.fail(function(res){
    });
}


function acceptPayment(e){
    var id = $(e).attr("data-id");
    $("input[name='deposit_id']").val(id);
    $(".accept-payment").show();
}

function confirmAcceptPayment(e){
    $(e).html('<span class="flex justify-center items-center"><svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff" class="h-4 w-4 mr-2"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity="0.5" cx="18" cy="18" r="18"></circle> <path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(349.238 18 18)"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g></svg> <span class="font-normal">Loading...</span></span>');

    var ajaxPost = $.ajax({
        url: _protocol+""+_shost+"/account/offer/accept",
        method: "PUT",
        data: $(".accept-payment-form").serialize(),
        dataType: "json",
        headers:{'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
    });

    ajaxPost.done(function(res){
        if(res.message == "success"){
            $(".accept-payment-response").html('<div class="alert alert-success"><strong>Sent successfully.</strong></div>');

            setTimeout(function(){
                window.location.reload();
            },2000);
        }
        else{
            $(".accept-payment-response").html('<div class="alert alert-error"><strong>'+res.message+'</strong></div>');
        }
    });

    ajaxPost.fail()
}

function cancelDeposit(e){
    var id = $(e).attr("data-id");
    $("input[name='deposit_id']").val(id);
    $(".cancel-deposit").show();
}

function confirmCancelDeposit(e){
    $(e).html('<span class="flex justify-center items-center"><svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff" class="h-4 w-4 mr-2"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity="0.5" cx="18" cy="18" r="18"></circle> <path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(349.238 18 18)"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g></svg> <span class="font-normal">Loading...</span></span>');

    var ajaxPost = $.ajax({
        url: _protocol+""+_shost+"/account/deposit",
        method: "DELETE",
        data: $(".cancel-deposit-form").serialize(),
        dataType: "json",
        headers:{'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
    });

    ajaxPost.done(function(res){
        if(res.message == "success"){
            $(".cancel-deposit-response").html('<div class="alert alert-success"><strong>Deposit request cancelled.</strong></div>');

            setTimeout(function(){
                window.location.reload();
            },2000);
        }
        else{
            $(".cancel-deposit-response").html('<div class="alert alert-error"><strong>'+res.message+'</strong></div>');
        }
    });

    ajaxPost.fail()
}

function confirmPayment(e){
    var id = $(e).attr("data-id");
    $("input[name='proof_deposit_id']").val(id);
    $(".confirm-payment").show()
}

function toggleFaq(e){
    let thisAttr =  $(e).attr("id");
    let plusSign = $("#"+thisAttr+"-plus-sign");
    let minusSign = $("#"+thisAttr+"-minus-sign");

    if(!$(plusSign).hasClass("hide-me")){        

        $(".faq-body").addClass("collapse");

        $("#"+thisAttr+"-faq-body").removeClass("collapse");

        $(".acc-plus").removeClass("hide-me");
        $(".acc-minus").addClass("hide-me");

        $(plusSign).addClass("hide-me");
        $(minusSign).removeClass("hide-me"); 
    }
    else{

        $("#"+thisAttr+"-faq-body").addClass("collapse");

        $(".acc-plus").removeClass("hide-me");
        $(".acc-minus").addClass("hide-me");
    }
}

function showFaqMenuContent(e, content){
    $("ul.menu li").removeClass("active");

    $(e).addClass("active");

    $(".menu-content").hide();
    
    $("#"+content).show();

    var elmnt = document.getElementById(content);
    elmnt.scrollIntoView();
}

function showResourceMenuContent(e, content){
    $("ul.menu li").removeClass("active");

    $(e).addClass("active");

    $(".menu-content").hide();
    
    $("#"+content).show();

    var elmnt = document.getElementById(content);
    elmnt.scrollIntoView();
}

function addAmountToFlex(duration) {
    let flex_added_amount = parseFloat($("#flex_added_amount").val());
    var storedData = JSON.parse(localStorage.getItem("storedData"));
    let type = storedData[0][4];
    if(type == 'STUDENT' &&(flex_added_amount < 5000 || flex_added_amount == '' || isNaN(flex_added_amount))){
        alert('Minimum Capital required to activate this plan is ₦5,000');
        return false;
    }
    else if(type == 'SALARY' &&(flex_added_amount < 10000 || flex_added_amount == '' || isNaN(flex_added_amount))){
        alert('Minimum Capital required to activate this plan is ₦10,000');
        return false;
    }
    else if(type == 'BUSINESS' &&(flex_added_amount < 15000 || flex_added_amount == '' || isNaN(flex_added_amount))){
        alert('Minimum Capital required to activate this plan is ₦15,000');
        return false;
    }
   let roiPercent = 0;
    if(type == 'STUDENT'){
        roiPercent =  0.084;
    }
    else if(type == 'SALARY'){
        roiPercent =  0.1;
    }
    else if(type == 'BUSINESS'){
        roiPercent =  0.12;
    }
    let flex_selected_day = parseFloat($("#flex_selected_day").val());
    if(!flex_selected_day || flex_selected_day == ''){
        alert('Kindly select a day.');
        return false;
    }
    
    let roi_per_day = roiPercent;
    let days = duration;

    let days_remaining = (days - flex_selected_day);
    let roi = (roi_per_day * days_remaining).toFixed(2);
    let roi_earned = ((roi/100) * flex_added_amount).toFixed(2);
    var storedData = JSON.parse(localStorage.getItem("storedData"));
    let new_array = [flex_added_amount, days_remaining +' days', roi, roi_earned];
    storedData.push(new_array);
    localStorage.setItem("storedData", JSON.stringify(storedData));
    let html = '<table class="table table-responsive" style="font-size: 12px !important; color: white; padding-right: -1.5rem !important; padding-left: -1.5rem !important; ">'
            html +=   '<thead>'
            html +=      '<th width="10%">Capital (₦)</th>'
            html +=      '<th width="40%">NO. of days remaining in plan</th>'
            html +=      '<th width="10%">ROI(%)</th>'
            html +=      '<th width="40%">ROI earned at end of plan (₦)</th>'
            html +=   '</thead><tbody>'
        let flex_total_capital_and_roi = 0;
        for (const value of storedData) {
            html += '<tr>'
            html += '<td width="10%">'+new Intl.NumberFormat({ style: 'currency', currency: 'NGN' }).format(value[0])+'</td>';
            html += '<td width="40%">'+value[1]+'</td>';
            html += '<td width="10%">'+value[2]+'</td>';
            html += '<td width="40%">'+new Intl.NumberFormat({ style: 'currency', currency: 'NGN' }).format(value[3])+'</td>';
            html += '</tr>'
            flex_total_capital_and_roi += +((parseFloat(value[0]) + parseFloat(value[3])).toFixed(2));
        }
            
            html +=   '</tbody><table>'
        $("#table").html(html);
    let flex_total_capital_and_roi_tag = '<div class="square-block ovw-bg-2 text-white" style="display:inline-block"></div><div class="text-white" style="display:inline-block">Total Capital + ROI</div>';
    flex_total_capital_and_roi_tag += '<div class="bold text-white" id="min_flex_percent_and_amount" style="display:inline-block; float:right">₦'+new Intl.NumberFormat({ style: 'currency', currency: 'NGN' }).format(flex_total_capital_and_roi)+'</div>'
    $("#flex_total_capital_and_roi").html(flex_total_capital_and_roi_tag);

    
}

function calculateFlexInvestment(){
    let invFlexCapital = parseFloat($("#invFlexCapital").val());
    let invFlexPlan = $("#invFlexPlan").val();
    let invFlexDuration = $("#invFlexDuration").val();
    if(invFlexPlan == 'STUDENT' &&(invFlexCapital < 5000 || invFlexCapital == '' || isNaN(invFlexCapital))){
        alert('Minimum Capital required to activate this plan is ₦5,000');
        return false;
    }
    else if(invFlexPlan == 'SALARY' &&(invFlexCapital < 10000 || invFlexCapital == '' || isNaN(invFlexCapital))){
        alert('Minimum Capital required to activate this plan is ₦10,000');
        return false;
    }
    else if(invFlexPlan == 'BUSINESS' &&(invFlexCapital < 15000 || invFlexCapital == '' || isNaN(invFlexCapital))){
        alert('Minimum Capital required to activate this plan is ₦15,000');
        return false;
    }
   let duration = invFlexDuration * 30;
   let roiPercent = 0;
    if(invFlexPlan == 'STUDENT'){
        roiPercent =  0.084;
    }
    else if(invFlexPlan == 'SALARY'){
        roiPercent =  0.1;
    }
    else if(invFlexPlan == 'BUSINESS'){
        roiPercent =  0.12;
    }
    // alert(duration);
    // return false;
    // if(invFlexDuration == "24"){

        let today_date = moment().format('YYYY-MM-DD');
        let date_calc = moment().add(duration, 'days').calendar()
        let end_date = moment(date_calc,'MM/DD/YYYY').format('YYYY-MM-DD');

        $("#flex_duration").html(duration+' days');
        $("#flex_start_date").html(today_date);
        $("#flex_end_date").html(end_date);
        $("#flex_roi_per_day").html(roiPercent +'%');

        let days_remaining = duration +' days';
        let roi = (roiPercent * duration).toFixed(2);
        let roi_earned = (invFlexCapital * (roi / 100)).toFixed(2);
        let myArray = []
        myArray = [
            [invFlexCapital, days_remaining, roi, roi_earned,invFlexPlan]
         ];

        localStorage.setItem("storedData", JSON.stringify(myArray));
        var storedData = JSON.parse(localStorage.getItem("storedData"));

        let html = '<table class="table table-responsive" style="font-size: 12px !important; color: white; padding-right: -1.5rem !important; padding-left: -1.5rem !important; ">'
            html +=   '<thead>'
            html +=      '<th width="10%">Capital (₦)</th>'
            html +=      '<th width="40%">NO. of days remaining in plan</th>'
            html +=      '<th width="10%">ROI(%)</th>'
            html +=      '<th width="40%">ROI earned at end of plan (₦)</th>'
            html +=   '</thead><tbody>'
        let flex_total_capital_and_roi = '';
        for (const value of storedData) {
            html += '<tr>'
            html += '<td width="10%">'+new Intl.NumberFormat({ style: 'currency', currency: 'NGN' }).format(value[0])+'</td>';
            html += '<td width="40%">'+value[1]+'</td>';
            html += '<td width="10%">'+value[2]+'</td>';
            html += '<td width="40%">'+new Intl.NumberFormat({ style: 'currency', currency: 'NGN' }).format(value[3])+'</td>';
            html += '</tr>'
            flex_total_capital_and_roi += new Intl.NumberFormat({ style: 'currency', currency: 'NGN' }).format(parseFloat(value[0]) + parseFloat(value[3]));
        }
            
            html +=   '</tbody><table>'
        $("#table").html(html);

        let flex_total_capital_and_roi_tag = '<div class="square-block ovw-bg-2 text-white" style="display:inline-block"></div><div class="text-white" style="display:inline-block">Total Capital + ROI</div>';
            flex_total_capital_and_roi_tag += '<div class="bold text-white" id="min_flex_percent_and_amount" style="display:inline-block; float:right">₦'+flex_total_capital_and_roi+'</div>'
        $("#flex_total_capital_and_roi").html(flex_total_capital_and_roi_tag);

        let selected_tag = '<label for="flex_selected_day"  style=" color: white !important">Day Added</label><select class="px-1 py-1 rounded text-gray-900 border bg-white mt-2 border-gray-400" style="width: 100%; font-weight: bold" id="flex_selected_day"><option value="">Select Day</option>';
        for (var i = 0; i < (duration - 30); i++) {
            selected_tag += '<option value='+i+'> Day' + (i+1) +'</option>';
        }
            selected_tag += '</select>';
        $("#flex_day_added").html(selected_tag);
        let add_amount_button = '<button type="button" class="bg-indigo px-4 py-3 border text-white md:flex-1 rounded font-semibold mt-4 opacity-75 border-gray-400" style="width: 100%; font-weight: bold" onclick="addAmountToFlex('+duration+')"><span>ADD</span></button>';
        
        $("#add_amount_to_flex_button").html(add_amount_button);
    // }
    // if(invFlexDuration == "12"){

    //     let today_date = moment().format('YYYY-MM-DD');
    //     let date_calc = moment().add(360, 'days').calendar()
    //     let end_date = moment(date_calc,'MM/DD/YYYY').format('YYYY-MM-DD');

    //     $("#flex_duration").html(360+' days');
    //     $("#flex_start_date").html(today_date);
    //     $("#flex_end_date").html(end_date);
    //     $("#flex_roi_per_day").html('0.089%');

    //     let days_remaining = '360 days';
    //     let roi = (0.089 * 360).toFixed(2);
    //     let roi_earned = (invFlexCapital * (roi / 100)).toFixed(2);
    //     let myArray = []
    //     myArray = [
    //         [invFlexCapital, days_remaining, roi, roi_earned]
    //      ];

    //     localStorage.setItem("storedData", JSON.stringify(myArray));
    //     var storedData = JSON.parse(localStorage.getItem("storedData"));

    //     let html = '<table class="table table-responsive" style="font-size: 12px !important; color: white; padding-right: -1.5rem !important; padding-left: -1.5rem !important; ">'
    //         html +=   '<thead>'
    //         html +=      '<th width="10%">Capital (₦)</th>'
    //         html +=      '<th width="40%">NO. of days remaining in plan</th>'
    //         html +=      '<th width="10%">ROI(%)</th>'
    //         html +=      '<th width="40%">ROI earned at end of plan (₦)</th>'
    //         html +=   '</thead><tbody>'
    //     let flex_total_capital_and_roi = '';
    //     for (const value of storedData) {
    //         html += '<tr>'
    //         html += '<td width="10%">'+new Intl.NumberFormat({ style: 'currency', currency: 'NGN' }).format(value[0])+'</td>';
    //         html += '<td width="40%">'+value[1]+'</td>';
    //         html += '<td width="10%">'+value[2]+'</td>';
    //         html += '<td width="40%">'+new Intl.NumberFormat({ style: 'currency', currency: 'NGN' }).format(value[3])+'</td>';
    //         html += '</tr>'
    //         flex_total_capital_and_roi += new Intl.NumberFormat({ style: 'currency', currency: 'NGN' }).format(parseFloat(value[0]) + parseFloat(value[3]));
    //     }
            
    //         html +=   '</tbody><table>'
    //     $("#table").html(html);

    //     let flex_total_capital_and_roi_tag = '<div class="square-block ovw-bg-2 text-white" style="display:inline-block"></div><div class="text-white" style="display:inline-block">Total Capital + ROI</div>';
    //         flex_total_capital_and_roi_tag += '<div class="bold text-white" id="min_flex_percent_and_amount" style="display:inline-block; float:right">₦'+flex_total_capital_and_roi+'</div>'
    //     $("#flex_total_capital_and_roi").html(flex_total_capital_and_roi_tag);

    //     let selected_tag = '<label for="flex_selected_day"  style=" color: white !important">Day Added</label><select class="px-1 py-1 rounded text-gray-900 border bg-white mt-2 border-gray-400" style="width: 100%; font-weight: bold" id="flex_selected_day"><option value="">Select Day</option>';
    //     for (var i = 0; i < 330; i++) {
    //         selected_tag += '<option value='+i+'> Day ' + (i+1) +'</option>';
    //     }   
    //         selected_tag += '</select>';
    //     $("#flex_day_added").html(selected_tag);
        
    //     let add_amount_button = '<button type="button" class="bg-indigo border px-4 py-3 text-white md:flex-1 rounded font-semibold mt-4 opacity-75 border-gray-400" style="width: 100%; font-weight: bold" onclick="addAmountToFlex(12)"><span>ADD</span></button>';
    //     $("#add_amount_to_flex_button").html(add_amount_button);
    // }
}

function calculateInvestment(){
    let invCapital = parseFloat($("#invCapital").val());
    let invDuration = $("#invDuration").val();
    if(invCapital < 100000 || invCapital == '' || isNaN(invCapital)){
        alert('Minimum Capital required to activate this plan is ₦100,000');
        return false;
    }
    let minPercent = 0.0;
    let maxPercent = 0.0;

    let minAmount = 0.00;
    let maxAmount = 0.00;

    if(invDuration == "6"){
        $("#minContainer").show();

        maxPercent = 10;

        maxAmount = ((invCapital * 10)/100);

        let maxPercentAmout  = new Intl.NumberFormat({ style: 'currency', currency: 'NGN' }).format(invCapital + maxAmount);

        maxAmount = new Intl.NumberFormat({ style: 'currency', currency: 'NGN' }).format(maxAmount);

        $("#min_percent").html(maxPercent+'%');

        $("#min_amount").html('₦ '+maxAmount);

        $("#min_percent_and_amount").html('₦ '+maxPercentAmout);
    }

    if(invDuration == "12"){
        $("#minContainer").show();

        minPercent = 45;
        //maxPercent = 52;

        minAmount = ((invCapital * 45)/100);
        //maxAmount = ((invCapital * 52)/100);

        let minPercentAmout  = new Intl.NumberFormat({ style: 'currency', currency: 'NGN' }).format(invCapital + minAmount);
        //let maxPercentAmout  = new Intl.NumberFormat({ style: 'currency', currency: 'NGN' }).format(invCapital + maxAmount);

        minAmount = new Intl.NumberFormat({ style: 'currency', currency: 'NGN' }).format(minAmount);
        //maxAmount = new Intl.NumberFormat({ style: 'currency', currency: 'NGN' }).format(maxAmount);

        $("#min_percent").html(minPercent+'%');
        //$("#max_percent").html(maxPercent+'%');

        $("#min_amount").html('₦ '+minAmount);
        //$("#max_amount").html('₦ '+maxAmount);

        $("#min_percent_and_amount").html('₦ '+minPercentAmout);
        //$("#max_percent_and_amount").html('₦ '+maxPercentAmout);
    }

    if(invDuration == "18"){
        $("#minContainer").show();
        minPercent = 70;
        //maxPercent = 76;

        minAmount = ((invCapital * 70)/100);
        //maxAmount = ((invCapital * 76)/100);

        let minPercentAmout  = new Intl.NumberFormat({ style: 'currency', currency: 'NGN' }).format(invCapital + minAmount);
        //let maxPercentAmout  = new Intl.NumberFormat({ style: 'currency', currency: 'NGN' }).format(invCapital + maxAmount);

        minAmount = new Intl.NumberFormat({ style: 'currency', currency: 'NGN' }).format(minAmount);
        //maxAmount = new Intl.NumberFormat({ style: 'currency', currency: 'NGN' }).format(maxAmount);

        $("#min_percent").html(minPercent+'%');
        //$("#max_percent").html(maxPercent+'%');

        $("#min_amount").html('₦ '+minAmount);
        //$("#max_amount").html('₦ '+maxAmount);

        $("#min_percent_and_amount").html('₦ '+minPercentAmout);
        //$("#max_percent_and_amount").html('₦ '+maxPercentAmout);
    }

    if(invDuration == "24"){
        $("#minContainer").show();
        minPercent = 120;
        //maxPercent = 135;

        minAmount = ((invCapital * 120)/100);
        //maxAmount = ((invCapital * 135)/100);

        let minPercentAmout  = new Intl.NumberFormat({ style: 'currency', currency: 'NGN' }).format(invCapital + minAmount);
        //let maxPercentAmout  = new Intl.NumberFormat({ style: 'currency', currency: 'NGN' }).format(invCapital + maxAmount);

        minAmount = new Intl.NumberFormat({ style: 'currency', currency: 'NGN' }).format(minAmount);
        //maxAmount = new Intl.NumberFormat({ style: 'currency', currency: 'NGN' }).format(maxAmount);

        $("#min_percent").html(minPercent+'%');
        //$("#max_percent").html(maxPercent+'%');

        $("#min_amount").html('₦ '+minAmount);
        //$("#max_amount").html('₦ '+maxAmount);

        $("#min_percent_and_amount").html('₦ '+minPercentAmout);
        //$("#max_percent_and_amount").html('₦ '+maxPercentAmout);
    }
}

function addAmountToFlexInvestmentPlan(e){
    $(e).html('<span class="flex justify-center items-center"><svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff" class="h-4 w-4 mr-2"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity="0.5" cx="18" cy="18" r="18"></circle> <path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(349.238 18 18)"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g></svg> <span class="font-normal">Loading...</span></span>');

    var ajaxPost = $.ajax({
        url: _protocol+""+_shost+"/investor/addamounttoflexplan",
        method: "POST",
        data: $(".flex-plan-form").serialize(),
        dataType: "json",
        headers:{'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
    });

    ajaxPost.done(function(res){
        $(e).html("Select");

        if(res.message == "success"){
            $(".flex-plan-response").html('<div class="alert alert-success"><strong>Amount added successfully.</strong></div>');

            setTimeout(function(){
                window.location.reload();
            },2000);
        }
        else{
            $(".flex-plan-response").html('<div class="alert alert-error"><strong>'+res.message+'</strong></div>');
        }
    });

    ajaxPost.fail(function(res){
    });
}
function createFlexInvestmentPlan(e){
    $(e).html('<span class="flex justify-center items-center"><svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff" class="h-4 w-4 mr-2"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity="0.5" cx="18" cy="18" r="18"></circle> <path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(349.238 18 18)"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g></svg> <span class="font-normal">Loading...</span></span>');

    var ajaxPost = $.ajax({
        url: _protocol+""+_shost+"/investor/flexplan",
        method: "POST",
        data: $(".flex-plan-form").serialize(),
        dataType: "json",
        headers:{'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
    });

    ajaxPost.done(function(res){
        $(e).html("Select");

        if(res.message == "success"){
            $(".flex-plan-response").html('<div class="alert alert-success"><strong>Investment plan created successfully.</strong></div>');

            setTimeout(function(){
                window.location.reload();
            },2000);
        }
        else{
            $(".flex-plan-response").html('<div class="alert alert-error"><strong>'+res.message+'</strong></div>');
        }
    });

    ajaxPost.fail(function(res){
    });
}

function createInvestmentPlan(e){
    $(e).html('<span class="flex justify-center items-center"><svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff" class="h-4 w-4 mr-2"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity="0.5" cx="18" cy="18" r="18"></circle> <path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(349.238 18 18)"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g></svg> <span class="font-normal">Loading...</span></span>');

    var ajaxPost = $.ajax({
        url: _protocol+""+_shost+"/investor/plan",
        method: "POST",
        data: $(".plan-form").serialize(),
        dataType: "json",
        headers:{'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
    });

    ajaxPost.done(function(res){
        $(e).html("Select");

        if(res.message == "success"){
            $(".plan-response").html('<div class="alert alert-success"><strong>Investment plan created successfully.</strong></div>');

            setTimeout(function(){
                window.location.reload();
            },2000);
        }
        else{
            $(".plan-response").html('<div class="alert alert-error"><strong>'+res.message+'</strong></div>');
        }
    });

    ajaxPost.fail(function(res){
    });
}

function sendMessage(e){
      $(e).html("Sending...");

      var ajaxPost = $.ajax({
         type:'POST',
         url:_protocol+""+_shost+"/contact/message",
         data:$(".contact-form").serialize(),
         dataType: "json",
        headers:{'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
      });

      ajaxPost.done(function(res){
        $(e).html("Send Message");
          if(res.message == "success")
          {
            $(".display-success").show();
            $(".display-error").hide();
          }
          else
          {
            $(".display-success").hide();
            $(".display-error").show();
          }
      });

      ajaxPost.fail(function(err){
        console.log(err);
      });
}

function activatePlan(e){
    $(e).html("Processing...");

    let planId = $("#plan-hidden-id").val();

    var ajaxPost = $.ajax({
       type:'PUT',
       url:_protocol+""+_shost+"/investor/plan/activate",
       data:{id: planId},
       dataType: "json",
      headers:{'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
    });

    ajaxPost.done(function(res){
      $(e).html("Activate");
        if(res.message == "success")
        {
          $(".display-success").show();
          $(".display-error").hide();

            setTimeout(function(){
                window.location.reload();
            },1000);
        }
        else
        {
          $(".display-success").hide();
          $(".display-error").show();
        }
    });

    ajaxPost.fail(function(err){
      console.log(err);
    });
}

function restoreUser(e){
    $(e).html("Processing...");

    let planId = $("#plan-hidden-id").val();

    var ajaxPost = $.ajax({
       type:'PUT',
       url:_protocol+""+_shost+"/admin/restore/user",
       data:{id: planId},
       dataType: "json",
      headers:{'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
    });

    ajaxPost.done(function(res){
        $(e).html("Delete");

        if(res.message == "success")
        {
          $(".display-success").show();
          $(".display-error").hide();

            setTimeout(function(){
                window.location = "/admin/users/trash";
            },1000);
        }
        else
        {
          $(".display-success").hide();
          $(".display-error").show();
        }
    });

    ajaxPost.fail(function(err){
      console.log(err);
    });
}
function deleteAdminUser(e){
    $(e).html("Processing...");

    let planId = $("#plan-hidden-id").val();

    var ajaxPost = $.ajax({
       type:'DELETE',
       url:_protocol+""+_shost+"/admin/delete/user",
       data:{id: planId},
       dataType: "json",
      headers:{'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
    });

    ajaxPost.done(function(res){
        $(e).html("Delete");

        if(res.message == "success")
        {
          $(".display-success").show();
          $(".display-error").hide();

            setTimeout(function(){
                // window.location = "/admin/users";
                window.location.reload();
            },1000);
        }
        else
        {
          $(".display-success").hide();
          $(".display-error").show();
        }
    });

    ajaxPost.fail(function(err){
      console.log(err);
    });
}
function adminDeletePlan(e){
    $(e).html("Processing...");

    let planId = $("#plan-hidden-id").val();

    var ajaxPost = $.ajax({
       type:'DELETE',
       url:_protocol+""+_shost+"/investor/plan/delete",
       data:{id: planId},
       dataType: "json",
      headers:{'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
    });

    ajaxPost.done(function(res){
        $(e).html("Delete");

        if(res.message == "success")
        {
          $(".display-success").show();
          $(".display-error").hide();

            setTimeout(function(){
                window.location = "/admin/investments";
            },1000);
        }
        else
        {
          $(".display-success").hide();
          $(".display-error").show();
        }
    });

    ajaxPost.fail(function(err){
      console.log(err);
    });
}
function deletePlan(e){
    $(e).html("Processing...");

    let planId = $("#plan-hidden-id").val();

    var ajaxPost = $.ajax({
       type:'DELETE',
       url:_protocol+""+_shost+"/investor/plan/delete",
       data:{id: planId},
       dataType: "json",
      headers:{'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
    });

    ajaxPost.done(function(res){
        $(e).html("Delete");

        if(res.message == "success")
        {
          $(".display-success").show();
          $(".display-error").hide();

            setTimeout(function(){
                window.location = "/investor/plan";
            },1000);
        }
        else
        {
          $(".display-success").hide();
          $(".display-error").show();
        }
    });

    ajaxPost.fail(function(err){
      console.log(err);
    });
}

function adminDeactivatePlan(e){
    $(e).html("Processing...");

    let planId = $("#plan-hidden-id").val();

    var ajaxPost = $.ajax({
       type:'DELETE',
       url:_protocol+""+_shost+"/investor/plan/deactivate",
       data:{id: planId},
       dataType: "json",
      headers:{'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
    });

    ajaxPost.done(function(res){
        $(e).html("Deactivate");

        if(res.message == "success")
        {
          $(".display-success").show();
          $(".display-error").hide();

            setTimeout(function(){
                window.location = "/admin/investments";
            },1000);
        }
        else
        {
          $(".display-success").hide();
          $(".display-error").show();
        }
    });

    ajaxPost.fail(function(err){
      console.log(err);
    });
}
function deactivatePlan(e){
    $(e).html("Processing...");

    let planId = $("#plan-hidden-id").val();

    var ajaxPost = $.ajax({
       type:'DELETE',
       url:_protocol+""+_shost+"/investor/plan/deactivate",
       data:{id: planId},
       dataType: "json",
      headers:{'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
    });

    ajaxPost.done(function(res){
        $(e).html("Deactivate");

        if(res.message == "success")
        {
          $(".display-success").show();
          $(".display-error").hide();

            setTimeout(function(){
                window.location = "/investor/plan";
            },1000);
        }
        else
        {
          $(".display-success").hide();
          $(".display-error").show();
        }
    });

    ajaxPost.fail(function(err){
      console.log(err);
    });
}

function amountToBePaid(){
    let amnt = document.getElementById("amnt").value;
    let amount = ((20 / 100) * amnt).toFixed();
    document.getElementById("amount_paid").value = amnt - amount;
}

function withdrawFlexCapital(e){
    $(e).html("Processing...");
    let planDetailId = $("#plan-detail-hidden-id").val();
    var ajaxPost = $.ajax({
       type:'POST',
       url:_protocol+""+_shost+"/investor/withdrawal/flex/plan/"+planDetailId,
       data:$("#withdraw-flex-form").serialize(),
       dataType: "json",
      headers:{'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
    });

    ajaxPost.done(function(res){
      $(e).html("Withdraw");
      if(res.message == "success"){
        $(".withdrawal-flex-response").html('<div class="alert alert-success"><h3><strong>Withdrawal request sent!</strong></h3><p>Your request will be processed within 24 hours</p></div>');
        $(e).html("Withdraw");

        setTimeout(function(){
            window.location.reload();
        },2000);
    }
    else{
        $(".withdrawal-flex-response").html('<div class="alert alert-error"><h3><strong>'+res.message+'</strong></h3></div>');
         $(e).html("Withdraw");
    }
    });

    ajaxPost.fail(function(err){
      console.log(err);
    });
}

function withdrawCapital(e){
    $(e).html("Processing...");

    var ajaxPost = $.ajax({
       type:'POST',
       url:_protocol+""+_shost+"/investor/withdrawal/plan",
       data:$("#withdraw-form").serialize(),
       dataType: "json",
      headers:{'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
    });

    ajaxPost.done(function(res){
      $(e).html("Withdraw");
        if(res.message == "success")
        {
          $(".wdisplay-success").show();
          $(".wdisplay-error").hide();

            setTimeout(function(){
                window.location = "/investor/plan";
            },2000);
        }
        else
        {
          $(".wdisplay-success").hide();
          $(".wdisplay-error").show();
          setTimeout(function(){
            $(".wdisplay-error").hide();
            },5000);
        }
    });

    ajaxPost.fail(function(err){
      console.log(err);
    });
}

function depositType(e){
    if($(e).val() == "direct-transfer"){
        $("#direct-transfer-box").show();
        $("#paystack-box").hide();
    }
    else{
        $("#direct-transfer-box").hide();
        $("#paystack-box").show();
    }
}

function copyToClipboard(e) {
    /* Get the text field */
    var copyText = document.getElementById("refcode-box");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    $(e).html("Copied!");

    setTimeout(function(){
        $(e).html("Copy");
    }, 2000);
}

function activateConfirm(e){ 
    let planId = $(e).attr("data-id");

    $("#plan-hidden-id").val(planId);

    $("#activate-confirm").show();
}

function deleteConfirm(e){ 
    let planId = $(e).attr("data-id");

    $("#plan-hidden-id").val(planId);

    $("#delete-confirm").show();
}

function restoreConfirm(e){ 
    let planId = $(e).attr("data-id");

    $("#plan-hidden-id").val(planId);

    $("#restore-confirm").show();
}

function changeDepositStatus(e){
    $(e).html('<span class="flex justify-center items-center"><svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff" class="h-4 w-4 mr-2"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity="0.5" cx="18" cy="18" r="18"></circle> <path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(349.238 18 18)"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g></svg> <span class="font-normal">Loading...</span></span>');
    let planId = $("#plan-hidden-id").val();
    var ajaxPost = $.ajax({
        url: _protocol+""+_shost+"/admin/change/deposit/status/"+planId,
        method: "POST",
        data: $(".change-deposit-status-form").serialize(),
        dataType: "json",
        headers:{'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
    });

    ajaxPost.done(function(res){
        if(res.status == 201){
            $(".adminadd-response").html('<div class="alert alert-success"><h3><strong>Deposit Status Changed Successfully!</strong></h3></div>');
            $(e).html("Withdraw");

            setTimeout(function(){
                window.location.reload();
            },2000);
        }
        else{
            $(".adminadd-response").html('<div class="alert alert-error"><h3><strong>'+res.message+'</strong></h3></div>');
             $(e).html("Withdraw");
        }
    });
}
function addSubcriber(e){
    // $(e).html('<span class="flex justify-center items-center"><svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff" class="h-4 w-4 mr-2"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity="0.5" cx="18" cy="18" r="18"></circle> <path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(349.238 18 18)"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g></svg> <span class="font-normal">Loading...</span></span>');
    
    let formData = new FormData();           
    formData.append("firstname", document.getElementsByName("firstname")[0].value);
    formData.append("email", document.getElementsByName("email")[0].value);
    var ajaxPost = $.ajax({
        url: _protocol+""+_shost+"/subscribe",
        method: "POST",
        data: formData,
        dataType: "json",
        processData: false,
        contentType: false,
        headers:{'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
    });

    ajaxPost.done(function(res){
        if(res.status == 201){
            $(".subscribe-response").html('<div class="alert alert-success"><h3><strong>Subcribed Successfully!</strong></h3></div>');
            $(e).html("Subscriber Added");

            setTimeout(function(){
                window.location.reload();
            },2000);
        }
        else{
            $(".subscribe-response").html('<div class="alert alert-error"><h3><strong>'+res.message+'</strong></h3></div>');
             $(e).html("Subscribe");
        }
    });
}
function addDepositStatus(e){
    $(e).html('<span class="flex justify-center items-center"><svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff" class="h-4 w-4 mr-2"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity="0.5" cx="18" cy="18" r="18"></circle> <path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(349.238 18 18)"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g></svg> <span class="font-normal">Loading...</span></span>');
    
    let formData = new FormData();           
    formData.append("user_id", document.getElementsByName("user_id")[0].value);
    formData.append("amount", document.getElementsByName("amount")[0].value);
    formData.append("status", document.getElementsByName("status")[0].value);
    formData.append("proof", document.getElementsByName("proof")[0].files[0]);
    var ajaxPost = $.ajax({
        url: _protocol+""+_shost+"/admin/user/deposit/create",
        method: "POST",
        data: formData,
        dataType: "json",
        processData: false,
        contentType: false,
        headers:{'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
    });

    ajaxPost.done(function(res){
        if(res.status == 201){
            $(".adminadd-deposit-response").html('<div class="alert alert-success"><h3><strong>Deposit Added Successfully!</strong></h3></div>');
            $(e).html("Withdraw");

            setTimeout(function(){
                window.location.reload();
            },2000);
        }
        else{
            $(".adminadd-deposit-response").html('<div class="alert alert-error"><h3><strong>'+res.message+'</strong></h3></div>');
             $(e).html("Withdraw");
        }
    });
}

function addDepositPrompt(e){ 
    $("#add-deposit").show();
}
function changeStatusPrompt(e){ 
    let planId = $(e).attr("data-id");
    let planValue = $(e).attr("data-value");

    $("#plan-hidden-id").val(planId);
    $("#plan-hidden-value").val(planValue);
    $("#status").val(planValue);

    $("#change-deposit-status").show();
}

function changeWithdrawalStatus(e){
    $(e).html('<span class="flex justify-center items-center"><svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff" class="h-4 w-4 mr-2"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity="0.5" cx="18" cy="18" r="18"></circle> <path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(349.238 18 18)"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g></svg> <span class="font-normal">Loading...</span></span>');
    let planId = $("#plan-hidden-id").val();
    var ajaxPost = $.ajax({
        url: _protocol+""+_shost+"/admin/change/withdrawal/status/"+planId,
        method: "POST",
        data: $(".change-withdrawal-status-form").serialize(),
        dataType: "json",
        headers:{'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
    });

    ajaxPost.done(function(res){
        if(res.status == 201){
            $(".adminadd-response").html('<div class="alert alert-success"><h3><strong>Withdrawal Status Changed Successfully!</strong></h3></div>');
            $(e).html("Withdraw");

            setTimeout(function(){
                window.location.reload();
            },2000);
        }
        else{
            $(".adminadd-response").html('<div class="alert alert-error"><h3><strong>'+res.message+'</strong></h3></div>');
             $(e).html("Withdraw");
        }
    });
}

function changeWithdrawalStatusPrompt(e){ 
    let planId = $(e).attr("data-id");
    let planValue = $(e).attr("data-value");

    $("#plan-hidden-id").val(planId);
    $("#plan-hidden-value").val(planValue);
    $("#withdrawalstatus").val(planValue);

    $("#change-withdrawal-status").show();
}

function deactivateConfirm(e){ 
    let planId = $(e).attr("data-id");

    $("#plan-hidden-id").val(planId);

    $("#deactivate-confirm").show();
}


$('.search-input').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        event.preventDefault();
        getDriveFiles(); 
    }
});

$(".user-settings").on("click",function(){
    $(".profile-dropdown").addClass("show");
});

$(document).on("click",function(event){
    var trigger = $(".user-settings");
    if(trigger !== event.target && !trigger.has(event.target).length){
        $(".profile-dropdown").removeClass("show");
    }  
});

$('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
});

$('#confirm-password').on('keyup', function(){
    var password = $("#p-password").val();
    var confirmPassword = $("#confirm-password").val();

    if(password === confirmPassword && (password != "" && confirmPassword != "")){
        $('#match-message').html('Password Match').css('color', 'green');
        $('#submit-btn').removeAttr("disabled");
    } else if(password != "" && confirmPassword != "") {
        $('#match-message').html('Password Mismatch').css('color', 'red');
        $('#submit-btn').attr("disabled", "disabled");
    }
    else{
        $('#match-message').html('');
        $('#submit-btn').attr("disabled", "disabled");
    }
});








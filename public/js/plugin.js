var _shost = window.location.host;
const protocol = window.location.protocol+"//";
const apiURL = protocol+_shost+"/";

let Plugin = {
    registerUser: function(e){
		$(e).html("<span>Processing...</span>");
        let serializeData = $(".register-form").serializeArray();

        let myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');	
		myHeaders.append('X-CSRF-TOKEN', $('meta[name="csrf-token"]').attr('content'));	

        let jsonData = {
			"firstname": serializeData[0].value,
			"lastname": serializeData[1].value,
			"phone": serializeData[2].value,
			"email": serializeData[3].value,
			"password": serializeData[4].value,
			"password_confirmation": serializeData[5].value,
			"referral_code": serializeData[6].value
		}

		var postData = JSON.stringify(jsonData);	

		let requestOptions = {
			method: 'POST',
            headers: myHeaders,
			body: postData,
            mode: 'same-origin'
		};

		fetch(apiURL+'register', requestOptions)
		.then(response => response.json())
		.then(result => {	

			$(".err-txt").html("");

			if(result.code == '00'){
				$(".display-success").show();
				$(e).html("<span>Sign up</span>");

				setTimeout(function(){	
					location.href = "/investor/dashboard";
				}, 1000);
			}
			else{
				
				$(".display-success").hide();
				$(e).html("<span>Sign up</span>");
				
				if(result.message.hasOwnProperty('firstname')){
					result.message.firstname.forEach(element => {
						$("#firstname-err").append("<strong>"+element+"</strong><br>" );
					});
				}	

				if(result.message.hasOwnProperty('lastname')){

					result.message.lastname.forEach(element => {
						$("#lastname-err").append("<strong>"+element+"</strong><br>" );
					});
				}

				if(result.message.hasOwnProperty('email')){
					result.message.email.forEach(element => {
						$("#email-err").append("<strong>"+element+"</strong><br>" );
					});
				}	

				if(result.message.hasOwnProperty('phone')){
					result.message.phone.forEach(element => {
						$("#phone-err").append("<strong>"+element+"</strong><br>" );
					});
				}

				if(result.message.hasOwnProperty('password')){
					result.message.password.forEach(element => {
						$("#password-err").append("<strong>"+element+"</strong><br>" );
					});
				}		
			}
				
		})
		.catch(error => {
			$(".display-success").hide();
			$(e).html("<span>Sign up</span>");
		});
    },

	loginUser: function(e){
		$(e).html("<span>Processing...</span>");

        let serializeData = $(".login-form").serializeArray();

        let myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');
		myHeaders.append('X-CSRF-TOKEN', $('meta[name="csrf-token"]').attr('content'));		

        let jsonData = {
			"email": serializeData[0].value,
			"password": serializeData[1].value
		}

		var postData = JSON.stringify(jsonData);	

		let requestOptions = {
			method: 'POST',
            headers: myHeaders,
			body: postData,
            mode: 'same-origin'
		};

		fetch(apiURL+'login', requestOptions)
		.then(response => response.json())
		.then(result => {	
			$(".err-txt").html("");

			if(result.code == '00'){
				$(".display-success").show();
				$(".display-error").hide();
				$(e).html("<span>Sign in</span>");
				localStorage.setItem('userEmail', jsonData.email);
				
				setTimeout(function(){
					location.href = '/investor/dashboard'
				},1000);
			}
			else{
				$(".display-success").hide();	
				$(".display-error").show();	

				$("#alert-danger-text").html(result.message);	

				$(e).html("<span>Sign in</span>");			
				
			}

			setTimeout(function(){
				$(".display-success").hide();
				$(".display-error").hide();
				$(e).html("<span>Sign in</span>");
			}, 1000)
				
		})
		.catch(error => { });
    },

	loginAdmin: function(e){
		$(e).html("<span>Processing...</span>");

        let serializeData = $(".login-form").serializeArray();

        let myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');
		myHeaders.append('X-CSRF-TOKEN', $('meta[name="csrf-token"]').attr('content'));		

        let jsonData = {
			"email": serializeData[0].value,
			"password": serializeData[1].value
		}

		var postData = JSON.stringify(jsonData);	

		let requestOptions = {
			method: 'POST',
            headers: myHeaders,
			body: postData,
            mode: 'same-origin'
		};

		fetch(apiURL+'admin/login', requestOptions)
		.then(response => response.json())
		.then(result => {	
			$(".err-txt").html("");

			if(result.code == '00'){
				$(".display-success").show();
				$(".display-error").hide();
				$(e).html("<span>Sign in</span>");
				localStorage.setItem('userEmail', jsonData.email);
				
				setTimeout(function(){
					location.href = '/admin/dashboard'
				},1000);
			}
			else{
				$(".display-success").hide();	
				$(".display-error").show();	

				$("#alert-danger-text").html(result.message);	

				$(e).html("<span>Sign in</span>");			
				
			}

			setTimeout(function(){
				$(".display-success").hide();
				$(".display-error").hide();
				$(e).html("<span>Sign in</span>");
			}, 1000)
				
		})
		.catch(error => { });
    },

	sendResetPasswordLink: function(e){
		$(e).html('<span class="flex justify-center items-center"><svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff" class="h-4 w-4 mr-2"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity="0.5" cx="18" cy="18" r="18"></circle> <path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(349.238 18 18)"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g></svg> <span class="font-normal">Loading...</span></span>');
	
		var ajaxPost = $.ajax({
			url: apiURL+"send/reset/password/link",
			method: "POST",
			data: $("#forgotPasswordLink").serialize(),
			dataType: "json",
			headers:{'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
		});
	
	
		ajaxPost.done(function(res){
			$(e).html("Request password reset link");
	
			if(res.message == "success"){
				$(".display-success").show();
				$(".display-error").hide();
			}
			else{
				$(".display-success").hide();
				$(".display-error").show();
			}
		});
	
		ajaxPost.fail(function(res){
		});
	},

	resetPassword: function(e){
		$(e).html('<span class="flex justify-center items-center"><svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff" class="h-4 w-4 mr-2"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity="0.5" cx="18" cy="18" r="18"></circle> <path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(349.238 18 18)"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g></svg> <span class="font-normal">Loading...</span></span>');
	
		var ajaxPost = $.ajax({
			url: apiURL+"reset",
			method: "PUT",
			data: $("#resetPassword").serialize(),
			dataType: "json",
			headers:{'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
		});
	
	
		ajaxPost.done(function(res){
			$(e).html("Reset Password");
	
			if(res.message == "success"){
				$(".display-success").show();
				$(".display-error").hide();

				setTimeout(function(){
					location.href = "/login";
				}, 2000);
			}
			else{
				$(".display-success").hide();
				$(".display-error").show();
			}
		});
	
		ajaxPost.fail(function(res){
		});
	},

	showOrHidePassword(e){
		let featherEye = $(e).find(".feather-eye")[0];
		let featherEyeOff = $(e).find(".feather-eye-off")[0];
		let _password = $(e).parent().find("input")[0];

		if(featherEye != undefined && featherEyeOff != undefined){
			if($(featherEye).hasClass("hidden")){
				$(featherEye).removeClass("hidden");
				$(featherEyeOff).addClass("hidden");
				$(_password).attr("type","password");
			}
			else{
				$(featherEye).addClass("hidden");
				$(featherEyeOff).removeClass("hidden");
				$(_password).attr("type","text");
			}
		}
	},

	checkPasswordStrength(e){
		$("#password-err").html("");
		
		let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');

		if(!strongPassword.test($(e).val())) {
			$("#password-err").append("<strong>&middot Password must be at least 8 characters long.</strong><br>"+
			"<strong>&middot Password must have at least one uppercase letter.</strong><br> "+
				"<strong>&middot Password must have at least one lowercase letter.</strong><br>"+
				"<strong>&middot Password must have at least one digit.</strong><br>"+
				"<strong>&middot Password must have at least one special character e.g @,!,#,$,%.</strong><br>" );
        } 
	},

}
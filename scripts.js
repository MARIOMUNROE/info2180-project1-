window.onload=function(){
	let btn=document.getElementsByTagName("button")[0];
	let message=document.getElementsByClassName("message")[0];
	let email=document.getElementsById("email");
	
	btn.addEventListener("click", function(e){
		e.preventDefault();
		var email = newemail.value;
		
		if (email.indexOf(' ') <=0)
		{
			message.textContent="Please enter an email";
		}
		else {
			message.textContent='Thank you! Your email address ${newemail} has been added to our mailing list!';
		}
	}
}

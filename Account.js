                            // Nav bar burger Menu
function burger(){
    document.getElementById("BarDropDiv-Container").classList.toggle("active")
}           
                            //  End of Nav bar burger Menu

function Link(cmd){

	// alert(cmd)

	if (cmd == 'Log') {
		// hide the signup form
		// show the login form
		document.getElementById('createAccount').style.display='block';
		document.getElementById('login').style.display='none';
	
	}else if(cmd == 'Sign'){

		// hide the login form
		// show the signup form
		document.getElementById('createAccount').style.display='none';
		document.getElementById('login').style.display='block';

	}
}
                                // password confirmation
var check = function() {
    if (document.getElementById('SignUpPassword').value ==
      document.getElementById('SignUpPassword2').value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'matching';
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'not matching';
    }
  }

  var email_details = []
  var password_details = []

function access(tam){
  
  if (tam == 'signup') {

      var email1 = document.getElementById('usr').value;
      var pass1 = document.getElementById('SignUpPassword2').value;

      email_details.push(email1)
      password_details.push(pass1)
      
      console.log(email_details)
      console.log(password_details)

  }else if(tam == 'login'){

      var email2 = document.getElementById('login_UserEmail').value;
      var pass2 = document.getElementById('login_password').value;


      var email_ = false;
      for (var i = 0; i < email_details.length; i++) {
          
          console.log(email_details[i])
          if (email2 == email_details[i]) {
              email_ = true;
              break;
          }else{
              email_ = false;
          }
      }

      var pass_ = false;
      for (var j = 0; j < password_details.length; j++) {
          
          console.log(password_details[j])
          if (pass2 == password_details[j]) {
              pass_ = true;
              break;
          }else{
              pass_ = false;
          }
      }

      if (pass_ == true && email_ == true) {
          alert('Access Granted')
      }else{
          alert('Incorrect login details!')
      }
  }
}

                    // Forgot Password
                    
function forgot(){
    alert('Forbidden register again')
}



  
// var users={name:[], password:[]};
//   function register ()
//   {
//     usr=document.getElementById('usr');
//     pwd=document.getElementById('SignUpPassword2');
//     users["name"].push(usr);
//     users["password"].push(pwd);
//   }
  
//   function login ()
//   {
//   uname=document.getElementById('login_UserEmail');
//   passwd=document.getElementById('login_password');
  
//   if(uname==users["name"])
//   {
//   if(passwd==users["password"]){
//     alert("Welcome!")
//   }
//   else{
//     alert("Wrong Password!");
//   }
//   elseif (passwd!=users)
//     {
//         alert("Wrong Username!");
//  }
//   }
// }
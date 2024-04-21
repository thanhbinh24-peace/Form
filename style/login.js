//ham reset
function resetForm() {
  document.getElementById('username').value="";
  document.getElementById('password').value="";
  document.getElementById('email').value="";
  document.getElementById('repass').value="";
  document.getElementById("note").innerText="";
}


//ham de hien thi icon eye
function eyeOn() {
  var eye=document.getElementById('off');
  var pass=document.getElementById('pass');
  if(pass.type==='password') {
    pass.type='text';
    eye.classList.remove('fa-eye-slash');
    eye.classList.add('fa-eye');
  }
  else {
    pass.type='password';
    eye.classList.remove('fa-eye');
    eye.classList.add('fa-eye-slash');
  }
}

//cac ham kiem tra
function signUp() {
  var username=document.getElementById('username').value;
  var email=document.getElementById('email').value;
  var password=document.getElementById('password').value;
  var repassword=document.getElementById('repass').value;
  var show=document.getElementById('note');
  if (username==="" ||email==="" ||password==="" || repassword==="")
  {
    document.getElementById("note").innerText="Please provide all information requested"
  }
  else if (username.length<4){
    document.getElementById("note").innerText="Name must be at least 4 characters long";
    return false;
  }
  else if (!checkEmail(email)) {
    document.getElementById("note").innerText="Email is invalid"
      return false;
  } 
  else if(password.length<8) {
    document.getElementById("note").innerText="Password must be a least 8 characters long";
    return false;
  }
  else if (password!=repassword) {
    document.getElementById("note").innerText="Password does not match";
    return false;
  }
  else {
    document.getElementById("note").innerText="Sign up successfully";
    return true;
  }
}
//ham kiem tra email
function checkEmail(email) {
  var check = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return check.test(email);
} 

function logIn() {
  var user=document.getElementById('user').value;
  var pass=document.getElementById('pass').value;
  if (user==="") {
    alert("Please provide all information requested")
    return false;
  }
  if (pass==="")
  {
    alert("Please provide all information requested")
    return false;
  }
  else {
    alert("Log in successfully")
    return true;
  }
}

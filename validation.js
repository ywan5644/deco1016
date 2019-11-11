
var username = document.forms['vform']['username'];
var email = document.forms['vform']['email'];
var password = document.forms['vform']['password'];
var password_confirm = document.forms['vform']['password_confirm'];
var First_name = document.forms['vform']['First_name'];
var Last_name = document.forms['vform']['Last_name'];
var address = document.forms['vform']['address'];
var postcode = document.forms['vform']['postcode'];

var name_error = document.getElementById('name_error');
var email_error = document.getElementById('email_error');
var password_error = document.getElementById('password_error');
var firstname_error = document.getElementById('firstName_error');
var lastname_error = document.getElementById('lastName_error');
var address_error = document.getElementById('address_error');
var postcode_error = document.getElementById('postcode_error');

username.addEventListener('blur', nameVerify, true);
email.addEventListener('blur', emailVerify, true);
password.addEventListener('blur', passwordVerify, true);
First_name.addEventListener('blur', firstNameVerify, true);
Last_name.addEventListener('blur', lastNameVerify, true);
address.addEventListener('blur', addressVerify, true);
postcode.addEventListener('blur', postcodeVerify, true);

function Validate() {
  if (username.value == "") {
    username.style.border = "1px solid red";
    document.getElementById('username_div').style.color = "red";
    name_error.textContent = "Username is required";
    username.focus();
    return false;
  }
  if (username.value.length < 3) {
    username.style.border = "1px solid red";
    document.getElementById('username_div').style.color = "red";
    name_error.textContent = "Username must be at least 3 characters";
    username.focus();
    return false;
  }
  if (email.value == "") {
    email.style.border = "1px solid red";
    document.getElementById('email_div').style.color = "red";
    email_error.textContent = "Email is required";
    email.focus();
    return false;
  }
  if (password.value == "") {
    password.style.border = "1px solid red";
    document.getElementById('password_div').style.color = "red";
    password_confirm.style.border = "1px solid red";
    password_error.textContent = "Password is required";
    password.focus();
    return false;
  }
  if (password.value != password_confirm.value) {
    password.style.border = "1px solid red";
    document.getElementById('pass_confirm_div').style.color = "red";
    password_confirm.style.border = "1px solid red";
    password_error.innerHTML = "The two passwords do not match";
    return false;
  }
  if (First_name.value == "") {
    First_name.style.border = "1px solid red";
    document.getElementById('First_name').style.color = "red";
    firstName_error.textContent = "First name is required";
    First_name.focus();
    return false;
  }
  if (Last_name.value == "") {
    First_name.style.border = "1px solid red";
    document.getElementById('Last_name').style.color = "red";
    lastName_error.textContent = "Last name is required";
    last_name.focus();
    return false;
  }
  if (address.value == "") {
    address.style.border = "1px solid red";
    document.getElementById('address').style.color = "red";
    address_error.textContent = "Address name is required";
    address.focus();
    return false;
  }
  if (postcode.value == "") {
    postcode.style.border = "1px solid red";
    document.getElementById('postcode').style.color = "red";
    postcode_error.textContent = "Post code name is required";
    postcode.focus();
    return false;
  }
}
function nameVerify() {
  if (username.value != "") {
   username.style.border = "1px solid #5e6e66";
   document.getElementById('username_div').style.color = "#5e6e66";
   name_error.innerHTML = "";
   return true;
  }
}
function emailVerify() {
  if (email.value != "") {
  	email.style.border = "1px solid #5e6e66";
  	document.getElementById('email_div').style.color = "#5e6e66";
  	email_error.innerHTML = "";
  	return true;
  }
}
function passwordVerify() {
  if (password.value != "") {
  	password.style.border = "1px solid #5e6e66";
  	document.getElementById('pass_confirm_div').style.color = "#5e6e66";
  	document.getElementById('password_div').style.color = "#5e6e66";
  	password_error.innerHTML = "";
  	return true;
  }
  if (password.value === password_confirm.value) {
  	password.style.border = "1px solid #5e6e66";
  	document.getElementById('pass_confirm_div').style.color = "#5e6e66";
  	password_error.innerHTML = "";
  	return true;
  }
}
function firstNameVerify(){
  if (First_name.value != "") {
    First_name.style.border = "1px solid #5e6e66";
    document.getElementById('First_name').style.color = "#5e6e66";
    firstName_error.innerHTML = "";
    return true;
   }
 }
 function lastNameVerify(){
  if (Last_name.value != "") {
    Last_name.style.border = "1px solid #5e6e66";
    document.getElementById('Last_name').style.color = "#5e6e66";
    firstName_error.innerHTML = "";
    return true;
   }
  }
  function addressVerify(){
    if (address.value != "") {
      address.style.border = "1px solid #5e6e66";
      document.getElementById('address').style.color = "#5e6e66";
      address_error.innerHTML = "";
      return true;
     }
    }
    function postcodeVerify(){
      if (postcode.value != "") {
        postcode.style.border = "1px solid #5e6e66";
        document.getElementById('postcode').style.color = "#5e6e66";
        postcode_error.innerHTML = "";
        return true;
       }
      }
let cpasswordinput = document.getElementById('cpassword');
let passwordinput = document.getElementById('password');

cpasswordinput.addEventListener('input', check)
passwordinput.addEventListener('input', check)



function check() {
  match = passwordinput.value !== cpasswordinput.value ? false : true
  console.log('I tested ' + match)
  if(match) {
    cpasswordinput.setCustomValidity("");
  }
  else {
    cpasswordinput.setCustomValidity("Passwords do not match");
  }
}
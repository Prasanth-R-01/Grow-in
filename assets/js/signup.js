document.querySelector('.img-btn').addEventListener('click', function() {
  document.querySelector('.cont').classList.toggle('s-signup')
  // document.title = "Sign Up | Agrogence"
});


// function signup(){
// 	document.title = "Sign Up | Agrogence"
// }

var password = document.getElementById("password"),
  confirm_password = document.getElementById("confirm_password");

function validatePassword() {
  	if (password.value != confirm_password.value) {
      confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
      confirm_password.setCustomValidity('');
    }

  }

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
//
// function showFunc() {
//     document.getElementById("pass").style.visibility = "visible";
// 		var element = document.getElementById("c_pass");
//   element.classList.remove("margin-neg");
// };
//
// function hideFunc() {
//     document.getElementById("pass").style.visibility = "hidden";
// 		var element = document.getElementById("c_pass");
// 	element.classList.add("margin-neg");
// 		// document.getElementById("c_pass").style.marginTop = "-10%!important";
// };


function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
}

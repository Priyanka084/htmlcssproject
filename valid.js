var email = document.forms['form']['email']
var password = document.forms['form']['password']




function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
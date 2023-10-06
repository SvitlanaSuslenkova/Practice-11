  let errorCircle = document.querySelector(".errorCircle");
  let textError = document.querySelector(".textError");

  function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
        errorCircle.style.display='none';
        textError.style.display='none';
        document.form1.email.focus();
        input.value="Your email was submitted!";
  
      return true; /*What does it give?*/ 
  } 
  else {
        errorCircle.style.display='block';
        textError.style.display='block';
        document.form1.email.focus();
  
      return false; /*What does it give?*/ 
  }
  }
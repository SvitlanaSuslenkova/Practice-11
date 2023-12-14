'use strict';
  let errorCircle = document.querySelector(".errorCircle");
  let textError = document.querySelector(".textError");
  let input = document.querySelector(".emailarea");

  function validateEmail(event) {
    event.preventDefault();
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
        errorCircle.style.display='none';
        textError.style.display='none';
       input.value="Your email was submitted!";

  } 
  else {
        errorCircle.style.display='block';
        textError.style.display='block';
       document.form1.email.focus(); 
  }
  }

  input.addEventListener ('input', function(){
    errorCircle.style.display='none';
    textError.style.display='none';
  });

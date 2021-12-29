const input = document.getElementById("validation-input");

console.log(input);

input.addEventListener("blur", onInputChange => {   
  if(input.value.length + "" === input.dataset.length) { 
    input.classList.add("valid")
    input.classList.remove("invalid")
  }else{ 
    input.classList.add("invalid")
    input.classList.remove("valid")
  }
  });



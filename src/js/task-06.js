const input = document.getElementById("validation-input");

console.log(input);

input.addEventListener("blur", onInputChange => {   
  if(input.value.length == input.dataset.length) { 
    return input.classList.add("valid") 
} 
     input.classList.add("invalid")
});



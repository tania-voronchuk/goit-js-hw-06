const form = document.querySelector(".login-form");

  form.addEventListener("submit", (event) => {
  event.preventDefault();

   const formElements = event.currentTarget.elements;
   const email = formElements.email.value;
   const password = formElements.password.value; 
  
  if (formElements.email.value === "" || formElements.password.value === "") {
    return alert("Пожалуйста, заполните все поля!");
 }
   event.currentTarget.reset();

   const formData = {
    email,
    password,  
};
  console.log(formData);
});

const input = document.getElementById("name-input");
let output = document.getElementById("name-output");

input.addEventListener("input", (event) => {
    console.log('event', event.target.value);
    output.textContent = event.target.value? event.target.value : "Anonymous";     
});
console.log(input, output);


const counterEl = document.getElementById("value");
let counterValue = 0;
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const decrementBtnEl = document.querySelector('[data-action="decrement"]');

incrementBtnEl.addEventListener("click", () => {
    counterValue +=1;
    counterEl.textContent = counterValue;
    console.log(counterValue)
});

decrementBtnEl.addEventListener("click", () => {
    counterValue -=1;
    counterEl.textContent = counterValue;
    console.log(counterValue)
});

 

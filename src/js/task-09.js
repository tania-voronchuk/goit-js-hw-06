const bodyEl = document.querySelector("body");
const BtnEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

BtnEl.addEventListener("click", backgroundСolor => {
const color = getRandomHexColor(); 
bodyEl.style.backgroundColor = color;
spanEl.textContent = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const navEl = document.querySelectorAll(".item");
console.log('Number of categories:', navEl.length);

navEl.forEach(element => {
console.log('Category:', element.querySelector("h2").textContent, 
'Elements:', element.querySelectorAll("ul>li").length);
});



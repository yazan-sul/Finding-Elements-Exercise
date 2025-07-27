const trueButton = document.getElementById("#button");
trueButton.addEventListener("click", () => { 
    trueButton.textContent = trueButton.textContent.toUpperCase();
});

const h1 = document.getElementsByTagName("h1");
h1.addEventListener("mouseover", ()=> {
    h1.textContent = "hovering";    
});
h1.addEventListener("mouseout", ()=> {
    h1.textContent = "Quiz.js";    
});

const p = document.getElementsByTagName("p");  
for (let i = 0; i < p.length; i++) {
    console.log(p[i].textContent); 
}

const elements = document.querySelectorAll("*");
const targetX = Array.from(elements).find(el => el.textContent.trim() === "X");
console.log(targetX);

const numberOfSquares = document.querySelectorAll(".square").length

const target = Array.from(elements).find(el => el.textContent.trim() === "A game You Know");
console.log(target);

// first exercise

document.getElementById("p1-name").textContent = "you";

document.getElementById("p2-name").textContent = "neighbour";

const p1Symbol = document.getElementById("p1-symbol").textContent;
const p2Symbol = document.getElementById("p2-symbol").textContent;

document.getElementById("p1-symbol").textContent = p2Symbol;
document.getElementById("p2-symbol").textContent = p1Symbol;

document.querySelector('header h2').append("and love");
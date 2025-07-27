function showButton(buttonId, enable){
    const button = document.getElementById(buttonId);
    if(button)
        button.disabled = !enable;
}
const facts = {
    statment: "Arrays like objects",
    answer: true,
    explanation: "arrays are a kind of object with special properties"
}
function isCorrect(guess){
    return guess === facts.answer;
}
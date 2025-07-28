const optionsButtons = document.querySelectorAll(".options");
console.log(optionsButtons);
const disable = (button)=>{
    button.setAttribute("disabled","");
}
for(let btn of optionsButtons){
    btn.addEventListener("click", () =>{
        console.log("you clicked!");
        console.log("------------");
    });
    for(let otherbtn of optionsButtons){
        otherbtn.addEventListener("click", () =>{
            disable(otherbtn)
        });
    }
}

const optionsButtons = document.querySelectorAll(".options");
console.log(optionsButtons);
for(let btn of optionsButtons){
    btn.addEventListener("click", () =>{
        console.log("you clicked!");
        console.log("------------");
    });
    btn.addEventListener("click", () =>{
        btn.disabled = true; 
    });
    
}

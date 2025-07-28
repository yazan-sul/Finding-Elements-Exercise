function check(firstname, lastname){
    if(firstname.length > lastname.length){
        console.log(firstname," is longer than ", lastname);
    }
    else if(firstname.length < lastname.length){
        console.log(lastname, "  is longer than ", firstname);
    }
    else{
        console.log("equal length");
    }
}
check("yazan", "aaaahm");

function isEmpty(array){
    if(array.length === 0) return true;
    return false;
}
console.log(isEmpty([]));

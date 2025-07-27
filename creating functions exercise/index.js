function multibly(a,b){
    return a * b;
}
function yell(st){
    console.log(st.toUpperCase());
}
function longerThan(array1, array2){
    if(array1.length > array2.length) return true;
    return false;
}
console.log(longerThan([1], [1,2]))
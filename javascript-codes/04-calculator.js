function add(a,b){
return a+b;

}
function substract(a,b){
    return a-b;

}
function multiplication(a,b){
    return a*b;

}

function divide(a,b){
    if(b==0){
        console.error("Division by zero is not feasible")
        return;
    }
return a/b;

}



console.log(add(2,3));
console.log(substract(5,6));
console.log(multiplication(7,6));
console.log(divide(10,2));

//calculating power 
//calculating factorial
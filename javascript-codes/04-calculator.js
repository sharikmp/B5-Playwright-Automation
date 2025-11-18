function add(a, b) {
    return a + b;

}
function substract(a, b) {
    return a - b;

}
function multiplication(a, b) {
    return a * b;

}

function divide(a, b) {
    if (b == 0) {
        console.error("Division by zero is not feasible")
        return;
    }
    return a / b;

}



console.log(add(2, 3));
console.log(substract(5, 6));
console.log(multiplication(7, 6));
console.log(divide(10, 2));

//calculating power 

function power(a, b) {
    let isNegative = false;
    if (b < 0) {
        isNegative = true;//assigning
        b = -1 * b;
    }
    let product = 1;
    for (let i = 0; i < b; i++) {
        product *= a;
    }
    if (isNegative == true) { //comparing
        return 1 / product
    }
    return product;

}
console.log(power(10, -3));
//without taking boolean find power task  library called math

function power1(a, b) {
    let product1 = 1;
    let c = Math.abs(b);
    for (let i = 0; i < c; i++) {
        product1 *= a;

    }
    if (b < 0) {
        return 1 / product1
    }
    else {
        return product1;
    }
}
console.log(power1(2, -2));
console.log(power1(2, 2));

//using ternary operator

function power3(a, b) {
    let product3 = 1;
    let c=Math.abs(b);

for (let i = 0; i <= c; i++) 
    {

        product3 *= a;
    }
    return b<0?1/product3:product3;
}

console.log(power3(2,-2));


//calculating factorial
function factorial(n){
    let prd=1;
for(let i=n;i>0;i--){
    
    prd*=i;
}
return prd;
}
console.log(factorial(5));


//Math.abs
//const power=b<0? using ternarynoperator
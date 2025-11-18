
for(let i = 0; i < 10; i++) {
    console.log(i);
}

console.log("Loop completed!");

let names = ['Amy', 'Bob', 'Charles', 'Don1', 'Don2', 'Don3', 'Don4', 'Don5'];
let marks = [90, 80, 98, 65, 100, 190, 60, 85];
console.log(names.length);

for(let i = 0; i < 4; i++) {
    console.log(names[i]);
}

// Task: Print Marks along with name like - Amy scored 90

for(let i=0;i<8;i++){
    console.log(`${names[i]} scored ${marks[i]}`)

}

// Task: Calc and print the highest and lowest scorer with name - Charles scored 98 
console.log("===== Lowest scorer calculation =========")

const smallest=Math.min(...marks);

for(let i=0;i<=names.length;i++){

    if(marks[i]==smallest){
        console.log(names[i],marks[i])
        break
    }
}

console.log("===== Highest scorer calculation =========")

const largest = Math.max(...marks);

for(let i = 0; i < names.length; i++) {
    if(marks[i] === largest) {
        console.log(names[i], marks[i]);
        break;
    }
}

console.log("===== Total Marks calculation =========")

const johnMarks = [90, 91, 92, 94, 95];

let totalMarks = 0;

for(let i = 0; i < johnMarks.length; i++) {
    totalMarks += johnMarks[i];
}

console.log("Total marks:", totalMarks);


console.log("========== Find the sum of 'n' Natural numbers ============")

// Task: Find the sum of 'n' Natural numbers 

//const n = 1000; // 1 + 2 + 3 + ... + 999 + 1000

function sumOfNatutalNumbers(n) {
    // loop
    let sum=0;
    for(let i=0;i<=n;i++){
        sum=sum+i;
    }
    return sum;
}
console.log(sumOfNatutalNumbers(10));

//console.log(sumOfNatutalNumbers(200));
//console.log(sumOfNatutalNumbers(1000));
//console.log(sumOfNatutalNumbers(10000));



console.log("========== Print the array (names) in reverse order ============");

for(let i=names.length;i>=0;i--){

console.log(names[i])

}


//Find the array name with while loop
const names1 = ['Amy', 'Bob', 'Charles', 'Don1', 'Don2', 'Don3', 'Don4', 'Don5'];
let searchname='Charles';

while (true) {
    if (names1.includes(searchname)) {
        console.log(`Found the name ${searchname} in the array`);
        break;  
    } else
     {
        console.log("Name not found");
        break;  
    }
}
//Find the array name with ....for of..... loop

for(const na of names1){
    console.log(na);
}

//Find the array name with ....for each..... loop

names.forEach(n=>console.log(n));

marks.forEach(m=>console.log(m*0.5));

marks=marks.map(m=>m*0.5)
.forEach(m=>console.log(`Marks ${m}`))
console.log(marks);

console.log("=========answer========");


let marks1 = [90, 80, 98, 65, 100, 190, 60, 85];
let marksAbv100 = marks1.map(m => m * 1.05).filter(m => m >= 100);
console.log(marksAbv100);


let between=marks1.map(n => n * 1.5)
.filter(n => n >= 100)
.filter(n => n <= 150)
console.log(between);

let uppercase=names.map(b => b.toUpperCase())
.filter(b => b[1]=='O')
console.log(uppercase);


let startswith=names.map(b => b.toUpperCase())
.filter(b => b[0]=='D')
.filter(b => Number(b[b.length-1])<=3)
//.filter(b => b[])

console.log(`startswith ${startswith}`)
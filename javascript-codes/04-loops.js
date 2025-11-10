// loops.js
for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log("Loop completed!");

let names = ['Amy', 'Bob', 'Charles', 'Don1', 'Don2', 'Don3', 'Don4', 'Don5'];
let marks = [90, 80, 98, 65, 100, 190, 60, 85];
console.log(names.length);

for (let i = 0; i < 4; i++) {
    console.log(names[i]);
}

// Task: Print Marks along with name like - Amy scored 90

// Task: Calc and print the highest and lowest scorer with name - Charles scored 98 

console.log("===== Highest scorer calculation =========")

const largest = Math.max(...marks);

for (let i = 0; i < names.length; i++) {
    if (marks[i] === largest) {
        console.log(names[i], marks[i]);
        break;
    }
}

console.log("===== Total Marks calculation =========")

const johnMarks = [90, 91, 92, 94, 95];

let totalMarks = 0;

for (let i = 0; i < johnMarks.length; i++) {
    totalMarks += johnMarks[i];
}

console.log("Total marks:", totalMarks);


console.log("========== Find the sum of 'n' Natural numbers ============");

// Task: Find the sum of 'n' Natural numbers 

const n = 1000; // 1 + 2 + 3 + ... + 999 + 1000

function sumOfNatutalNumbers(n) {
    // loop
    return "ToDo: " + n;
}

console.log(sumOfNatutalNumbers(100));
console.log(sumOfNatutalNumbers(200));
console.log(sumOfNatutalNumbers(1000));
console.log(sumOfNatutalNumbers(10000));



console.log("========== Print the array (names) in reverse order ============");
for (let i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}



console.log("========== Print the array (names) in with While loop ============");
let i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++;
}



console.log("========== Find the name in array (names) in with While loop ============");
let searchName = 'Charley';
let count = 0;
while (true) {
    count++;
    if (names.includes(searchName)) {
        console.log(`Found the name ${searchName} in the array`);
        isFound = true;
        break;
    }
    else if (count >= names.length) {
        console.log(`Could not find the name ${searchName} in the array`);
        break;
    }
}


console.log("========== Print the array (names) in with For..of loop ============");
for (const n of names) {
    console.log(n);
}


console.log("========== Print the array (names) in with forEach loop ============");
names.forEach((n) => {
    console.log(n);
});
// Same 
names.forEach(n => console.log(n));

marks.forEach(m => console.log(m * 1.05));

marks.map(m => m * 1.05).forEach(m => console.log(`Marks: ${m}`));

console.log(marks);

let marksAbv100 = marks.map(m => m * 1.05).filter(m => m >= 100);
console.log(marksAbv100);


let btw150And100 = marks.map(m => m * 1.05)
    .filter(m => m >= 100)
    .filter(m => m <= 150)
    .map(m => m * 1.05);
console.log(btw150And100);

names.map(name => name.toUpperCase())
    .filter(name => name[0] === 'D')
    .forEach(n => console.log(n));

// Task: filter the names starting with letter 'D' and ending with number less than equal to 3

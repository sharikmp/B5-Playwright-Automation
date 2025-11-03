
for(let i = 0; i < 10; i++) {
    console.log(i);
}

console.log("Loop completed!");

const names = ['Amy', 'Bob', 'Charles', 'Don1', 'Don2', 'Don3', 'Don4', 'Don5'];
const marks = [90, 80, 98, 65, 100, 190, 60, 85];
console.log(names.length);

for(let i = 0; i < 4; i++) {
    console.log(names[i]);
}

// Task: Print Marks along with name like - Amy scored 90

// Task: Calc and print the highest and lowest scorer with name - Charles scored 98 

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

const n = 1000; // 1 + 2 + 3 + ... + 999 + 1000

function sumOfNatutalNumbers(n) {
    // loop
    return "ToDo: "+n;
}

console.log(sumOfNatutalNumbers(100));
console.log(sumOfNatutalNumbers(200));
console.log(sumOfNatutalNumbers(1000));
console.log(sumOfNatutalNumbers(10000));



console.log("========== Print the array (names) in reverse order ============");
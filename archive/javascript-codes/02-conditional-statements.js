let personAge1 = 10;
let personAge2 = 20;
let personAge3 = 1;

let upperThresholdAge = 12;
let lowerThresholdAge = 5;

let ticketPrice = 120;


if(personAge1 <= lowerThresholdAge) {
    console.log(`The ticket price for person with age ${personAge1} is: ${ticketPrice * 0.25}`);
}
else if(personAge1 <= upperThresholdAge) {
    console.log(`The ticket price for person with age ${personAge1} is: ${ticketPrice * 0.5}`);
}
else {
    console.log(`The ticket price for person with age ${personAge1} is: ${ticketPrice}`);
}


if(personAge2 <= lowerThresholdAge) {
    console.log(`The ticket price for person with age ${personAge2} is: ${ticketPrice * 0.25}`);
}
else if(personAge2 <= upperThresholdAge) {
    console.log(`The ticket price for person with age ${personAge2} is: ${ticketPrice * 0.5}`);
}
else {
    console.log(`The ticket price for person with age ${personAge2} is: ${ticketPrice}`);
}


if(personAge3 <= lowerThresholdAge) {
    console.log(`The ticket price for person with age ${personAge3} is: ${ticketPrice * 0.25}`);
}
else if(personAge3 <= upperThresholdAge) {
    console.log(`The ticket price for person with age ${personAge3} is: ${ticketPrice * 0.5}`);
}
else {
    console.log(`The ticket price for person with age ${personAge3} is: ${ticketPrice}`);
}



console.log("============ Switch case ============")

let testStatus = "FAIL";

switch (testStatus) {

    case "PASS":
        console.log("Test case passed... ");
        break;

    case "FAIL":
        console.log("Test case failed... ");
        break;

    case "SKIP":
        console.log("Test case skipped... ");
        break;

    case "FLAKY":
        console.log("Test case is flaky... ");
        break;

    default:
        console.log("Unknown test status: ", testStatus);
        break;
}

if(testStatus == "PASS") {
    console.log("Test case passed... ");
}
else if(testStatus == "FAIL") {
    console.log("Test case failed... ");
}
else if(testStatus == "SKIP") {
    console.log("Test case skipped... ");
}
else if(testStatus == "FLASKY") {
    console.log("Test case skipped... ");
}
else {
    console.log("Unknown test status: ", testStatus);
}



console.log("======= Ternary Operator ======= ")

let x = 100;
let y = 200;

if( x > y ) {
    console.log(`x [${x}] is larger`);
}
else {
    console.log(`y [${y}] is larger`);
}

if( y > x ) {
    console.log(`y [${y}] is larger`);
}
else {
    console.log(`x [${x}] is larger`);
}


const result = (x > y) ? `x [${x}] is larger` : `y [${y}] is larger`;
console.log(result);


let tStatus = "PASS";

const tResult = (tStatus == "PASS") ? "The test is passed... " : "The test is failed ... ";
console.log(tResult);


let isLoggedIn = false;
let message = isLoggedIn ? 'Logged In' : 'Not Logged In';
console.log(message);
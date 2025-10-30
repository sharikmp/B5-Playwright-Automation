function updateTestStatus(testStatus) {
    console.log(`Start: Test case update: Test is ${testStatus}ed!`);

    // Increase the status count
    console.log(`Increasing ${testStatus} count...`);
    // Send to reporting dashboard
    console.log(`Sending status ${testStatus} to reporting dashboard`);
    // Update to respective jira
    console.log(`Updating status ${testStatus} to respective jira`);

    console.log(`Finished: Test case update: Test is ${testStatus}ed!`);

    console.log("\n\n");
}

// Test case 01 is executed
updateTestStatus("Pass");
// Test case 02 is executed
updateTestStatus("Fail");
// Test case 03 is executed
updateTestStatus("Skip");






console.log("======== Ticket Price Problem =============")

let personAge1 = 10;
let personAge2 = 20;
let personAge3 = 1;

let upperThresholdAge = 12;
let lowerThresholdAge = 5;

let ticketPrice = 120;

calculateTicketPrice(personAge1);
calculateTicketPrice(personAge2);
calculateTicketPrice(personAge3);
calculateTicketPrice(6);
calculateTicketPrice(30);
calculateTicketPrice(50);
calculateTicketPrice(60);


function calculateTicketPrice(age) {
    if (age <= lowerThresholdAge) {
        console.log(`The ticket price for person with age ${age} is: ${ticketPrice * 0.25}`);
    }
    else if (age <= upperThresholdAge) {
        console.log(`The ticket price for person with age ${age} is: ${ticketPrice * 0.5}`);
    }
    else {
        console.log(`The ticket price for person with age ${age} is: ${ticketPrice}`);
    }
}


function add(a, b) {
    return a + b;
}

console.log(add(5, 3)); // 8
console.log(add(5, 30)); // 8
console.log(add(50, 3)); // 8
console.log(add(5, 300)); // 8
console.log(add(500, 3)); // 8



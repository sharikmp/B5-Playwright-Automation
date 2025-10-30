console.log("Hello, World!");
console.log("Hello,", "John Doe", "Welcome to Javascript basics!");


// ========= Variables ==========

let fullname = "John Doe";
const age = 30;

fullname = "John Doe 2";

console.log(fullname, age);

// ========= Data Types =========
const fname = 'John'; 
const yoe = 10.5;
const devYoe = 5.5;
const qaYoe = 5;
const workingAsQa = true;

console.log("========= Data Types =========");
console.log(typeof fname);
console.log(typeof yoe);
console.log(typeof devYoe);
console.log(typeof qaYoe);
console.log(typeof workingAsQa);

// ========= Declaration and Assignment =========
console.log("========= Declaration and Assignment =========");

let passwordBtnXpath;       // Declaration

console.log("Xpath of Password Button:", passwordBtnXpath);

passwordBtnXpath = "//*[@id='password']"; // assignment

console.log("Xpath of Password Button:", passwordBtnXpath);






console.log("========= TYPE COERCION BASICS ===========")

console.log(10);
console.log("10");
console.log("10" + 10);
console.log("10" - 10);


console.log("========== Operators ===============")

console.log("10" ==  10);
console.log("10" === 10);

console.log(10 != 10);
console.log(10 == 10);
console.log( !(10 == 10) );


console.log("10 >  10:", 10 >  10);
console.log("10 >= 10:", 10 >= 10);
console.log("10 <  10:", 10 <  10);
console.log("10 <= 10:", 10 <= 10);

const x = 12;
const y = 21;
console.log("x:", x);
console.log("y:", y);
console.log("x >  y:", x >  y);
console.log("x >= y:", x >= y);
console.log("x <  y:", x <  y);
console.log("x <= y:", x >= y);





console.log("====== Assignment Operators =========")

let z = 2000;
z += 1000;      // z = z + 1000 => 2000
z -= 100;       // z = z - 100  => 1900
z *= 100;       // z = z * 100  => 190000
z /= 10;        // z = z / 10   => 19000

console.log("z:", z);





console.log("====== Logical Operators =========");

let personAge1 = 10;
let personAge2 = 20;
let personAge3 = 1;

let upperThresholdAge = 12;
let lowerThresholdAge = 5;


// Dummy Situation: If age is less than 12 then ticket price is half
console.log( `Person1 [${personAge1}]: Eligible for half ticket:`, (personAge1 <= upperThresholdAge) );
console.log( `Person2 [${personAge2}]: Eligible for half ticket: ${ (personAge2 <= upperThresholdAge) }`);

// Dummy Situation: age between 5 and 12 => Gift (kidszone)

console.log( "Person1: Eligible for gift:", (personAge1 >= lowerThresholdAge) && (personAge1 <= upperThresholdAge)  );
console.log( "Person2: Eligible for gift:", (personAge2 >= lowerThresholdAge) && (personAge2 <= upperThresholdAge)  );
console.log( "Person3: Eligible for gift:", (personAge3 >= lowerThresholdAge) && (personAge3 <= upperThresholdAge)  );

// Dummy situation: age below 5 (allowed with parents) or age is above 12 => Ride / show

console.log( "Person1: Eligible for show:", (personAge1 <= lowerThresholdAge) || (personAge1 >= upperThresholdAge)  );
console.log( "Person2: Eligible for show:", (personAge2 <= lowerThresholdAge) || (personAge2 >= upperThresholdAge)  );
console.log( "Person3: Eligible for show:", (personAge3 <= lowerThresholdAge) || (personAge3 >= upperThresholdAge)  );


console.log("====== Template Literals =========");

let user = 'admin';
let userStatus = 'logged in';
let message = `User ${user} has successfully ${userStatus}.`;
console.log(message);






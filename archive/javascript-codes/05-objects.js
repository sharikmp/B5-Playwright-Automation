let personFirstName = 'John';
let personLastName = 'Doe';
let personAge = '30';
let personEyes = 'brown';
let personHair = 'Black';
let personWorking = true;
let personJobRole = 'SDET';



let person = {
    firstname: 'John',
    lastname: 'Doe',
    age: 30,
    contact: 9876543210,
    say: (msg) => {return "Message: "+msg},
    eye: {
        color: 'Black',
        num: 2,
    }
}

console.log(person.firstname);
console.log(person['contact']);
console.log(person.say("Hello, Javascript!"));

person.eyesColor = 'Brown';

console.log(person['eyesColor']);

console.log(person.eye.color);




const school = {
    classes: [
        {
            num: 1,
            students: 100,
        },
        {
            num: 2,
            students: 70,
        },
        {
            num: 3,
            students: 50,
        },
        {
            num: 4,
            students: 60,
        },
        {
            num: 5,
            students: 90,
        }
    ]
}

console.log(school.classes[2].students);

// determine no. classes 
console.log(school.classes.length);


const studentsCls10 = {
    names: ['Amy', 'Bob', 'Charles', 'Don1', 'Don2', 'Don3', 'Don4', 'Don5'],
    marks: [90, 80, 98, 65, 100, 190, 60, 85],
}

const students12 = [
    {
        name: "Amy",
        marks: 90,
    },
    {
        name: "Bob",
        marks: 80,
    },
    {
        name: "Charles",
        marks: 95,
    },
    {
        name: "Bob",
        marks: 85,
    },
]


students12.filter( st => st.marks >= 90).forEach(st => console.log(st.marks));


























let person={

    firstname:"joe",
    lastname:"john",
    age: 30,
    contact: 9876543210,

 message:(msg)=>{return "message"+msg},

 eye:{
    color:'black',
    num:2
 }



}

console.log(person.firstname)
console.log(person['age'])
console.log(person.eye.num)



const school={

    classes:[
        {
            name:'amy',
            marks:25
        },
        {
            name:'sera',
            marks:25
        },
        {
            name:'samy',
            marks:25
        }, {
            name:'amya',
            marks:45
        }


    ]

    }
    //console.log(school.classes[1].name)

    school.classes.filter(m => m.name[0]=='a').forEach(m => console.log(m.name))

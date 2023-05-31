// OBJECTS PROPERTIES, DESTRUCTURING AND JSON

let x;

const person = {    
    name: 'Alok Kumar',
    age: 23,
    weight: 64.6,
    isAdmin: true,
    address: {
        street: 'Delhi Road',   
        city: 'Delhi',
        number: 123,
    },
};

x = person;                      // accessing the object

x = person.name;                 // accessing the property of an object
x = person['age']; 
x = person.address.city;
x = person['address']['number']; // accessing nested objects

person.isAdmin = false;          // changing the value of a property of an object (added a new property)
x = person.isAdmin;

delete person.weight;            // deleting a property of an object
x = person.weight;               // undefined

person.data = function() {      // adding a new property to an object  
    return `${this.name} lives in ${this.address.city}`; // this refers to the object itself
};
x = person.data();

person2 = person;               // person2 is a reference to person
x = person2;
person2.name = 'Rahul';         // changing the value of a property of an object
x = person.name;                // person.name is also changed

person3 = {...person};          // person2 is a copy of person (not a reference) spread operator
person3.age = 24;               // changing the value of a property of an object
x = person.age;                 // person.age is not changed

person4 = Object.assign({}, person); // person3 is a copy of person (not a reference) Object.assign()
x = person4;

person5 = {
    //first name: 'Alok',       // SYNTAX ERROR, property name with space
    'first name': 'Alok',       // CORRECT SYNTAX, property name with space
}
x = person5['first name'];      // accessing the property name with space


console.log(x);

// DESTRUCTURING

const destobj = {
    company: 'Google',
    position: 'Software Engineer',
    location: {
        city: 'Bangalore',
        country: 'India',
    },
    experience: 2,
}

const { company, position, location: {city} } = destobj; // destructuring the object

const { location: address, experience: worked } = destobj; // destructuring the object with a new name

console.log(`Company: ${company}\nPosition: ${position}\nAddress: ${city}\nExperience: ${worked} yrs`);


const numbers = [1, 2, 3, 4, 5];
const [a, b] = numbers;         // destructuring the array
const [c, d, ...rest] = numbers;// destructuring the array with rest operator
console.log(c,d,rest);

// JSON

// https://api.github.com/users // JSON data from github api

const github = {
    url: 'https://api.github.com/users',
    username: 'Alok5102R',
    password: '**********',
}

const Jsonstr = JSON.stringify(github); // converting object to JSON string
/* Output as Json after stringify
[
    {
    "url": 'https://api.github.com/users',
    "username": 'Alok5102R',
    "password": '**********',
    }
]
*/

const Jsonobj = JSON.parse(Jsonstr);    // converting JSON string back to object

console.log(Jsonobj);
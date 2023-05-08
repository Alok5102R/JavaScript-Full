// STRING PROPERTIES AND METHODS

let x;

const name = 'Alok';
const age = 20;

x = 'Hello, my name is ' + name + '. My age is ' + age;  //Adding String using Concatenation

x = `Hello, my name is ${name}. My age is ${age}`;       //Adding string using "Template Literals"

console.log(x);


// String properties and methods

const s = new String('Hello World');       //Wrapper created. It'll act as an object 

x = typeof s;
x = s.length;
x = s.toUpperCase();
x = s.__proto__;                          //It'll show all the methods stored in String Prototype

x = s[1];
x = s.charAt(2);
x = s.indexOf('r');

x = s.substring(2,7);
x = s.slice(-11,-4);                     //Slice can take negative and positive values both
x = '           Hello there  ';
x = x.trim();                            //It'll remove whitespace from front and beginning of string

x = s.replace('World','Alok');
x = s.includes('Wor');
x = s.valueOf();                        //Provides the value object

x = s.split();                          //Creates an Array with string as an element
x = s.split(' ');                       //Creates an Array with elements based on space seperation
x = s.split('');                        //Creates an Array with elements having String Characters

console.log(x);

// TASK  [developer -> Developer]

let newString = 'developer';

newString = newString.charAt(0).toUpperCase() + newString.slice(1);    //Solution 1
newString = newString[0].toUpperCase() + newString.slice(1);           //Solution 2
newString = `${newString[0].toUpperCase()}${newString.substring(1)}`;  //Solution 3
console.log(newString);


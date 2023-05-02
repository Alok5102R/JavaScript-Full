//VARIABLES, DATA TYPES & OBJECTS


//PRIMITIVE (Stored in STACK):
//String, Number, Boolean, Null, Undefined, Symbol, BigInt

//REFERENCE TYPES (Stored in HEAP):
//Arrays, Functions, Objects

console.log(age);     //ERROR: Variable not defined
//let age=10;         //ERROR: Variable not defined
var age=10;           //Output: undefined for line1 [Hoisting]
age = 22;             //Value can be altered for variables defined using var/let.
console.log(age);     //Output: 10

//Variable Naming Convention:
//Only letters, numbers, underscores and dollar signs. Can't start with number.

const height = 178;
console.log("Height = ", height);
//height = 56;        //ERROR: Constant variable value can't change.

const array = [1,3,4,5];
//array = 46;         //ERROR: Constant object type and value can't change.       
array.push(9);        //Value can be pushed
array.push({7:'a',8:'b'});    //Another array/object can be pushed.
console.log(array);

const person = {
    name: 'Alok',
    weight: 67
};
//person = 'Avenger';  //ERROR
person.name = 'Alok Kumar';   //Value can be updated in key-value pair object.
console.log(person);


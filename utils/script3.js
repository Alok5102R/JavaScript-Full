//TYPE CONVERSION

//Convert String to Number

let amount = '50';
amount = parseInt(amount);
amount = +amount;
amount = Number(amount);
console.log(amount, typeof amount);


//Convert Number to String

let age = 78;
age = age.toString();     //Temporary wrapper gets created (since, age isn't an object)
age = String(age);
console.log(age, typeof age);


//Convert String to Decimal

let temperature = '78.37';
temperature = parseFloat(temperature);        //parseInt() removes decimal values
console.log(temperature, typeof temperature);


//Convert Number to Boolean
let choose = 001;
choose = Boolean(choose);  //0 -> false, any other -> true
console.log(choose, typeof choose);


//Conditions which gives NaN (Not a Number) value
let check = 'hello';
check = Number(check);
console.log(check, typeof check);
console.log(Math.sqrt(-1));
console.log(1+NaN);
console.log(undefined+undefined);
console.log('foo' / 3);
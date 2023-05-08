let x;

const num = new Number(756.57678);         //By using 'new' keyword, a wrapper has been created. Thus it become an object

x = num.toString();                //String conversion
x = num.length;                    //Output: undefined, since it's an object
x = num.toString().length;         //Type will be number and give output number of digits


x = num.toFixed(2);                //Fix it to 2 decimal points and type will be string
x = num.toPrecision(4);            //Fix it to 4 digits and type will be string
x = num.toExponential(3);          //Fix it to 4 digits (3 digits after decimal) and then exponent and type will be string
x = num.toLocaleString('ar-EG');   //Convert number to entered local language and type will be string
x = num.valueOf();                 //Give the value of object


x = Number.MAX_VALUE;              //Give max value of Number type
x = Number.MIN_VALUE;              //Give min value of Number type


console.log(x, typeof x);
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

y = Math.sqrt(64);                //Give square root of number
y = Math.abs(-4);                 //Give absolute value of number
y = Math.pow(2, 3);               //Give power of number
y = Math.PI;                      //Give value of PI
y = Math.min(2, 3, 4, 5, 6, 7);   //Give minimum value of number
y = Math.max(2, 3, 4, 5, 6, 7);   //Give maximum value of number

y = Math.round(234.6);            //Round off number
y = Math.ceil(34.3);              //Round off number to upper value
y = Math.floor(235.7);            //Round off number to lower value
y = Math.random();                //Give random number between 0 and 1 (not including 1) with decimal
y = Math.floor(Math.random() * 10 + 1);  //Give random number between 1 and 10 (including 10) without decimal


console.log(y, typeof y);
console.log((9+8).toString(),(9).toString());

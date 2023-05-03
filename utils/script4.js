// OPERATORS

// Arithmetic Operators

let x;
x = 5 + 5;
x = 5 - 5;
x = 5 * 5;
x = 5 / 5;
x = 7 % 5;


// Concatenation

x = 'Hello' + ' ' + 'world!';


// Exponent
x = 2 ** 3;


// Increment
x = 1;
x = x + 1;
x++;


// Decrement
x = 5;
x = x - 1;
x--;


// Assignment Operators

x = 1004;
x += 5;
x -= 5;
x *= 5;
x /= 5;
x %= 5;
x **= 5;


// Comparison Operators

x = 2 == '2';       //Output: True (== checks for value not type)
x = 2 === '2';      //Output: False (=== checks for value as well as type)
x = 2 != '2';       //Output: False (Since, it is true. Because, != checks for value not type)
x = 2 !== '2';      //Output: True (Since, it is false. Because, !== checks for value as well as type)

x = 10 > 5;
x = 10 < 5;
x = 10 <= 5;
x = 10 >= 5;


// Type Coercion

x = 5 + '5';      //It will be assumed as string and Concatenation will happen
x = 5 * '5';      //* operator doesn't make sense with string, so it will be assumed as number
x = 5 + null;     //null gets assumed as zero in this case
x = 5 + true;     //true -> 1, so 1 will be assumed here
x = 5 + false;    //false -> 0, so 0 will be assumed here
x = 5 * undefined;//Anything operated with undefined will give NaN 

console.log(x, typeof x);













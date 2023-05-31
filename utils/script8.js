// ARRAYS and ARRAY METHODS

const arr = [50, 59, 80, 96, 84];
let x;

arr.push(100);    // add element to the end
arr.pop();        // remove last element
arr.unshift(10);  // add element to the beginning
arr.shift();      // remove first element
arr.reverse();    // reverse array
arr.sort();       // sort array

console.log(arr);


x = arr.indexOf(80);  // find index of element
x = arr.includes(96); // check if element exists
x = arr.slice(1, 3);  // get part of array (from, to - 1)
x = arr.splice(1, 2); // remove part of array (from, count)
x = arr.toString().charAt(0); // convert to string and get first character
y = arr.join(' ');   // convert array to string with separator

console.log(x, arr);

const arr2 = [1, 2, 3, 4, 5];

y = arr2.map(x => x * 2);     // map array to new array
y = arr2.filter(x => x > 2);  // filter array to new array
y = [arr2, arr];      // merge arrays

y = arr2.concat(arr); // merge array elements in a single array
y = [...arr2, ...arr];// (spread operator) merge array elements in a single array
const arr3 = [arr, arr2];
y = arr3.flat();      // convert nested array to single array


y = Array.isArray(arr); // check if variable is array
y = Array.from('12345');// convert array-like object to array
const a = 3, b = 4, c = 5;
y = Array.of(a, b, c);  // convert arguments to array


console.log(y, arr2);
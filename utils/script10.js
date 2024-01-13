// Map, Filter and Reduce Array methods
// These don't change actual array, but creates new array and takes function as a perimeter
// Types of fuction definitions


const arr = [ 5,2,3,4 ];

// array Map method

let a = arr.map((av, vb, ar)=>{
    console.log(av, vb, ar);
    return av-vb;
})

console.log(a);

// array Filter method

let filt = (x)=>{
    return x>3;
}
let b = arr.filter(filt);

console.log(b);

// array Reduce method
function redu(a,b)
{
    return a+b;
}

let c = arr.reduce(redu);

console.log(c);


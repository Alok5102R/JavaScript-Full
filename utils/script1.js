//CONSOLE, STYLE, VARIABLE, GROUP, TABLE, HTML ELEMENT FETCH

let young = true;                        //boolean variable
console.log(typeof(young));              //Show type of variable

let var1 = undefined;                    //var1 type also will be undefined
let var2 = null;                         //var2 type will be object
console.log(var1); 
console.log(typeof(var1)); 
console.log(var2); 
console.log(typeof(var2)); 

let reply = 'Hey, Im fine.';
console.log('Hey', 'hows you?', reply);  //By this we can output multiple values

const x = 'im constant';
//x = 'yes';                             //This will throw Error
console.log(x);


document.getElementById('hed').attribute = 'yes';  //Change value of html Element
let hd = document.getElementById('hed').attribute; //Get value of html Element
console.log(hd);

console.table({name: 'Alok', domain: 'Developer'});  //Table creation using key value pair
console.table(['apple', 'ball']);        //Table creation using list

alert("Custom Alert!!");                 //Show alert on top of page

console.group('Some Extra methods in console')  //Group begins
console.error('This is custom Error.');  //Show custom Error in Console
console.warn('This is custom Warning');  //Show custom Warning in Console
console.groupEnd();                      //Group ends

const styles = 'padding: 10px; background-color: white; color: blue';
console.log('%cStyling Using JS', styles);  //Styling using JS
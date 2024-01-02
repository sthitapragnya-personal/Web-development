// types of operators
//--------------------------------

// data types (primitive data types)
//---------------------------------------------
//  string "harshit"
//  number 2,4,5.6
// booleans
// undefined
// null
// BigInt // not used much
// Symbol  // not used much

let age=22;
let firstname="sthita";

console.log(typeof firstname);
console.log(typeof age);

console.log(typeof "sahoo");
console.log(typeof 19);
console.log(typeof true);


// convert a number to a string
//------------------------------------
console.log(typeof (age+""));
age=age+"";
console.log(typeof age);


// convert a String to Number
// -------------------------------
// the trick is apply a + before the string

let mystring="34";
console.log(typeof mystring);
mystring= +"34";
console.log(typeof mystring);


// ANOTHER WAY TO DO THESE TYPE CONVERSIONS IS SHOWN BELLOW
//-------------------------------------------------------------

let x=18;
console.log(typeof x);
x=String(x);
console.log(typeof x);

let z="14";
console.log(typeof z);
z=Number(z);
console.log(typeof z);



// undefined , null, BigInt


let firstname;
console.log(typeof firstname);

// const name;
// console.log(typeof name);
// Uncaught SyntaxError: Missing initializer in const declaration

firstname="sthita";
console.log(typeof firstname);
console.log(typeof firstname,firstname);

firstname=null;
console.log(firstname);
console.log(typeof firstname);
firstname="sthita";
console.log(typeof firstname);
console.log(typeof firstname,firstname);


console.log(typeof null); //object
// this is a error in js // bug in js //error in js
// and js do not corrects this bug because already many codes are written keeping this bug in mind

let mynumber=123;
console.log(mynumber);
console.log(Number.MAX_SAFE_INTEGER);


mynumber=5354514232153714231423512436543421365845214;
console.log(mynumber);

let x=BigInt(5354514232153714231423512436543421365845214);
console.log(x);

let y=5354514232153714231423512436543421365845214n;
console.log(y);

console.log(x+y);
// console.log(x+123); 
// 17.undefined,null,BigInt.js:42        
//        Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
//     at 17.undefined,null,BigInt.js:42

// that is only 2 BigInt numbers can be added.
//console.log(Number(x)+123); //error
console.log(x+123n);



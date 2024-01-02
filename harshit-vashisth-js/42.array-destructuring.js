// array destructuring
//---------------------------

// it is moslty used in ES6

const myarray=["value1","value2"];
// let myvar1=myarray[0];
// let myvar2=myarray[1];

// console.log(myvar1);
// console.log(myvar2);

 //but in js we have a shortcut 
 //-----------------------------------

 let [myvar1,myvar2]=myarray;
 console.log(myvar1);
console.log(myvar2);

console.log("------------------------------------");

const x=["value1","value2","value3"];
[myvar1,myvar2]=x;
console.log(myvar1);
console.log(myvar2);

console.log("------------------------------------");

let p=["value1","value2","value3"];
let [y,z,w]=p;
console.log(y);
console.log(z);
console.log(w);

console.log("------------------------------------");

const q=["value1"];
[y,z,w]=q;
console.log(y);
console.log(z);
console.log(w);
 
console.log("------------------------------------");

p=["value1","value2","value3"];
[y,,w]=p;
console.log(y);
console.log(w);




 
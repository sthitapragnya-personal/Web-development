// arrays 
//----------------------

//  arrays means ordered collection of objects

//  intro to arrays
//  refernce type
//  how to create the arrays

let fruits=["apple","mango","grapes"];
console.log(fruits);
console.log(fruits[2]);

let numbers=[1,2,3,4,5,6,7];
console.log(numbers);

let mixed=[1,null,"sthita",76.866,undefined];
console.log(mixed);


console.log(fruits);
fruits[1]="banana";
console.log(fruits);

fruits=["apple","mango","grapes"];
console.log(typeof fruits);// it is of object type.

let obj={}; // this is called as the object literal
console.log(typeof obj);

// how to know that wether a array is array or not
//-------------------------------------------------------
console.log(Array.isArray(fruits)); // if it is true then fruit is a array and if it is false then fruit is not array

console.log(Array.isArray(fruits))
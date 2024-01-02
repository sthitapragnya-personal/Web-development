// for loop 

let fruits=["apple","mango","grapes","banana"];

for (let i = 0;  i< fruits.length; i++) {
   console.log(fruits[i]); 
}

console.log("---------------------------------");
// how to print all the elemnts in uppercase 
//--------------------------------------------------
for (let i = 0;  i< fruits.length; i++) {
    console.log(fruits[i].toUpperCase());   
 }


//  suppose i dont want to print the elements in uppercase rather i want to create a new array and that array will have all the same elemnts same as in fruits but they should be in uppercase

let newarray=[];
for (let i = 0;  i< fruits.length; i++) {
    newarray.push(fruits[i].toUpperCase());   
 }


 let x=[];
 for (let i = 0; i < fruits.length; i++) {
    x.push(fruits[i].toUpperCase());
    
 }
 console.log(newarray);
 console.log(x);

 //note : we can also use const instead of let to create a array
 //--------------------------------------------------------------

//  const pi=3.15;
//  pi=10;
//  console.log(pi);
//  Uncaught TypeError: Assignment to constant variable.


const array=["apple","mango"];
array.push("grapes"); // this is possible because the address is still same as it is in the heap
console.log(array);

// but we can't again ccreate a new array using the square brackets and then assign it to the existing array that is declared by the help of const keyword.

// array=["grapes","pineapple"];
// console.log(array);
// Uncaught TypeError: Assignment to constant variable.

// note : this reassignation is not possible only if it is declared with const.

// mostly from programimg point of view it is preferd to use the const when we make any array or any primitive data type .


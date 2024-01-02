// different methods of string

// trim() // it gives a new string
// toUpperCase()
// toLowerCase()
// slice()


let firstname="   harshit   ";
console.log(firstname.length);

// suppose we want to remove the spaces inside it
let newstring=firstname.trim();
console.log(newstring.length);


// OR


firstname=firstname.trim();
console.log(firstname.length);

console.log(firstname.toUpperCase());
console.log(firstname); // this is because the string is immutable
firstname=firstname.toUpperCase();
console.log(firstname);


console.log(firstname.toLowerCase());
console.log(firstname);
firstname=firstname.toLowerCase();
console.log(firstname);


// start index and end index
// ---------------------------

let anotherstring=firstname.slice(0,4); // it gives the value from 0 to 4-1 that is from 0 to 3
console.log(anotherstring);
console.log(firstname.slice(1)); // it prints from 1 to last
console.log(firstname.slice(2,4)); 
console.log(firstname.slice(2,3)); 



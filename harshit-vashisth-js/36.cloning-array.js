// cloning a array
//-----------------------------

// how to concatinate 2 arrays
//---------------------------------


let array1=["item1","item2"];
let array2=array1; 
console.log(array1===array2);  //true // cause here both of address are 1000 


 array1=["item1","item2"]; // its address is 1000
 array2=["item1","item2"]; // its address is 2000
console.log(array1===array2); // false

array1.push("item3");
console.log(array1);
console.log(array2);

// slice() method gives a coompletely new array
array2=array1.slice(0);
console.log(array1===array2);
array1.push("item3");
console.log(array1);
console.log(array2);


//another way to clone a array
//---------------------------------

let array3=[].concat(array1); // here it gives a new array
console.log(array1===array3);
array1.push("item3");
console.log(array1);
console.log(array3);



// another way is spread operator
//-----------------------------------------

let x=[...array1]; // here also it gives a new array
console.log(array1===x);
array1.push("item3");
console.log(array1);
console.log(x);



// note : according to the performance slice() method is fastest


// array methods -> push()  pop()  shift()  unshift()
//----------------------------------------------------------

let fruits=["apple","mango","grapes"];

//push() method and it adds at the last of the array
console.log(fruits);
fruits.push("banana");
console.log(fruits);
fruits.push(1234);
console.log(fruits);

//pop() method and it removes  the last element of the array
fruits.pop();
console.log(fruits);
console.log(fruits.pop()); // here we are printing the poped element
console.log(fruits);


let poppedfruit=fruits.pop();
console.log(poppedfruit);
console.log(fruits);


//unshift -> it adds at the starting of the array
console.log(fruits);

fruits.unshift("orange");
console.log(fruits);

fruits.unshift("abcd");
fruits.unshift("efgh");
console.log(fruits);

fruits.unshift("pomagranate","guava");
console.log(fruits);


// shift -> it removes from the first

fruits.shift();
console.log(fruits);


//note : push and pop are faster as compared to shift and unshift
// because in case of push and pop it has to create a space only at the last but in the case of shift and unshift they have to shift every elemnt of the Array.




// for in loop
//--------------------

const fruits=["apple","mango","grapes","mango","grapes"];

// note : the for in loop gives the index value
for(let x in fruits){ 
   console.log(x);
}
console.log("------------------------------------------")

// using for in loop we will print the values of the array
//-----------------------------------------------------------
for(let x in fruits){ 
    console.log(fruits[x]);
 }

//  suppose we want to create a new array using the for-in loop but in will have all the elements that are present inside the fruits array and the should be present in the uppercase

let newarray=[];
for(let x in fruits){
    newarray.push(fruits[x].toUpperCase());
}

console.log(newarray);


// for( let x in fruits){
//     console.log(fruits[x]);
// }
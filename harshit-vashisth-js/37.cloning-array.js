// array clonning
//----------------------------

// using the slice oparetor
let array1=["item1","item2"];
let array2=array1.slice(0).concat(["item3","item4"]);

console.log(array1);
console.log(array2);

let array10 =[].concat(array1,["abcd","hfgf"])
console.log(array10);

array1.push("item3");

console.log(array1===array2);
console.log(array1);
console.log(array2);

console.log("--------------------------------------------")
// using the spread operator
let array3=["item1","item2"];
let array4=[...array3,"item3","item4"];
array3.push("item3");

console.log(array3===array4);
console.log(array3);
console.log(array4);


let onemorearray=[...array1, ...array3];
console.log(onemorearray);



let x= array1.slice(0).concat("hvvc","hvuvc")
console.log(x);
const myarray=["v1","v2","v3","v4"];

let [myvar1,myvar2]=myarray;
console.log(myvar1);
console.log(myvar2);

let mynewarray=myarray.slice(2);
// console.log(mynewarray);



[myvar1,myvar2,...mynewarray]=myarray;
console.log(myvar1);
console.log(myvar2);
 console.log(mynewarray);
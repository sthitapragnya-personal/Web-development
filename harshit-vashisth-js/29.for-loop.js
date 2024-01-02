//for loop
//---------------------

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for(let i=0;i<=10;i++){
 console.log(i);
}

console.log(i);// if the varible is declared with let inside the loop then it is undefined outside the loop
console.log(`value of i is ${i}`);


for(var i=0;i<=10;i++){
    console.log(i);
   }
console.log(`value of i is ${i}`);// but if the varible is declared with var inside the loop then it accesible outside the loop

let x=0;
for(;x<=10;x++){
    console.log(x);
}
console.log(`value of i is ${x}`);// but if the varible is declared eith let outide the loop then it can be accesed outside the loop.


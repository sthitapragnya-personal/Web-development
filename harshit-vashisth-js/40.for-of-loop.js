// for-of loop
//-----------------------

const fruits=["apple","mango","grapes"];
for(let x of fruits){
   console.log(x);
}
console.log("------------------------------------------")


// for(let x : fruits){
//     console.log(x);
//  }
// upper one is error

// for(let x = fruits){
//     console.log(x);
//  }
// upper one is also the error


let r=[];
for (let p of fruits) {
   r.push(p.toUpperCase());
}

console.log(r);
// hot to iterate the objects
// we can do this by 2 ways
// 1. for in loop
// 2. object.keys

const a={
    name:"shubham",
    age:19,
    "person hobbies":["guitar","football","reading books"]
}

for(let x in a){
    console.log(x); 
}


// for(let x in a){
//     console.log(a.x); // it is wrong
// }



// for(let x in a){
//     console.log(a["x"]);// it is wrong
// }


// for(let x in a){
//     console.log(a[x]); //it gives only the values
// }



// for(let x in a){
//     console.log(`${x} : ${a[x]}`) // gives the key value pairs
// }





// now we will see the use of object.keys
//----------------------------------------------------

// console.log(Object.keys(a));
// console.log(typeof (Object.keys(a)));

// const val=Array.isArray(Object.keys(a));
// console.log(val);



// for(let x of Object.keys(a)){
    
// }
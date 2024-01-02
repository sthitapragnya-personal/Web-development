// differnce between the dot and the square bracket

const x={
    name:"shubham",
    age:19,
     hobbies:["guitar","football","reading books"]
}
console.log(x.hobbies);



// const y={
//     name:"shubham",
//     age:19,
//     person hobbies:["guitar","football","reading books"]
// }
// console.log(y.hobbies);
// Uncaught SyntaxError: Unexpected identifier beacuse there a space between the person and hobbies



// const z={
//     name:"shubham",
//     age:19,
//     "person hobbies":["guitar","football","reading books"]
// }
// console.log(z.person hobbies);
//Uncaught SyntaxError: missing ) after argument list



const a={
    name:"shubham",
    age:19,
    "person hobbies":["guitar","football","reading books"]
}
console.log(a["person hobbies"]);




//------------------------------------------------------------
const key="email";
const b={
    name:"shubham",
    age:19,
    "person hobbies":["guitar","football","reading books"]
}
// b.key="sthita@gmail.com";
// console.log(b);


// b["key"]="sthita@gmail.com";
// console.log(b);


b[key]="sthita@gmail.com";
console.log(b);





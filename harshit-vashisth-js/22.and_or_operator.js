// and or operators
//----------------------------

let firstname="sthita";
let age=22;

if (firstname[0]=="s") {
    console.log("your name starts with s");
} 

if (age>18) {
    console.log("you are above 18");
} 

// use of and operator(&&)
//-------------------------------
if (firstname[0]=="s"&&age>18) {
    console.log("your name starts with s and u are above 18");
}

// use of or operator(||)
//-------------------------------
age=3;
if (firstname[0]=="s"||age>18) {
    console.log("your name starts with s and u are above 18");
}

//---------------------------------------------------------------
if (firstname[0]==="s"&&age>18) {
    console.log("your name starts with s and u are above 18");
}
else{
    console.log("if statement is false")
}
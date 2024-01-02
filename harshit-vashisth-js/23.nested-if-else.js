//nested if else
//-----------------------------
// winning number is 19

// 19 your guess is right
// 17 guess is too low
// 20 guess is too high

let winningnumber=19;
let userguess=prompt("guess a number");// user to take a user input
// it takes the input in form of string
// let usergus=prompt("guess a number");
console.log(userguess);
console.log(typeof userguess);
userguess=+userguess;
console.log(typeof userguess);

//or 

// let userguess=+prompt("guess a number");
// console.log(userguess);
// console.log(typeof userguess);


if (userguess===winningnumber) {
    console.log("your guess is right");
} else {
    console.log("your guess is wrong");
}

//or 
//we can use nested if else to specify this more
//-------------------------------------------------------

if (userguess===winningnumber) {
    console.log("your guess is right");
} else {
    if(userguess<winningnumber){
        console.log("too low");
    }
    else if(userguess>winningnumber){
        console.log("too high");
    }
}
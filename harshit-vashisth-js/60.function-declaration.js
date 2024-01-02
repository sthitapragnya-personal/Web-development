// function declaration
// -------------------------------

console.log("happy bday song -------");
console.log("happy bday song -------");
console.log("happy bday song -------");

function singHappyBirthday(){ // here the function is made
    console.log("happy bday song ----------");
}

singHappyBirthday(); // here the function is called directly

// we can make more than 1 function
//----------------------------------

function twoPlusFour(){
    console.log(2+4);
    return 2+4;
}

// call, invoke , run 
twoPlusFour();
console.log(twoPlusFour()); // we can print the returned data from a function

let x=twoPlusFour();
console.log(x);

function addNumber(n1,n2){
    console.log(n1+n2);
}

addNumber(10,15);


function add(n1,n2){
  return n1+n2;
}

let val=add(10,20);
console.log(val);


// note but we did mistake in the number of parameters and the number of local variables then it will show Nan

function abcd(n1,n2,n3){
    console.log(n1+n2+n3);
}

abcd(2,3);
abcd(2,3,undefined);
abcd(2,3,5);

// suppose we want to make a function that states that wether a number is even or odd
//---------------------------------------------------------

// let p=+prompt("give a number input");

// function isEven(n1){
//     if(n1%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(isEven(p));





// function odd(n1){
//     if(n1%2==0){
//         return true;
//     }
//   return false
// }

// console.log(odd(7));
// console.log(odd(8));





// function xyz(n){
//     return n%2===0;
// }
//  console.log(xyz(4));





// now we will take a string input and will create a function that will give its first character

// function firstcharacter(string){
//     return string[0];
// }

// console.log(firstcharacter(prompt("enter the string value")));







// create a function that takes a array and a target that is a number as a input and we have to find the target in that array and it gives the index of the array if the target is found in that array


// function findTarget(a1,t1){
//     for(let x=0;x<a1.length;x++){
//         if(a1[x]===t1){
//             return true;
//         }
//     }
//     return false;
// }

// let array=[1,2,3,4,5,6,7];
// let target=+prompt("enter the target");

// console.log(findTarget(array,target));
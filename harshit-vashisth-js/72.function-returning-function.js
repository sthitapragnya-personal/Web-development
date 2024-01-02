// function returning function
//-------------------------------

// function myfunc(){
//     return "a"; // here the function retruns a string


// }
// const ans=myfunc();
// console.log(ans);


// function myfunc(){
//     return [1,2,3,"abcd"]; // here the function returns a array

// }
// const ans=myfunc();
// console.log(ans);






// function myfunc(){
//     return {name:"sthita",age:19}; // here the function returns a object

// }
// const ans=myfunc();
// console.log(ans);






// similarly a function can also return a function
//-----------------------------------------------------
// function myfunc(){
//     function hello(){
//         console.log("inside the hello");
//     }
//     return hello; // here the function returns a functon

// }
// const ans=myfunc(); // here myfunc returned a function so ans stores a function now.
// console.log(ans);
// ans();







// function myfunc(){
//     function hello(){
//         return "hello world"
//     }
//     return hello; // here the function returns a functon

// }
// const ans=myfunc();
// console.log(ans);
// console.log(ans());







// function myfunc(){
//     return function(){
//         return "hello world";
//     }
// }
// const ans=myfunc();
// console.log(ans);
// console.log(ans());





// note : the functions which are returning the functions or are taking functions as input parameters or doing both of them are called as higher order functions
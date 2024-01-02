// callback functions
//---------------------------------

// function myfunc(a){ // here the value of a is 1
//     console.log(a)
//     console.log("hello world");
// }

// myfunc(1,2,3);





// function myfunc(...a){ // here the value of a is a array
//     console.log(a)
//     console.log("hello world");
// }

// myfunc(1,2,3);






// function myfunc(a){ // here the value of a is a string
//     console.log(a)
//     console.log("hello world");
// }

// myfunc("sthita");








// function myfunc(a){ // here the value of a is object
//     console.log(a)
//     console.log("hello world");
// }

// myfunc({name:"sthita",age:19});


// similarly can a take the value of a function
//-------------------------------------------------


// function myfunc(a){ // here the value of a is a function
//     console.log(a)
//     console.log("hello world");
//     a();// here the function a = func2 is called // this is called as call back function // and as a good practise it is named as callback
// }

// function func2(){
//     console.log("inside the func2");
// }





function myfunc(callback){ // here the value of a is a function
    console.log(callback)
    console.log("hello world");
    callback();// and as a good practise it is named as callback
}

function func2(){
    console.log("inside the func2");
}

myfunc(func2);

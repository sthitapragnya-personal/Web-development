// rules for naming a variable

// you cannot start a varible name with any digit or Number
// example : 
// 1value (invalid)
// value1 (valid)

//var 1value=10; 
//Uncaught SyntaxError: Invalid or unexpected token
//console.log(1value); 
var value1=10;
console.log(value1);

console.log(value1+10);
console.log(value1*10);
console.log(value1/2);
console.log(value1**4); // this ** is used to find out the power.

// you can use only the _ or the $ symbol

// first_name (valid)
// _firstname (valid)

var _firstname = "sthita";
console.log(_firstname);


// first$name (valid)
// $firstname (valid)

var $firstname = "shubham";
console.log($firstname);

// you acnnot use the spaces in between
// first name (invalid) 

var first_name="bibhu"; // snake case writting

var firstName="bibhu"; // camel case writting

// by convention we should start with small 
//letters and then use camel case
// string concatenation

let string1="sthita";
console.log(string1);
let string2="pragnya";
console.log(string2);
let fullname=string1+string2;
console.log(fullname);

fullname=string1+"  "+string2;// adding of space in between
console.log(fullname);

let a="16";
let b="10";

let c=a+b;
console.log(c);
console.log(typeof c);


 c= +a + b; // add + infront of a string to convert ot to a number
console.log(c);
console.log(typeof c);


 c= +a + +b;// add + infront of a string to convert ot to a number
console.log(c);
console.log(typeof c);
//truthy falsy values
//------------------------------

//falsy values
//--------------------
// false
// ""
// null
// undefined
// 0

let firstname="";// it is empty
if (firstname) {
    console.log(firstname)
} else {
    console.log("firstname is empty")
}

 firstname;// it is undefined
if (firstname) {
    console.log(firstname)
} else {
    console.log("firstname is empty")
}

 firstname=0;// it is 0
if (firstname) {
    console.log(firstname)
} else {
    console.log("firstname is empty")
}

 firstname=null;// it is null
if (firstname) {
    console.log(firstname)
} else {
    console.log("firstname is empty")
}


// truthy values
//-----------------------
firstname="sthita";
if (firstname) {
    console.log(firstname)
} else {
    console.log("firstname is empty")
}

firstname=10;
if (firstname) {
    console.log(firstname)
} else {
    console.log("firstname is empty")
}

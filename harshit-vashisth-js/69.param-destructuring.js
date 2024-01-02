// param destructuring
//--------------------------

// note : this is used in case of the objects
//---------------------------------------------

const person={
    name:"sthita",
    year:2,
}


// function details(obj){
//     console.log(obj.name);
//     console.log(obj.year);
//     console.log(obj.age); // it shows underfined
// }

// details(person);



// function details({a,b}){ // note : here the names should be same as they are in the object or else it will be undefined.
//     console.log(a);
//     console.log(b);
// }

details(person);



function details({name,year}){
    console.log(name);
    console.log(year);
}

details(person);
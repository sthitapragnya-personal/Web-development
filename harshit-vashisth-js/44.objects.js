// objects
//arrays are good but they are not sufficient for the representation of the real world datas

// objects don't have the index

// object is refernce type 
// they are stored in the memory just like the array is stored in the memory


//just like in array we use the [] square brackets similarly in the case of the objects we use the {} curly brackets

// here in the case of objects we use the key value pair

const person={name:"sthita",age:18};
console.log(person);
console.log(typeof person);


// how to access the data of the objects
// this is done by using the dot notation technique
console.log(person.name);
console.log(person.age);


const hello={
    name:"sthita",
    age:2,
    hobbies:["guitar","football","reading books"]
}

console.log(hello);
console.log(hello.hobbies);



// how to add more key value pairs in the object
// this is done by using the dot notation technique
// object_name.key="value";
person.gender="male";
console.log(person);



// note : always remember that the key is by default a string so while declaring we may or may not write the key in " " but while accesing the key values using the square bracket technique we have to keep it within " ".

const school={
    "name":"shubham",
    age:19,
    hobbies:["guitar","football","reading books"]
}


// how to access the key vlaues of the object using the square bracket technique
console.log(school["name"]);
console.log(school["age"]);
console.log(school["hobbies"]);




// how to add the key value pairs using the [] technique to the objects
school["gender"]="male";
console.log(school);

school["animal"]="lion";
console.log(school);
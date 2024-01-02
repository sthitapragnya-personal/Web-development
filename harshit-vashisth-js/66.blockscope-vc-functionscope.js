// block scope vs function scope
//------------------------------------

// let and const are blockscope 
// var is function scope

// you can only access the let and const within that block and cannot access outside the block but incase of var you can declare it anywher and access it anywhere in the file

{
  let firstname="sthita";
  console.log(firstname);
}

console.log(firstname);

{
  const a="pragnya";
  console.log(a);
}

console.log(a);

const b="sahoo";
console.log(b);


//-------------------------------------------------

{
  var c="pragnya";
  console.log(c);
}

console.log(c);


//------------------------------------------------------

if(true){
  let x="geeta";
  console.log(x);
}
console.log(x);


if(true){
  var y="rita";
  console.log(y);
}
console.log(y);

//---------------------------------------------------------

function myapp(){
  if(true){
    let x="geeta";
    console.log(x);
  }
  console.log(x);

  if(true){
    var y="rita";
    console.log(y);
  }
  console.log(y);
  
}





// call back functions
//----------------------

function a(name){
    console.log("inside a");
    console.log(`the name is ${name}`);
}

function b(callback){
    console.log("insdie the b");
    callback();
    callback("sthita");
}

b(a);
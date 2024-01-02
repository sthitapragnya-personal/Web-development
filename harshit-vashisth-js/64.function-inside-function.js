// function inside a function

const app=()=>{
    const myfunc=()=>{
        console.log("hello from my func");
    }
    const add=(n1,n2)=>{
       return n1+n2;
    }

    const multiply=(n1,n2)=>n1*n2;

    console.log("inside app");
    myfunc();
    console.log(add(10,20));
}

app();
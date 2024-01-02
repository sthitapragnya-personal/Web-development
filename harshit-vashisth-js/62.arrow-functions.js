// arraow functions
//------------------------

const x = function(){ 
    console.log("happy bday to you 1");
}

console.log(x);






const y= () => {
    console.log("happy bday to you 2");
}

console.log(y);






const z=(n1,n2,n3)=>{
  return n1+n2+n3;
}

console.log(z(1,2,3));







const p=number=>{ // when there is only 1 parameter then you can't use the bracket 
    return number%2==0;
}

console.log(p(10));



// how to return in a single line
//------------------------------------

const abcd=number=> number%2==0;
console.log(abcd(1));



const firstCharecter=string=> string[0];
console.log(firstCharecter("sthita"));
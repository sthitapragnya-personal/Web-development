// lexical scope
//-----------------------
  function myapp(){
      const myvar="value1";
      const abcd="value200";
      function myfunc(){
         const myvar="value59";
         const xyz=100;
              console.log("inside the myfunc",myvar,abcd);
      }
      const myfunc2=function(){
              console.log("inside the myfunc",myvar,xyz);
      }
      const myfunc3=()=>{

      }
      console.log(myvar);
      myfunc();
      myfunc2();
  }
  myapp();


  // in the js first it checks in itself then it checks its previous function or in its parent lexical environment and then in its grandparent lexical environment
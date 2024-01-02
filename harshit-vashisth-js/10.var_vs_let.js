// difference betwwen the var and let keyword
//--------------------------------------------------

let firstname="sthita";
 console.log(firstname);

 firstname ="pragnya";
 console.log(firstname);

 let firstname="sahoo";
 //Uncaught SyntaxError: Identifier 'firstname' has already been declared
 console.log(firstname);

//  so the difference between the var and let keyword is that the varible declarde with the var keyword can be declared again and again but the varible that is declared with the let keyword can only be declared only for the first Time .
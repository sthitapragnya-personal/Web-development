// rest parameters
//--------------------

// function myfunc(a,b,c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }

// myfunc(1,2,3);
// myfunc(4,5,6,7,8,9);





// function myfunc(a,b,...c){ // here c takes the remaining values in the form of a array
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }
// myfunc(1,2,3);
// myfunc(4,5,6,7,8,9);






// function addall(a,b,...c){ 
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
//     console.log(a+b+c);
// }
// addall(1,2,3,4,5,6,7);





// function addall(a,b,...c){ 
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
//     let sum=0;
//     let x=0;
//     while(x<c.length){
//         sum+=c[x];
//         x++;
//     }
//     console.log(a+b+sum)
// }
// addall(1,2,3,4,5,6,7);







// function addall(...c){ 
//     console.log(`c is ${c}`);
//     let sum=0;
//    for (const x of c) { // use of forof loop
//        sum+=x;
//    }
//     console.log(sum)
// }
// addall(1,2,3,4,5,6,7,8,9,10);
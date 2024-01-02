// importatnt array methods
//---------------------------------

// forEach
// map
// filter
// reduce


// const numbers=[4,2,5,8];

// function abcd(n,index){
//     console.log(`index is ${index}`);
//     //console.log(n*2);
//     console.log(`${n}*2 = ${n*2}`)
// }

// abcd(numbers[0],0);
// abcd(numbers[1],1);
// abcd(numbers[2],2);
// abcd(numbers[3],3);








// const number=[4,2,5,8];

// function abcd(n,index){
//     console.log(`index is ${index}`);
//     console.log(`${n}*2 = ${n*2}`)
// }

// for (let i = 0; i < number.length; i++) { 
//     abcd(number[i],i);
    
// }





// use of forEach()
//---------------------------
// const number=[4,2,5,8];

// function abcd(n,index){
//     console.log(`index is ${index}`);
//     console.log(`${n}*2 = ${n*2}`)
// }


// number.forEach(abcd);// it takes imput as a callback







// const number=[4,2,5,8];
// number.forEach(function(number,index){ // it is a anonymous function
//     console.log(`${number},${index}`);
// });






// const number=[4,2,5,8];
// number.forEach(function(n,i){
//     console.log(`${i},${n*2}`);
// })






// const number=[4,2,5,8];
// number.forEach(function(n){
//     console.log(`${n*2}`);
// })







// realistic example of forEach 
//---------------------------------

//suppose if you have a varialble and it has a array of objects


// const user= [
//     {name:"kuna",age:19},
//     {name:"muna",age:29},
//     {name:"tuna",age:39},
//     {name:"duna",age:49},
// ]
// user.forEach(function(user){
//     console.log(user.name);
// })







// const user= [
//     {name:"kuna",age:19},
//     {name:"muna",age:29},
//     {name:"tuna",age:39},
//     {name:"duna",age:49},
// ]
// for (const x of user) {
//     console.log(x.name);
// }









const user= [
    {name:"kuna",age:19},
    {name:"muna",age:29},
    {name:"tuna",age:39},
    {name:"duna",age:49},
]

user.forEach((user)=>{
    console.log(user.firstname,index);
})



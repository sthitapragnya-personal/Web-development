const arrr=[
    [1,2],[3,4],[5,6]
];
console.log(arrr);
let x=arrr.reduce((accumultor,ele)=>{
    return accumultor.concat(ele);
});

console.log(x);
// while loop
//--------------------

const array=[1,2,3,4,5,6,7];

let i=0;
while (i<array.length) {
    console.log(array[i]);
    i++;
}

const newarray=[];
 i=0;
while (i<array.length) {
    newarray.push(array[i]);
    i++;
}
console.log(newarray);
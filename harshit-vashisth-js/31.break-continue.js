// break and continue keyword
//------------------------------

for(let i=0; i<=10; i++){
    console.log(i);
}

console.log("------------------------------");

for(let i=0; i<=10; i++){
    if (i==4) {
        break;// it takes you outside of the same for loop
    }
    console.log(i);
}
console.log("hello there");

console.log("------------------------------");

for(let i=0; i<=10; i++){
    if (i==4) {
        continue;// it takes u to the i++ part of the same for loop
    }
    console.log(i);
}
console.log("hello there");


for(let i=0;i<=10;i++){
    for(let j=0;j<=10;j++){
        for(let k=0;k<=10;k++){
            if (k==4) {
                continue;// it takes u to the i++ part of the same loop
            }
            console.log(k);
        }
    }
}
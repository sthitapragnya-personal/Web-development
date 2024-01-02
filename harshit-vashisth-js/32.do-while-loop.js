// do-while loop
//------------------------

let i=0;
while(i<=10){
    console.log(i);
    i++;
}
console.log("------------------------------");

i=0;
do {// here the first time it doesn't checks the condition.
    console.log(i);
    i++;
} while (i<=10);

console.log("------------------------------");


i=10;
do {// here the first time it doesn't checks the condition.
    console.log(i);
    i++;
} while (i<=9);
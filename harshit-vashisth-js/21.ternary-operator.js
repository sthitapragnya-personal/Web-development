//ternary operator
//--------------------------


//if the age >=5 then drink will take coffee or else it will take milk
let age=15;
let drink;

if (age>=5) {
    drink="coffee";
}
else{
    drink="milk";
}
console.log(drink);

//OR
// we can also the perform the above function by the use of ternary operators
//----------------------------------------------------------

age=3;
drink=age>=5?"coffee":"milk";
drink=age>=5?"coffee":"milk";
console.log(drink);
//arithematic operators: +,-,/,%,**
//aassignment operators: =,+=,-=,*=,/=,%=,**=
//cmparison operators: ==, !=, >, <, >=, <=, ===
//logical operators; &&, ||, !
//ternary operator : ?:
//increment & decrement operator: --a, a--, ++a, a++

//we are having temperature in celcius, you need to convert in farhinite.
// let celsiusTemperature = 25; 
// let fahrenheitTemperature = (25 * 9/5) + 32;
// console.log(fahrenheitTemperature);

//== vs ===
// let a = 10;
// let b = "10";
// console.log(a==b);//only check values
// console.log(a===b);//check both values & datatype
console.log(5 == 5);
console.log(5 != 5);
console.log(5 == "5");
console.log(6 !== 5);
console.log("a" == "b");
console.log("a" != "a");

let a = 10;
let b = 20;
//first increase then assign => pre
//first assign then increase =>post
console.log(++a - --b + a++ + --b - a++ - b-- + b++ + --a + a--);
        //  11      19   11    18    12   18     17    12    12
        // a=11, b=18

//data types
// let studentObj = {
//     name : "Afreen",
//     age : 22,
//     marks :90,
//     subjects : "maths science biology",
//     isStudent : true,
//     name : "Jamadar",
//     address : {
//         city : "Mumbai",
//         houseNo : 234,
//         state : "Maharashtra",
//         country : "India"
//     }
// };
// console.log(studentObj);

// //dot notation
// console.log(studentObj.age);

// //update 
// studentObj.age = 23;
// studentObj.phoneNo = 8779512312;

// //delete
// delete studentObj.marks;
// console.log(studentObj);

// let a = 10;
// let b = "Afreen Jamadar";
// let c = true;
// let d = null;
// let e = undefined;
// let f = BigInt(723456891234542);
// let g = null;
// console.log(typeof a,typeof b,typeof c,typeof d,typeof e,typeof f,typeof g);
// console.log(a,b,c,d,e,f,g);
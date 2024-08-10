"use strict";

let a = 1,
  b = 1;

let c = ++a; // a = 2
let d = b++; // b = 1

console.log(c, d);

//______________________________________

let s = 2;

let x = 1 + (s *= 2); // x = 5

console.log(x);
//______________________________________

console.log("" + 1 + 0); // '10'
console.log("" - 1 + 0); // -1
console.log(true + false); // 1
console.log(6 / "3"); // 2
console.log("2" * "3"); //6
console.log(4 + 5 + "px"); // 9px
console.log("$" + 4 + 5); // '$45'
console.log("4" - 2); // 2
console.log("4px" - 2); // NaN
console.log("  -9  " + 5); // '-9 5'
console.log("  -9  " - 5); // -14
console.log(null + 1); // 1
console.log(undefined + 1); // NaN
console.log(" \t \n" - 2); // -1

//______________________________________

const operation1 = +prompt("Первое число?", 1);
const operation2 = +prompt("Второе число?", 2);

alert(`Your result is: ${operation1 + operation2}`); // 3

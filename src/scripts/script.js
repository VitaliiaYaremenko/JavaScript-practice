"use strict";

alert(undefined ?? NaN ?? null ?? "" ?? " "); //NaN

//_______________________________________

let city = null;

city ??= "Берлин";
city ??= null;
city ??= "Кёльн";
city ??= "Гамбург";

alert(city); //Берлин

//_______________________________________

let num1 = 10,
  num2 = 20,
  result;

if (result === null || result === undefined) {
  if (num1 !== null && num1 !== undefined) {
    result = num1;
  } else {
    result = num2;
  }
}

const operation = (num1 ??= result) && (num2 ??= result);
console.log(operation);

result ??= num1 ?? num2;
console.log(result);

"use strict";

const checkAge = function (age) {
  let result = age > 18 ? true : confirm("Родители разрешили?");

  return result;
};

console.log(checkAge(12));

const checkAge2 = function (age) {
  const result = age > 18 || confirm("Родители разрешили?");

  return result;
};

console.log(checkAge2(12));

//____________________________________________________

const min = function (a, b) {
  const result = a < b ? a : b;

  return result;
};

console.log(min(2, 5));

//____________________________________________________

const pow = function () {
  const userNumber = +prompt("Enter your number: ", "");
  const userPow = +prompt("Enter your pow: ", "");

  if (!userNumber >= 1 || userPow % 2 !== 0)
    throw new Error("You need to specify a number greater than 1!");

  return userNumber ** userPow;
};

console.log(pow());

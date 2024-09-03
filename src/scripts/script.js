"use strict";

const addBinary = (a, b) => {
  const sum = a + b;

  const result = sum.toString(2);

  return result;
};

console.log(addBinary(1, 1));
console.log(addBinary(5, 9));

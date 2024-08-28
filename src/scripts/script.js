"use strict";

const sumAll = (a) => {
  return function (b) {
    return a + b;
  };
};

const result = sumAll(5)(4);
console.log(result);

"use strict";

const sumTo = (n) => {
  let number = 0;

  for (let i = 1; i <= n; i += 1) {
    number += i;
  }
  return number;
};

console.log(sumTo(5));
console.log(sumTo(2));

const sumTo2 = (n) => {
  if (n === 1) {
    return 1;
  } else {
    return n + sumTo2(n - 1);
  }
};
console.log(sumTo2(5));

const sumTo3 = (n) => {
  return (n * (n + 1)) / 2;
};

console.log(sumTo3(4));
//_________________________________________________

const factorial = (n) => {
  return n !== 1 ? n * factorial(n - 1) : 1;
};

console.log(factorial(5));

//_________________________________________________

const fib = (n) => {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
};

console.log(fib(3));
console.log(fib(7));
//________________________________________________

const list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
const printList = (list) => {
  let result = list;

  while (result) {
    console.log(result.value);
    result = result.next;
  }
};
printList(list);

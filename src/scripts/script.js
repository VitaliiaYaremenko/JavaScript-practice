"use strict";

const userNumberX = +prompt(`Write your X number: `, "0");
const userNumberY = +prompt(`Write your Y number: `, "0");

let result;

if (!isFinite(userNumberY) || !isFinite(userNumberX)) {
  throw new Error(`Write the number please!`);
} else {
  result = userNumberX + userNumberY;
}
alert(`Sum ${userNumberX} + ${userNumberY} = ${result}`);
//_______________________________________________________________

const number = 6.35;

const roundedNumber = Math.round(number * 10) / 10;
console.log(roundedNumber);

//_______________________________________________________________

const readNumber = () => {
  let userNumber;

  do {
    userNumber = +prompt(`Enter number please`, "");
  } while (!isFinite(userNumber));

  if (userNumber === null || userNumber === " ") {
    return null;
  }
  return userNumber;
};
alert(`Your number is: ${readNumber()}`);

//_______________________________________________________________

const random = (min, max) => {
  const result = min + Math.random() * (max - min);
  return result;
};

console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));

//_______________________________________________________________

const randomInteger = (min, max) => {
  const random = min + Math.random() * (max + 1 - min);
  const result = Math.floor(random);
  return result;
};
console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));

"use strict";

const styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");

const averageArrayLength = Math.floor(styles.length - 1) / 2;
console.log(averageArrayLength);
styles[averageArrayLength] = "Классика";

const deleteElem = styles.shift();
console.log(deleteElem);

styles.unshift("Рэп", "Регги");
console.log(styles);

//___________________________________________

const sumInput = () => {
  let result = [];

  while (true) {
    let userNumber = prompt("Enter your number: ", "0");

    if (userNumber === null || userNumber === " ") break;
    result.push(+userNumber);
  }

  let sum = 0;

  for (let number of result) {
    sum += number;
  }
  return sum;
};

console.log(sumInput());

//___________________________________________

"use strict";

const numbers = [1, 2, 3, 4, 5];

const result1 = numbers.map((item) => item + 10);
console.log(result1);
//__________________________________________________________________

const words = ["apple", "banana", "pear", "grape", "pineapple"];

const result2 = words.filter((item) => item.length > 5);
console.log(result2);

//__________________________________________________________________
const arrNumbers = [10, 20, 30, 40];

const result3 = arrNumbers.reduce((accum, num) => accum + num);
console.log(result3);

//__________________________________________________________________
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Jack" },
];

users.forEach((user) => {
  console.log(`User name is: ${user.name}`);
});

console.log(users);

//__________________________________________________________________
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
  { name: "Charlie", age: 28 },
];

const result4 = people.find((human) => human.age > 30);
console.log(result4);

//__________________________________________________________________
const arrNumbers2 = [3, 5, -2, 8, 7];

const result5 = arrNumbers2.some((num) => num < 0);
console.log(result5);
//__________________________________________________________________
const arrNumbers3 = [1, 2, 3, 4, 5];

const result6 = arrNumbers3.every((num) => num > 0);
console.log(result6);

//__________________________________________________________________
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const result7 = array1.concat(array2);
console.log(result7);

//__________________________________________________________________

const arrNumbers4 = [10, 20, 30, 40, 50, 60];

const result8 = arrNumbers4.slice(2, 4);
console.log(result8);

//__________________________________________________________________
const arrNumbers5 = [1, 2, 4, 5];
const newNumber = 3;

const result9 = arrNumbers5.splice(2, 0, newNumber);
console.log(result9);
console.log(arrNumbers5);

//__________________________________________________________________
const fruits = ["banana", "apple", "orange", "pear"];

const result10 = fruits.indexOf("apple");
console.log(result10);

//__________________________________________________________________
const fruits2 = ["banana", "apple", "orange", "pear"];

const result11 = fruits2.includes("grape");
console.log(result11);

//__________________________________________________________________

const words2 = ["banana", "apple", "cherry"];
words2.sort();

console.log(words2);

//__________________________________________________________________

const arrNumbers6 = [1, 2, 3, 4, 5];

const result12 = arrNumbers6.splice(1, 2);
console.log(result12);
console.log(arrNumbers6);

//__________________________________________________________________
const words3 = ["apple", "banana", "cherry"];

const result13 = words3.join(",");
console.log(result13);
//__________________________________________________________________
const arrNumbers7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result14 = arrNumbers7.filter((number) => number % 2 === 0);
console.log(result14);

//__________________________________________________________________

const words4 = ["apple", "banana", "cherry"];

const result15 = words4.map((fruit) => fruit.length);
console.log(result15);
console.log(words4);

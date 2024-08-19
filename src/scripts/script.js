"use strict";

const salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

const sumSalaries = (obj) => {
  let result = 0;

  for (let salary of Object.values(obj)) {
    result += salary;
  }
  return result;
};

console.log(sumSalaries(salaries));
//__________________________________________

const user = {
  name: "John",
  age: 30,
};

const count = (obj) => {
  const valueKey = Object.keys(obj);

  const sumKey = valueKey.length;
  return sumKey;
};

console.log(count(user));

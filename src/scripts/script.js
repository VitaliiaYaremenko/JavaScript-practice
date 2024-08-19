"use strict";

const user = {
  name: "John",
  years: 30,
};

let { name, years: age, isAdmin = false } = user;

console.log(name);
console.log(age);
console.log(isAdmin);
//______________________________________________________

const salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

const topSalary = (obj) => {
  let maxSalary = 0;
  let maxEmployee;

  for (let [name, salary] of Object.entries(obj)) {
    if (maxSalary < salary) {
      maxEmployee = name;
      maxSalary = salary;
    }
  }
  return maxEmployee;
};

console.log(topSalary(salaries));

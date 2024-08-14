"use strict";

const user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

console.log(user);

//__________________________________

let schedule = {};
schedule.name = "Dog";

const isEmpty = (obj) => {
  let result;

  for (let prop in obj) {
    result = false;

    return result;
  }
  result = true;

  return result;
};

console.log(isEmpty(schedule));

//__________________________________

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const getSalaries = (obj) => {
  let result = 0;

  for (let prop in obj) {
    result += obj[prop];
  }

  return result;
};

console.log(getSalaries(salaries));

//__________________________________

const menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

const multiplyNumeric = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
};

multiplyNumeric(menu);
console.log(menu);

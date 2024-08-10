"use strict";

const createdJavaScriptCompany = prompt(
  'What is the "official" name of JavaScript?',
  "",
);

if (createdJavaScriptCompany === "ECMAScript") {
  alert("That's great! That's right!");
} else {
  alert('You don\'t know? "ECMAScript"!');
}

//___________________________________________

const userNumber = +prompt("Write your number please", "0");

if (userNumber > 0) {
  alert("1 - Your number is greater than 0!");
} else if (userNumber < 0) {
  alert("-1  - Your number is less than 0!");
} else if (userNumber === 0) {
  alert("Your number is : 0");
}

//___________________________________________

let a = 13;
let b = 1;
let result = a + b < 4 ? "Маловато" : "Много";
console.log(result);
//___________________________________________

let login = null;

let message =
  login === "Сотрудник"
    ? "Привет"
    : login === "Директор"
      ? "Здравствуйте"
      : login === ""
        ? "Нет логина"
        : "Попробуйте позже";

alert(message);

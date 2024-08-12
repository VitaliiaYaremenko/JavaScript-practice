"use strict";

const operation1 = null || 2 || undefined; //2
alert(operation1);

//__________________________________________

alert(alert(1) || 2 || alert(3)); //1, 2

//__________________________________________

alert(1 && null && 2); //null

//__________________________________________

alert(alert(1) && alert(2)); // 1 undefined

//__________________________________________

alert(null || (2 && 3) || 4); //3

//__________________________________________

let value = NaN;

value &&= 10; //NaN
value ||= 20; // 20
value &&= 30; // 30
value ||= 40; // value = true (30)

alert(value); //30

//__________________________________________

let age = 14;

if (age < 14 || age > 90) {
  alert("Good job");
} else {
  alert("Wrong");
}

if (!(age >= 14 && age <= 90)) {
  alert("Good!");
}

//__________________________________________

if (-1 || 0) alert("first"); //-1
if (-1 && 0) alert("second"); //0
if (null || (-1 && 1)) alert("third"); // 1

//__________________________________________

const userLogin = prompt("Введите свой логин", "Админ");

if (userLogin === "Админ") {
  let password = prompt("Пароль", "Я Главный");

  if (password === "Я Главный") {
    alert("Здравствуйте");
  } else if (password === " " || password === null) {
    alert("Отменено");
  } else {
    alert("Я вас не знаю");
  }
} else if (userLogin === " " || userLogin === null) {
  alert("Отменено");
} else {
  alert("Я вас не знаю");
}

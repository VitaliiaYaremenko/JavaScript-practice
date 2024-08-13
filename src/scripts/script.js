"use strict";

const userBrowser = prompt("Enter your browser", "Edge");

if (userBrowser === "Edge") {
  alert("You've got the Edge!");
} else if (
  userBrowser === "Chrome" ||
  userBrowser === "Firefox" ||
  userBrowser === "Safari" ||
  userBrowser === "Opera"
) {
  alert("Okay we support these browsers too");
} else {
  alert("We hope that this page looks ok!");
}

//__________________________________________________________

const userNumber = +prompt("Введите число между 0 и 3", "");

switch (userNumber) {
  case 0:
    alert("Вы ввели число 0");
    break;

  case 1:
    alert("Вы ввели число 1");
    break;

  case 2:
  case 3:
    alert("Вы ввели число 2, а может и 3");
    break;

  default:
    alert("Ви точно ввели нужное число?");
}

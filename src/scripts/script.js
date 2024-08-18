"use strict";

const ucFirst = (str) => {
  let userStr = str;

  if (userStr.length === -1 || userStr === " ") {
    throw new Error(`Empty string!`);
  }

  const getSymbol = userStr[0].toUpperCase();
  userStr = getSymbol + userStr.slice(1);

  return userStr;
};

console.log(ucFirst("vova"));
//__________________________________________________

const checkSpam = (str) => {
  const userStr = str;
  let result = false;

  const loverCase = userStr.toLowerCase();

  if (loverCase.indexOf("viagra") !== -1 || loverCase.indexOf("xxx") !== -1) {
    result = true;
    return result;
  }

  return result;
};

console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));

//__________________________________________________

const truncate = (str, maxlength) => {
  const userStr = str;
  const userMaxlength = maxlength;
  const strLength = userStr.length;

  let result;

  if (!userStr || userStr === " " || !userMaxlength || userMaxlength === " ") {
    throw new Error(`Incorrect data, try agan!`);
  }

  if (strLength > userMaxlength) {
    result = userStr.slice(0, userMaxlength - 1) + "...";
    return result;
  }
  return userStr;
};

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20));
//__________________________________________________

const extractCurrencyValue = (str) => {
  let strValue = str;

  const result = +strValue.slice(1);
  return result;
};

console.log(extractCurrencyValue("$120"));

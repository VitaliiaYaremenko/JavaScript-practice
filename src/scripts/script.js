"use strict";

const user = {
  name: "Василий Иванович",
  age: 35,
};

const jsonObj = JSON.stringify(user);
console.log(jsonObj);

const parseObj = JSON.parse(jsonObj);
console.log(parseObj);

//_________________________________________________
const room = {
  number: 23,
};

const meetup = {
  title: "Совещание",
  occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
  place: room,
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

const result = JSON.stringify(meetup, function (key, value) {
  console.log(`Obg key: ${key}  Obj value: ${value}`);
  return key !== "" && value === meetup ? undefined : value;
});

console.log(result);

"use strict";

let i = 3;

while (i) {
  alert(i--); // 1
}
//____________________________________

let i = 0;
while (++i < 5) alert(i); // 1, 2, 3, 4

let a = 0;
while (a++ < 5) alert(i); // 0, 1, 2, 3, 4

//____________________________________

for (let i = 0; i < 5; i++) alert(i); //0, 1, 2, 3, 4,

for (let i = 0; i < 5; ++i) alert(i); //0, 1, 2, 3, 4

//____________________________________

for (let i = 2; i < 11; i += 1) {
  if (i % 2 !== 0) continue;

  console.log(i);
}

//____________________________________

let i = 0;

while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

//____________________________________
let userNumber;

do {
  userNumber = +prompt(`Write your number`, "");
} while (userNumber <= 100 && userNumber);

//____________________________________

let n = 5;

nextPrime: for (let i = 2; i <= n; i += 1) {
  for (let j = 2; j < i; j += 1) {
    if (i % j === 0) continue nextPrime;
  }
  alert(`${i}`);
}

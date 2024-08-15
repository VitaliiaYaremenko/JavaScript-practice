"use strict";

// function Calculator() {
//   this.read = function () {
//     this.a = +prompt(`Enter first number: `, "");
//     this.b = +prompt(`Enter second number: `, "");
//   };
//
//   this.sum = function () {
//     return this.a + this.b;
//   };
//
//   this.mul = function () {
//     return this.a * this.b;
//   };
// }
//
// let calculator = new Calculator();
// calculator.read();
//
// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());
//______________________________________________________________

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.newNumber = +prompt(`Enter your number: `, "");
    this.value = this.value + this.newNumber;

    return this.value;
  };
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();

alert(accumulator.value);

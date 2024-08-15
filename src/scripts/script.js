"use strict";

function makeUser() {
  return {
    name: "John",
    ref: this, // undefined
  };
}

let user = makeUser();
alert(user.ref.name); // Error: Cannot read property 'name' of undefined

//_________________________________________________________________

let calculator = {
  read() {
    this.a = +prompt(`Enter your first number: `, "");
    this.b = +prompt(`Enter your second number: `, "");
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

console.log(calculator.read());
console.log(calculator.sum());
console.log(calculator.mul());
//_________________________________________________________________

let ladder = {
  step: 0,

  up() {
    this.step++;
    return this;
  },

  down() {
    this.step--;
    return this;
  },

  showStep: function () {
    alert(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep();

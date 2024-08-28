"use strict";

const head = {
  glasses: 1,
};

const table = {
  pen: 3,

  __proto__: head,
};

const bed = {
  sheet: 1,
  pillow: 2,

  __proto__: table,
};

const pockets = {
  money: 2000,
  __proto__: bed,
};

console.log(pockets.pen);
console.log(bed.glasses);

//_____________________________________________________

const hamster = {
  stomach: [],

  eat(food) {
    return (this.stomach = [food]);
  },
};

const speedy = {
  __proto__: hamster,
};

const lazy = {
  __proto__: hamster,
};

speedy.eat("apple");
console.log(speedy.stomach);

console.log(lazy.stomach);

"use strict";

const styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");

styles[1] = "Классика";

const deleteElem = styles.shift();
console.log(deleteElem);

styles.unshift("Рэп", "Регги");
console.log(styles);

//___________________________________________

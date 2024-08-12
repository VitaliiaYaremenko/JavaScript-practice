**Что выведет этот код?**

alert(undefined ?? NaN ?? null ?? "" ?? " ");


**Какой будет результат выполнения этого кода?**
Что будет выведено в итоге?

let city = null;

city ??= "Берлин";
city ??= null;
city ??= "Кёльн";
city ??= "Гамбург";

alert(city);


**Перепишите код используя операторы ??, ??=**

Перепишите этот код используя операторы нулевого слияния и присваивания.

let num1 = 10,
num2 = 20,
result;

if (result === null || result === undefined) {
if (num1 !== null && num1 !== undefined) {
result = num1;
} else {
result = num2;
}
}

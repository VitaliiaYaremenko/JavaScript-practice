**Постфиксная и префиксная формы**

Чему будут равны переменные a, b, c и d в примере ниже?
let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?
//_______________________________

**Результат присваивания**

Чему будут равны переменные a и x после исполнения кода в примере ниже?

let a = 2;

let x = 1 + (a *= 2);
//_______________________________

**Преобразование типов**

"" + 1 + 0
"" - 1 + 0
true + false
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
"  -9  " + 5
"  -9  " - 5
null + 1
undefined + 1
" \t \n" - 2
//_______________________________

**Исправьте сложение**
Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.

Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию).

В чём ошибка? Исправьте её. Результат должен быть 3.

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(a + b); // 12

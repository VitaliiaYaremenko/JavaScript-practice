**1. Перепишите функцию, используя оператор '?' или '||';**

Следующая функция возвращает true, если параметр age больше 18.
В ином случае она задаёт вопрос confirm и возвращает его результат.

function checkAge(age) {
if (age > 18) {
return true;
} else {
return confirm('Родители разрешили?');
}
}

Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
Сделайте два варианта функции checkAge:

1. Используя оператор ?
2. Используя оператор ||



**2. Функция min(a, b)**
Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.


**3. Функция pow(x,n)**

Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.
Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).

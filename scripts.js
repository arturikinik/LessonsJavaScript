//1 Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.
/*let num = +prompt();
if (num < 0) {
  console.log(num + " отрицательное число");
} else {
  console.log(num + " положительное число");
}
*/

//2 Дана строка. Выведите в консоль длину этой строки.
/*
let string = prompt();
console.log(string.length); 
*/

//3 Дана строка. Выведите в консоль последний символ строки.

/* 
let string = prompt();
let lastChar = string.slice(-1);
console.log(`Последний символ строки: ${lastChar}`);
*/
//4 Дано число. Проверьте, четное оно или нет.
/* 
let num = +prompt();
if (num % 2 == 0) {
  console.log(num + " - Это чётное число");
} else {
  console.log(num + " - Это нечётное число");
}
*/

//5 Даны два слова. Проверьте, что первые буквы этих слов совпадают.
//  Вариант 1
// let word1 = prompt("Введите первое слово");
// let word2 = prompt("Введите второе слово");
// let charWord1 = word1[0];
// let charWord2 = word2[0];
// if (charWord1 == charWord2) {
//   console.log("Первые буквы этих слов совпадают");
// } else {
//   console.log("Первые буквы этих слов не совпадают");
// }
//   Вариант 2
// let word1 = prompt("Введите первое слово");
// let word2 = prompt("Введите второе слово");
// let message = word1[0] === word2[0] ? "Первые буквы этих слов совпадают" : "Первые буквы этих слов не совпадают";
// console.log(message);

//6 Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.

// let word = prompt("Введите слово");
// let lastLetter = word.endsWith('ь') ? word[word.length - 2] : word[word.length - 1];
// console.log(lastLetter);

//7 Дано число. Выведите в консоль первую цифру этого числа.

// let num = +prompt("Введите число");
// let firstDigit = Math.abs(num).toString().charAt(0);
// console.log(firstDigit);

//8 Дано число. Выведите в консоль последнюю цифру этого числа.
// let num = prompt("Введите число");
// let lastDigit = Math.abs(num).toString().charAt(num.length - 1);
// console.log(lastDigit);

//9 Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
// let num = prompt("Введите число");
// let numStr = Math.abs(num).toString();
// let firstDigit = parseInt(numStr.charAt(0)); // Получаем первую цифру и преобразуем в число
// let lastDigit = parseInt(numStr.charAt(numStr.length - 1)); // Получаем последнюю цифру и преобразуем в число
// let sum = firstDigit + lastDigit; // Суммируем первую и последнюю цифры
// console.log("Сумма первой и последней цифры: " + sum);

//10 Дано число. Выведите количество цифр в этом числе.
// let num = prompt("Введите число");
// let numStr = Math.abs(num).toString();
// let sum = 0;
// for (i = 0; i < numStr.length; i++) {
//   sum += 1;
// }
// console.log(sum);

//11 Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
// let num1 = +prompt("Введите 1 число");
// let num2 = +prompt("Введите 2 число");
// let firstDigitnum1 = Math.abs(num1).toString().charAt(0);
// let firstDigitnum2 = Math.abs(num2).toString().charAt(0);
// if (firstDigitnum1 === firstDigitnum2) {
//   console.log("Цифры совпадают");
// } else {
//   console.log("Цифры не совпадают");
// }

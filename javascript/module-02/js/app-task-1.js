"use strict";
const numbers = [];
let input;
let total = 0;

while (true) {
  input = prompt("Ввведите число или для завершения нажмите Cancel");

  if (input === null) break;

  if (isNaN(input)) alert("Вы ввели не число. Попробуйте еще раз.");
  else {
    input = Number(input);
    numbers.push(input);
    total += input;
  }
}

if (numbers.length > 0)
  console.log(`Массив ${numbers} с общей суммой ${total}`);

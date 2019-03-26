"use strict";
const numbers = [];
let input;
let total = 0;

while (true) {
  input = prompt("Ввведите число или для завершения нажмите Cancel");

  if (input === null) break;

  //isNan fixed to Number.isNaN
  if (Number.isNaN(input)) {
    alert("Вы ввели не число. Попробуйте еще раз.");
  } else {
    numbers.push(Number(input));
  }
}

//As was written in ex. created another loop
if (numbers.length > 0) {
  for (const value of numbers) {
    total += value;
  }
  console.log(`Массив ${numbers} с общей суммой ${total}`);
}

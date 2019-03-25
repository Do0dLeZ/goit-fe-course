"use strict";
let credits = 23580;
const pricePerDroid = 3000;
let quantity = prompt("Введите количество дроидов для приобретения...");

const totalPrice = pricePerDroid * quantity;

let message;

if (totalPrice > credits) {
  message = "Недостаточно средств на счету!";
} else {
  message = `Вы купили ${quantity} дроидов, на счету осталось ${credits -
    totalPrice} кредитов.`;
}

alert(message);

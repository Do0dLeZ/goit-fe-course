"use strict";
let credits = 23580;
const pricePerDroid = 3000;
let quantity = prompt("Введите количество дроидов для приобретения...");

const totalPrice = pricePerDroid * quantity;

if (totalPrice > credits) {
  alert("Недостаточно средств на счету!");
} else {
  alert(
    `Вы купили ${quantity} дроидов, на счету осталось ${credits -
      totalPrice} кредитов.`
  );
}

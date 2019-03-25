"use strict";
let country = prompt(
  "Введите название страны... Индия, Китай, Южная Америка, Ямайка"
);

let deliveryPrice;
country = country.trim().toUpperCase();

switch (country) {
  case "Индия":
    deliveryPrice = 80;
    break;
  case "Китай":
    deliveryPrice = 100;
    break;
  case "Южная Америка":
    deliveryPrice = 250;
    break;
  case "Австралия":
    deliveryPrice = 170;
    break;
  case "Ямайка":
    deliveryPrice = 120;
    break;
  default:
    console.log("В вашей стране доставка не доступна");
    break;
}

if (deliveryPrice)
  console.log(`Доставка в ${country} будет стоить ${deliveryPrice}`);

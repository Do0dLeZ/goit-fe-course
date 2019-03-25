"use strict";
const passwords = ["qwerty", "111qwe", "123123", "r4nd0mp4zzw0rd"];
let attemptsLeft = 3;
let message = "У вас закончились попытки, аккаунт заблокирован!";

while (attemptsLeft > 0) {
  let inputPass = prompt("Введите пароль!");

  if (passwords.includes(inputPass)) {
    message = "Добро пожаловать!";
    break;
  } else {
    attemptsLeft--;
    if (attemptsLeft >= 1)
      alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
  }
}

alert(message);

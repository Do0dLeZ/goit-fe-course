"use strict";
const passwords = ["qwerty", "111qwe", "123123", "r4nd0mp4zzw0rd"];
let attemptsLeft = 3;
const NO_MORE_TRY_MSG = "У вас закончились попытки, аккаунт заблокирован!";
const WELCOME_MSG = "Добро пожаловать!";

while (attemptsLeft > 0) {
  let inputPass = prompt("Введите пароль!");

  //Was added condition that user provide or do not provide Cancle...
  if (inputPass !== null) {
    if (passwords.includes(inputPass)) {
      alert(WELCOME_MSG);
      break;
    } else {
      attemptsLeft--;
      if (attemptsLeft >= 1) {
        alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
      } else {
        alert(NO_MORE_TRY_MSG);
      }
    }
  }
}

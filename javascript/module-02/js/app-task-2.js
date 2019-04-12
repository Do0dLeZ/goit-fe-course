"use strict";
const passwords = ["qwerty", "111qwe", "123123", "r4nd0mp4zzw0rd"];
let attemptsLeft = 3;
const NO_MORE_TRY_MSG = "У вас закончились попытки, аккаунт заблокирован!";
const WELCOME_MSG = "Добро пожаловать!";

//Потому что 0 даст false
while (attemptsLeft) {
  let inputPass = prompt("Введите пароль!");

  //Was added condition that user provide or do not provide Cancle...
  if (inputPass === null) break;

  if (passwords.includes(inputPass)) {
    alert(WELCOME_MSG);
    break;
  }

  alert(`Неверный пароль, у вас осталось ${attemptsLeft--} попыток`);

  if (!attemptsLeft) {
    alert(NO_MORE_TRY_MSG);
  }
}

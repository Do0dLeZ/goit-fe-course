"use strict";
const ADMIN_PASSWORD = "m4ng0h4ckz";
let callBackForPassword = prompt("Введите пароль администратора!");
let message;

if (callBackForPassword === null) {
  message = "Отменено пользователем!";
} else if (ADMIN_PASSWORD !== callBackForPassword) {
  message = "Доступ запрещен, неверный пароль!";
} else {
  message = "Добро пожаловать!";
}

alert(message);

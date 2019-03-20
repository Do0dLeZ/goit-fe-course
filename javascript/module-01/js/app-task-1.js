"use strict";
const ADMIN_PASSWORD = "m4ng0h4ckz";
let callBackForPassword = prompt("Введите пароль администратора!");

if (callBackForPassword === null) {
  alert("Отменено пользователем!");
} else if (ADMIN_PASSWORD !== callBackForPassword) {
  alert("Доступ запрещен, неверный пароль!");
} else {
  alert("Добро пожаловать!");
}

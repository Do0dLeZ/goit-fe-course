const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = login => login.length >= 4 && login.length <= 16;

const isLoginUnique = (allLogins, login) => !allLogins.includes(login);

//Но я бы сделал 1 return а в let msg вставлял значения и в конце вернул бы значение msg... или так не естетично?
const addLogin = (allLogins, login) => {
  if (!isLoginValid(login)) {
    return "Ошибка! Логин должен быть от 4 до 16 символов";
  }
  if (!isLoginUnique(allLogins, login)) {
    return "Такой логин уже используется!";
  }
  allLogins.push(login);
  return "Логин успешно добавлен!";
};

// Вызовы функции для проверки
console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'

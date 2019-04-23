//           *********************************** Task 1 ***********************************
console.log(
  "*********************************** Task 1 ***********************************"
);

/*  Перепишите все циклы for используя методы map, filter, find, reduce и т. д. */

/* 
  Функция findGreaterThan принимает два параметра - число и массив.
  Возвращает новый массив, содержащий элементы которые больше числа.
*/
const findGreaterThan = (num, arr) => {
  return arr.filter(item => item > num);
};

console.log(findGreaterThan(2, [1, 2, 3, 4, 5])); // [3, 4, 5,]
console.log(findGreaterThan(3, [1, 2, 3, 4, 5])); // [4, 5,]
console.log(findGreaterThan(1, [1, 2, 3, 4, 5])); // [2, 3, 4, 5,]

/* 
    Функция multiplyBy принимает два параметра - число и массив. 
    Возвращает массив все значения которого умножены на число.
  */
const multiplyBy = (num, arr) => {
  return arr.map(item => item * num);
};

console.log("Multiply by", multiplyBy(2, [1, 2, 3, 4, 5])); // [2, 4, 6, 8, 10]
console.log("Multiply by", multiplyBy(3, [1, 2, 3, 4, 5])); // [3, 6, 9, 12, 15]
console.log("Multiply by", multiplyBy(4, [1, 2, 3, 4, 5])); // [4, 8, 12, 16, 20]

/* 
    Функция summAllNumbers принимает любое число аргументов.
    Возвращает число - сумму всех аргументов.
  */
function summAllNumbers(...args) {
  return args.reduce((acc, item) => acc + item, 0);
}

console.log("Summary:", summAllNumbers(1, 2, 3)); // 6
console.log("Summary:", summAllNumbers(1, 2, 3, 4)); // 10
console.log("Summary:", summAllNumbers(1, 2, 3, 4, 5)); // 15

/* 
    Функция findEvery получает два аргумента - число и массив.
    Возвращает true если все элементы массива больше или равны числу.
    Иначе если есть хоть один элемент меньше числа, то возвращается false.
  */
const findEvery = (num, arr) => {
  return arr.every(item => item >= num);
};

console.log("All numbers are higher:", findEvery(5, [5, 6, 7, 8, 9])); // true
console.log("All numbers are higher:", findEvery(6, [5, 6, 7, 8, 9])); // false
console.log("All numbers are higher:", findEvery(4, [5, 6, 7, 8, 9])); // true

// *********************************** Task 2 ***********************************
console.log(
  "*********************************** Task 2 ***********************************"
);

/*
  Напиши функию getPropValues(arr, prop), принимающую 
  параметры arr - массив, и prop - имя ключа в объекте. 
  
  Функция должна возвращать массив всех значений этого ключа из arr.
  
  PS: обязательно использу перебирающие методы массивов, никаких for!
*/

const getPropValues = (arr, prop = {}) => {
  return arr.map(item => item[prop]);
};

const guests = [
  { name: "Mango", age: 20, isActive: true },
  { name: "Poly", age: 18, isActive: false },
  { name: "Ajax", age: 30, isActive: true },
  { name: "Chelsey", age: 45, isActive: false }
];

// Вызовы функции для проверки
console.log(getPropValues(guests, "name")); // ['Mango', 'Poly', 'Ajax', 'Chelsey']
console.log(getPropValues(guests, "age")); // [20, 18, 30, 45]
console.log(getPropValues(guests, "isActive")); // [true, false, true, false]

// *********************************** Task 3 ***********************************
console.log(
  "*********************************** Task 3 ***********************************"
);

/*      
  Напиши функцию setGuestState(guests, period), где
  guests - массив гостей, period - кол-во дней после
  которого считается что гость не активен.
    
  Если значение поля inactiveDays болше чем period, 
  поставить для isActive значение false.
    
  Если же значение inactiveDays меньше чем period,
  поставить для isActive значение true
  
  PS: обязательно используй перебирающие методы массивов, никаких for!
*/

const setGuestState = (guests, period) => {
  guests.forEach(element => {
    if (element.inactiveDays > period) element.isActive = false;
    else element.isActive = true;
  });
  return guests;
};

const users = [
  { name: "Mango", inactiveDays: 15, isActive: true },
  { name: "Poly", inactiveDays: 8, isActive: false },
  { name: "Ajax", inactiveDays: 32, isActive: false },
  { name: "Chelsey", inactiveDays: 85, isActive: true }
];

// Вызовы функции для проверки
console.log(setGuestState(users, 10)); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true

console.log(setGuestState(users, 20)); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true

console.log(setGuestState(users, 50)); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true

// *********************************** Task 4 ***********************************
console.log(
  "*********************************** Task 4 ***********************************"
);

/*
  Напиши функию getActiveGuests(guests), принимающую массив объектов гостей. 
  
  Функция должна возвращать массив объектов гостей, значение поля isActive которых true.
         
  PS: обязательно используй перебирающие методы массивов, никаких for!
*/

const getActiveGuests = arr => {
  return arr.filter(item => item.isActive);
};

const guestsTwo = [
  { name: "Mango", age: 20, isActive: true },
  { name: "Poly", age: 18, isActive: false },
  { name: "Ajax", age: 30, isActive: true },
  { name: "Chelsey", age: 45, isActive: false }
];

// Вызовы функции для проверки
console.log(getActiveGuests(guestsTwo)); // массив из 2-х объектов Mango и Ajax

// *********************************** Task 5 ***********************************
console.log(
  "*********************************** Task 5 ***********************************"
);

/*      
  Напиши функцию getGuestsOlderThan(guests, age), где 
  guests - массив объектов гостей, age - предел возраста для сортировки. 
  
  Функция возвращает массив объектов значение свойства age которых больше чем параметр age.
  
  PS: обязательно используй перебирающие методы массивов, никаких for!
*/

const getGuestsOlderThan = (arr, age) => {
  return arr.filter(item => item.age > age);
};

const guestsThree = [
  { name: "Mango", age: 20, isActive: true },
  { name: "Poly", age: 18, isActive: false },
  { name: "Ajax", age: 30, isActive: true },
  { name: "Chelsey", age: 45, isActive: false }
];

// Вызовы функции для проверки
console.log(getGuestsOlderThan(guestsThree, 25)); // массив из 2-х объектов Ajax и Chelsey

console.log(getGuestsOlderThan(guestsThree, 35)); // [{name: 'Chelsey', age: 45, isActive: false}]

console.log(getGuestsOlderThan(guestsThree, 55)); // []

// *********************************** Task 6 ***********************************
console.log(
  "*********************************** Task 6 ***********************************"
);

/*
  Напишите функию findGuestById(guests, id), принимающую 
  guests - массив объектов гостей, id - идентификатор (число). 
  
  Функция должна возвращать объект гостя с совпадающим id.
  
  PS: обязательно используй перебирающие методы массивов, никаких for!
*/

const findGuestById = (guests, id) => {
  return guests.find(element => element.id === id);
};

const guestsFour = [
  { id: 1, name: "Mango", age: 20 },
  { id: 2, name: "Poly", age: 18 },
  { id: 3, name: "Ajax", age: 30 },
  { id: 4, name: "Chelsey", age: 45 }
];

// Вызовы функции для проверки
console.log(findGuestById(guestsFour, 3)); // {id: 3, name: 'Ajax', age: 30}

console.log(findGuestById(guestsFour, 1)); // {id: 1, name: 'Mango', age: 20}

console.log(findGuestById(guestsFour, 5)); // undefined

// *********************************** Task 7 ***********************************
console.log(
  "*********************************** Task 7 ***********************************"
);

/*
 * Напиши функцию getTotal(order), которая получает обьект заказа с продуктами и их ценой.
 * Функция возвращает число - общую стоимость заказа.
 *
 * Используй метод reduce.
 */

const getTotal = order => {
  return Object.values(order).reduce((acc, item) => acc + item, 0);
};

console.log(getTotal({ apples: 25, chicken: 60, milk: 15 })); // 100

console.log(getTotal({ bread: 10, apples: 25, milk: 15, cheese: 40 })); // 90

console.log(getTotal({ bread: 10, chicken: 60, cheese: 40 })); // 110

// *********************************** Task 8 ***********************************
console.log(
  "*********************************** Task 8 ***********************************"
);

/*
  Напиши функцию getTotal(products, order), где 
  products - объект со свойствами "имя продукта":"цена за единицу"
  order - объект со свойствами "имя продукта":"количество единиц".
  
  Функция возвращает общую сумму стоимости всех продуктов заказа.
  
  Используй метод reduce.
*/

const getTotalCount = (products, order) => {
  return Object.keys(order).reduce((acc, item) => {
    return acc + order[item] * products[item];
  }, 0);
};

const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  cheese: 30,
  chicken: 40
};

const orderA = {
  bread: 2,
  apples: 4,
  chicken: 1
};

const orderB = {
  bread: 1,
  milk: 2,
  cheese: 2,
  apples: 1
};

const orderC = {
  bread: 2,
  cheese: 2
};

// Вызовы функции для проверки
console.log(getTotalCount(products, orderA)); // 140
console.log(getTotalCount(products, orderB)); // 120
console.log(getTotalCount(products, orderC)); // 80

// *********************************** Task 9 ***********************************
console.log(
  "*********************************** Task 9 ***********************************"
);

/*
 * Напиши функию isGuestsActive(guests), принимающую массив объектов гостей.
 * Функция возвращает true если значение поля active всех объектов true, в противном случае false.
 *
 * Используй метод every или some, никаких for!
 */

const isGuestsActive = guestsArr => {
  return guestsArr.every(element => element.active);
};

// Вызовы функции для проверки
console.log(
  isGuestsActive([
    { name: "Mango", active: true },
    { name: "Poly", active: false },
    { name: "Ajax", active: true }
  ])
); // false

console.log(
  isGuestsActive([
    { name: "Mango", active: true },
    { name: "Poly", active: true },
    { name: "Ajax", active: true }
  ])
); // true

console.log(
  isGuestsActive([
    { name: "Mango", active: true },
    { name: "Poly", active: true },
    { name: "Ajax", active: false }
  ])
); // false

"use strict";
console.log("********************   Task 1   ********************");

const Account = function(login, email) {
  this.login = login;
  this.email = email;
};

Account.prototype.getInfo = function() {
  console.log(`Login: ${this.login} and Email: ${this.email}`);
};

const account = new Account("Mangozedog", "mango@dog.woof");

console.log(Account.prototype.getInfo); // function
account.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

console.log("********************   Task 2   ********************");

/*
  Напиши ES6 класс StringBuilder.
  
  На вход (в конструкторе) он получает один параметр string - строку,
  которую записывает в свойство _value.
  
  Добавь классу следующие методы:
  
    - геттер value - возвращает текущее значение поля _value
  
    - append(str) - получает парметр str (строку) и добавляет ее в конец _value
    
    - prepend(str) - получает парметр str (строку) и добавляет ее в начало value
  
    - pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
*/

class StringBuilder {
  constructor(string) {
    this._value = string;
  }

  get value() {
    return this._value;
  }

  append(str) {
    this._value += str;
  }

  prepend(str) {
    this._value = str + this._value;
  }

  pad(str) {
    this.append(str);
    this.prepend(str);
  }
}

const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='

console.log("********************   Task 3   ********************");

/*
 * Напиши класс Car с указанными свойствами и методами
 */

class Car {
  constructor({
    maxSpeed = 0,
    speed = 0,
    running = false,
    distance = 0,
    price = 0
  }) {
    this.speed = speed;
    this.maxSpeed = maxSpeed;
    this.running = running;
    this.distance = distance;
    this.price = price;
    /*
        Добавь свойства:
          - speed - для отслеживания текущей скорости, изначально 0.
          - maxSpeed - для хранения максимальной скорости 
          - running - для отслеживания заведен ли автомобиль, возможные значения true или false. Изначально false.
          - distance - содержит общий киллометраж, изначально с 0
      */
  }

  turnOn() {
    this.running = true;
    // Добавь код для того чтобы завести автомобиль
    // Просто записывает в свойство running значание true
  }

  turnOff() {
    this.running = false;
    // Добавь код для того чтобы заглушить автомобиль
    // Просто записывает в свойство running значание false
  }

  accelerate(spd) {
    if (spd < this.maxSpeed) this.speed = spd;
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed
  }

  decelerate(spd) {
    if (spd < this.maxSpeed && spd) this.speed = spd;
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed и не меньше нуля
  }

  drive(hours) {
    if (this.running) this.distance += hours * this.speed;
    // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
    // но только в том случае если машина заведена!
  }

  get value() {
    return this.price;
  }

  set value(price) {
    this.price = price;
  }

  static getSpecs(carObj) {
    console.log(
      `Max speed: ${carObj.maxSpeed}, Speed: ${carObj.speed}, Running: ${
        carObj.running
      }, Distance: ${carObj.distance}`
    );
  }
}

const car = new Car({ maxSpeed: 50, price: 2000 });

console.log(car);

console.log("********************   Task 4   ********************");

car.turnOn();
car.accelerate(50);
car.drive(2);

Car.getSpecs(car); // maxSpeed: 100, speed: 50, running: true, distance: 100

console.log("********************   Task 5   ********************");

console.log(car.value); // 2000

car.value = 4000;
console.log(car.value); // 4000

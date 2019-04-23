"use strict";

// Users array

const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27
  },
  {
    guid: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39
  }
];

// *********************************** Task 1 ***********************************
console.log(
  "*********************************** Task 1 ***********************************"
);

const getAllNames = users => {
  return users.map(element => element.name);
};

console.log(`All users names: ${getAllNames(users)}`);

// *********************************** Task 2 ***********************************
console.log(
  "*********************************** Task 2 ***********************************"
);

const getUsersByEyeColor = (users, color) => {
  return users.filter(element => element.eyeColor === color);
};

const color = "blue";
console.log(
  `Users with eye color ${color}: `,
  getUsersByEyeColor(users, color)
);

// *********************************** Task 3 ***********************************
console.log(
  "*********************************** Task 3 ***********************************"
);

const getUsersNamesByGender = (users, gender) => {
  return users.filter(item => item.gender === gender).map(item => item.name);
};

console.log(`Mans: ${getUsersNamesByGender(users, "male")}`);

// *********************************** Task 4 ***********************************
console.log(
  "*********************************** Task 4 ***********************************"
);

const getInactiveUsers = users => {
  return users.filter(item => !item.isActive);
};

console.log(`Non active users: `, getInactiveUsers(users));

// *********************************** Task 5 ***********************************
console.log(
  "*********************************** Task 5 ***********************************"
);

const getUserByEmail = (users, email) => {
  return users.find(item => item.email === email);
};

console.log(
  "User found by email: ",
  getUserByEmail(users, "shereeanthony@kog.com")
); // {объект пользователя Sheree Anthony}
console.log(
  "User found by email: ",
  getUserByEmail(users, "elmahead@omatom.com")
); // {объект пользователя Elma Head}

// *********************************** Task 6 ***********************************
console.log(
  "*********************************** Task 6 ***********************************"
);

const getUsersWithAge = (users, min, max) => {
  return users.filter(item => item.age > min && item.age < max);
};

console.log(
  "People in range 20 - 30 years ol: ",
  getUsersWithAge(users, 20, 30)
); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(
  "People in range 30 - 40 years ol: ",
  getUsersWithAge(users, 30, 40)
);
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// *********************************** Task 7 ***********************************
console.log(
  "*********************************** Task 7 ***********************************"
);

const getTotalBalance = users => {
  return users.reduce((accumulator, item) => accumulator + item.balance, 0);
};

console.log("Total users balance: ", getTotalBalance(users)); // 20916

// *********************************** Task 8 ***********************************
console.log(
  "*********************************** Task 8 ***********************************"
);

const getUsersByFriend = (users, name) => {
  return users
    .filter(item => item.friends.includes(name))
    .map(item => item.name);
};

console.log(
  "People that have Briana Decker in friends: ",
  getUsersByFriend(users, "Briana Decker")
); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(
  "People that have Goldie Gentry in friends: ",
  getUsersByFriend(users, "Goldie Gentry")
); // [ 'Elma Head', 'Sheree Anthony' ]

// *********************************** Bonus 1 ***********************************
console.log(
  "*********************************** Bonus 1 ***********************************"
);

const getUniqueSkills = users => {
  return users
    .reduce((allSkills, item) => {
      return [...allSkills, ...item.skills];
    }, [])
    .reduce((uniqueSkills, item) => {
      if (!uniqueSkills.includes(item)) uniqueSkills.push(item);
      return uniqueSkills;
    }, [])
    .sort();
};

console.log("Unique skills of all users: ", getUniqueSkills(users));

// *********************************** Bonus 2 ***********************************
console.log(
  "*********************************** Bonus 2 ***********************************"
);

const getNamesSortedByFriendsCount = users => {
  return users
    .sort(
      (current, toCompare) => current.friends.length - toCompare.friends.length
    )
    .map(item => item.name);
};

console.log("Sorted by friends count: ", getNamesSortedByFriendsCount(users));

// ******************************    Task 1 ************************************
/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/

const getLiAndCountChild = function() {
  const elem = document.querySelector(".categories");
  [...elem.children].map(item => {
    const category = item.innerHTML.split("\n")[1].trim();
    [...item.children].map(child => {
      console.log(
        `Категория: ${category}\r\nКоличество вложенных li: ${
          [...child.children].length
        }`
      );
    });
  });
};

// getLiAndCountChild();

// ******************************    Task 2 ************************************

/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/

const changeColor = function() {
  const elem = document.querySelector(".list");
  elem.firstElementChild.style.color = "red";
  elem.lastElementChild.style.color = "blue";
};

// changeColor();

// ******************************    Task 3 ************************************

/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

const elements = ["HTML", "CSS", "JavaScript", "React", "Node"];

const createListItems = function(array) {
  const list = document.querySelector(".list");
  elements.map(item => {
    const newItem = document.createElement("li");
    newItem.textContent = item;
    list.append(newItem);
  });
  console.log(list);
};

// createListItems();

// ******************************    Task 4    ************************************

/*
  Напишите скрипт для создания галлереи изображений. 
  
  - На вкладке HTML уже есть ul.gallery.
  - Используйте массив объектов для создания тегов img вложенных в li
  - Оформление по вкусу, можно и не делать, достаточно чтобы каждое 
    изображение было 300px по ширине
  - Добавьте все элементы галлереи в ul.gallery
*/

const galleryItems = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat"
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish"
  },
  {
    url:
      "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Two Brown Hen and One Red Rooster"
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running"
  },
  {
    url:
      "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Macaw Birds"
  },
  {
    url:
      "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "2 Lion on Grass Field during Daytime"
  }
];

const galleryElem = document.querySelector(".gallery");

const addToGallery = function(gallery, galleryItem) {
  const newLiElem = document.createElement("li");
  const newImgElem = document.createElement("img");
  newImgElem.setAttribute("src", galleryItem.url);
  newImgElem.setAttribute("alt", galleryItem.alt);
  newImgElem.setAttribute("width", "300px");
  newLiElem.appendChild(newImgElem);
  gallery.appendChild(newLiElem);
};

// galleryItems.map(item => addToGallery(galleryElem, item));

// console.log(galleryElem);

// ******************************    Task 5    ************************************

/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/

const checkBoxes = document.querySelector(".size-filter");

const collectInputData = function(inputs) {
  return inputs.map(item => item.getAttribute("value"));
};

const checkedInputs = [...checkBoxes.children].reduce((checkedItems, item) => {
  const inputElem = item.querySelector("input[type=checkbox]");
  if (inputElem.checked) checkedItems.push(inputElem);
  return checkedItems;
}, []);

const result = collectInputData(checkedInputs);

// ******************************    Task 6    ************************************

/*
  Создайте функцию createMovieCard(), которая 
  создает и возвращает DOM-узел карточки кинофильма.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/

const movieData = {
  src: "http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg",
  alt: "movie image",
  title: "The Godfather",
  desc:
    "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
  date: "Released: 1972-03-14",
  rate: "Rating: 8.6"
};

const createMovieCard = function({ src, alt, title, desc, date, rate }) {
  // create image element
  const newImg = document.createElement("img");
  newImg.classList.add("movie__image");
  newImg.setAttribute("src", src);
  newImg.setAttribute("alt", alt);
  //create movie body
  const movieBodyElem = document.createElement("div");
  movieBodyElem.classList.add("movie__body");
  //   -------
  const bodyTitleElem = createDescElem("h2", "movie__title", title);
  const descriptionElem = createDescElem("p", "movie__description", desc);
  const movieDateElem = createDescElem("p", "movie__date", date);
  const movieRatelem = createDescElem("p", "movie__rating", date);
  //   -------
  movieBodyElem.append(
    bodyTitleElem,
    descriptionElem,
    movieDateElem,
    movieRatelem
  );
  //   add created elems to div.movie
  const movieElem = document.querySelector(".movie");
  movieElem.append(newImg, movieBodyElem);
  return movieElem;
};

const createDescElem = function(elemName, className, text) {
  const elem = document.createElement(elemName);
  elem.classList.add(className);
  elem.textContent = text;
  return elem;
};

// console.log(createMovieCard(movieData));

// ******************************    Task 7    ************************************

/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/
const rootElem = document.querySelector("#root");

const createBoxes = function(num) {
  let width = 30;
  let height = 30;
  const container = document.createElement("div");
  container.classList.add("box-container");
  for (let counter = 1; counter <= num; counter++) {
    const newDiv = document.createElement("div");
    newDiv.style.backgroundColor = getRandomRgb();
    newDiv.style.width = width + "px";
    newDiv.style.height = height + "px";
    width += 10;
    height += 10;
    container.appendChild(newDiv);
  }
  //   put in div #root
  rootElem.appendChild(container);
};

function getRandomRgb() {
  var number = Math.round(0xffffff * Math.random());
  var r = number >> 16;
  var g = (number >> 8) & 255;
  var b = number & 255;
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

// createBoxes(4);
// console.log(rootElem);

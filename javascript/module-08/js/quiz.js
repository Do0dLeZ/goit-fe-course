"use strict";
import quizData from "./quiz-data.js";

const quizElement = document.querySelector(".quiz");
const form = document.querySelector(".quiz-form");
form.addEventListener("submit", handlerSubmit);

const constructQuiz = function(data) {
  quizElement.append(
    initSectionAndTitle(data.title),
    initQuestions(data.questions)
  );
  return quizElement;
};

const initSectionAndTitle = function(title) {
  //create container title
  const sectionTitle = document.createElement("h2");
  sectionTitle.textContent = title;
  sectionTitle.classList.add("section-title");
  return sectionTitle;
};

const initQuestions = function(questions) {
  const questionsListElement = document.createElement("ul");
  questionsListElement.classList.add("questions-list");
  let questionCount = 0;
  questions.forEach(item => {
    const questionListItemElement = document.createElement("li");
    questionListItemElement.classList.add("question-list-item");
    //
    const questionTitleElement = document.createElement("h3");
    questionTitleElement.classList.add("question-title");
    questionTitleElement.textContent = item.question;
    questionListItemElement.appendChild(questionTitleElement);
    //
    questionListItemElement.appendChild(
      initAnswers(++questionCount, item.choices)
    );
    questionsListElement.appendChild(questionListItemElement);
  });
  return questionsListElement;
};

const initAnswers = function(questionCount, choices) {
  // init answer list item
  const answerListElement = document.createElement("ol");
  answerListElement.classList.add("answer-list");
  let valueCount = 0;

  //
  const defaultAnswer = initRadiBtn(questionCount, -1);
  defaultAnswer.checked = true;
  defaultAnswer.style.display = "none";
  answerListElement.appendChild(defaultAnswer);

  choices.forEach(element => {
    const answerElement = document.createElement("li");
    answerElement.classList.add("answer-list-item");
    //
    const labelElement = document.createElement("label");
    labelElement.classList.add("question-item-label");
    //
    labelElement.appendChild(initRadiBtn(questionCount, valueCount++));
    //
    labelElement.insertAdjacentText("beforeend", element);
    //
    answerElement.appendChild(labelElement);
    //
    answerListElement.appendChild(answerElement);
  });

  return answerListElement;
};

const initRadiBtn = (questionCount, valueCount) => {
  const inputElement = document.createElement("input");
  inputElement.classList.add("question-item-input");

  inputElement.setAttribute("type", "radio");
  inputElement.setAttribute("name", "" + questionCount);
  inputElement.setAttribute("value", valueCount);

  return inputElement;
};

constructQuiz(quizData);

function handlerSubmit(event) {
  event.preventDefault();
  const dataForm = new FormData(event.currentTarget);
  const data = {};

  dataForm.forEach((value, name) => {
    data[name] = value;
  });

  const rightAnswers = checkAnswers(data);

  const result = `U got ${rightAnswers} right answer(s) out of ${
    quizData.questions.length
  }.`;

  const outputResultElement = document.createElement("p");
  outputResultElement.classList.add("result");
  outputResultElement.classList.add(
    rightAnswers >= quizData.questions.length - 2 ? "accepted" : "not-accepted"
  );
  outputResultElement.innerHTML = result;
  document.querySelector(".result-container").appendChild(outputResultElement);
}

const checkAnswers = answers => {
  let rightAnswersCount = 0;
  quizData.questions.forEach((item, index) => {
    // console.log(answers[index + 1], item.answer);
    if (Number(answers[index + 1]) === item.answer) rightAnswersCount++;
  });
  return rightAnswersCount;
};

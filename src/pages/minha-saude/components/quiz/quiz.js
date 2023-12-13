import calcSf36 from "../../utils/calcSf36.js";
import checkInputs from "../../utils/checkInputs.js";
import quizData from "../../mock/questions.json" assert { type: 'json' };
import questionnaireIcon from "../icons/questionnaire.js";

// to-do:
//// listar as perguntas 👌
//// pular para a próxima pergunta 👌
//// calcular o score 👌
//// mostrar o resultado 👌
//// reload ao finalizar 👌
//// ajustar index das perguntas 👌
//// ajustar o layout 👌
//// remover codigo nao usado / repetido

class Quiz extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <button id="quizBtn" class="openQuizBtn">Questionário ${questionnaireIcon}</button>
    <div id="modal" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <div class="quiz-title">
          <h1> Questionário de Qualidade de Vida</h1>
        </div>

        <div class="form">
          <form action="" id="formQuiz" class="form-quiz">
          </form>
          <div style="
          margin-top: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;">
            <a href="#" class="form-quiz-prev">Anterior</a>
            <span id="counter"> ${currentIndex}/${questionsLength} </span>
            <a href="#" class="form-quiz-next" type="submit">Próxima</a>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}

let currentIndex  = 1;
const questionsLength = 11;

customElements.define("quiz-component", Quiz);

const modal = document.getElementById("modal");
const btn = document.getElementById("quizBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

let questionListSize = 1;

const listQuestions = async () => {
  const form = document.getElementById("formQuiz");
  const prev = document.querySelector(".form-quiz-prev");
  const next = document.querySelector(".form-quiz-next");
  const counter = document.getElementById("counter");
  var container = document.createElement("div");
  container.className = "form-quiz-group";

  const questionsLength = quizData.length;
  let currentQuestion = 0;
  const choices = {};

  let answer;
  let multipleAnswers = {};

  const showQuestion = () => {
    const question = quizData[currentQuestion];
    let choice;
    const questionTitleElement = document.createElement("h3");
    const questionListElement = document.createElement("ul");

    questionListElement.className = "form-quiz-list-item";

    questionTitleElement.innerHTML = question.text;
    questionTitleElement.className = "form-quiz-group-question";

    var container = document.createElement("div");
    container.className = "form-quiz-group";

    const choiceBox = document.createElement("div");
    choiceBox.className = "form-quiz-group-choices-q" + currentQuestion;

    container.appendChild(questionTitleElement);
    container.appendChild(questionListElement);
    container.appendChild(choiceBox);

    form.appendChild(container);
    const questionList = question?.questions;

    if (questionList) {
      questionListSize = questionList.length;
      questionList.forEach((q, questionIndex) => {
        const questionItemElement = document.createElement("li");
        questionItemElement.className = "question-list-item"
        const title = document.createElement('p');
        title.textContent = q;
        title.className = "question-list-title"
        questionItemElement.appendChild(title);
        questionListElement.appendChild(questionItemElement);

        question.options.forEach((option, optionIndex) => {
          const questionOptionElement = document.createElement("input");
          questionOptionElement.className = 'form-quiz-group-option'
          questionOptionElement.setAttribute("type", "radio");
          questionOptionElement.setAttribute(
            "name",
            `question-${questionIndex}`
          );
          questionOptionElement.setAttribute("value", option);
          questionOptionElement.setAttribute("id", `${optionIndex}`);
          const questionLabelElement = document.createElement("label");
          questionLabelElement.setAttribute(
            "for",
            `option-${questionIndex}-${optionIndex}`
          );
          questionLabelElement.innerHTML = option + "<br>";

          questionItemElement.appendChild(questionOptionElement);
          questionItemElement.appendChild(questionLabelElement);
          questionOptionElement.addEventListener("click", (e) => {
            multipleAnswers[questionIndex] = e.target.id;
          });
        });
      });
    } else {
      questionListSize = 1;
      question.options.forEach((option, index) => {
        const label = document.createElement("label");
        label.className = "question-list-item";
        choice = document.createElement("input");
        choice.setAttribute("value", option);
        choice.className = "form-quiz-group-option";
        choice.setAttribute("type", "radio");
        choice.setAttribute("name", "choice");
        choice.setAttribute("id", index);
        label.innerHTML = option + "<br>";
        choiceBox.appendChild(choice);
        choiceBox.appendChild(label);
        choice.addEventListener("click", (e) => {
          answer = e.target.id
        })
      });
    }

    $(".form-quiz-group:first-child").addClass("active-group");
  };

  const showNextQuestion = () => {
    const isChecked = checkInputs(questionListSize);
    if (isChecked) {
      form.innerHTML = "";
      if (currentQuestion < questionsLength - 1) {
        currentQuestion++;
        currentIndex++;
        counter.innerHTML = `${currentIndex}/${questionsLength}`;
        storeAnswer();
        showQuestion();
      }
      else {
        currentQuestion++
        storeAnswer()
        const result = calcSf36(choices);
        localStorage.setItem("sf36", JSON.stringify(result));
        location.reload()
      }
      if (currentQuestion === questionsLength - 1) {
        storeAnswer()
        next.innerHTML = "Finalizar"
      } 
    }
  };

  const showPrevQuestion = () => {
    if(currentIndex > 1){
      currentQuestion--;
      currentIndex--;
    }
    counter.innerHTML = `${currentIndex}/${questionsLength}`;
    form.innerHTML = "";
    showQuestion();
    if(next.innerHTML === "Finalizar"){
      next.innerHTML = "Próxima"
    }
  };

  next.addEventListener("click", showNextQuestion);
  prev.addEventListener("click", showPrevQuestion);

  const storeAnswer = () => {
    if (Object.keys(multipleAnswers).length > 0) {
      choices[currentQuestion] = multipleAnswers;
      multipleAnswers = {};
    } else {
      choices[currentQuestion] = answer;
    }
  };

  showQuestion();
};

listQuestions();
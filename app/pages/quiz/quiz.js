import "./style.css";
import { cleanPage } from "../../utils/cleanPage";
import { printHome } from "../home/app";

let quiz;

export const getQuiz = async () => {
  try {
    const data = await fetch(`http://localhost:8080/Quiz`);
    const dataJSON = await data.json();
    quiz = dataJSON;
    console.log(quiz);
  } catch (error) {
    console.log("Error:", error);
  }
  printQuiz();
  cardQuiz(quiz);
  chooseAnswer(quiz);
  return quiz
};

const printQuiz = () => {
  const app = document.querySelector("#app");
  cleanPage(app);

  const divQuiz = document.createElement("div");
  divQuiz.classList.add("divQuiz");
  app.appendChild(divQuiz);

  // const h2Quiz = document.createElement("h2");
  // h2Quiz.classList.add("h2Quiz");
  // h2Quiz.innerText = "PokeApi";

  const user = document.createElement("p");
  user.classList.add("user2");
  user.innerText = `Hola ${localStorage.user}`;

  const backHome = document.createElement("button");
  backHome.classList.add("backHome2");
  backHome.addEventListener("click", () => printHome());

  const sectionQuiz = document.createElement("div");
  sectionQuiz.classList.add("sectionQuiz");

  divQuiz.appendChild(user);
  divQuiz.appendChild(backHome);
  divQuiz.appendChild(sectionQuiz);
};

const cardQuiz = (list) => {
  // const mapQuiz = list.map((item) => {
  for (let item of list) {
    const sectionQuiz = document.querySelector(".sectionQuiz");
    cleanPage(sectionQuiz);
    const template =  `
    <div class="question">
      <h2 class="h2Quiz">${item.pregunta}</h2>
      <img class="imgQuiz" src=${item.img} alt="imagen"/>
    </div>
    <div class="answers">
      <input type="radio" name="1" class="answer" id ="a">${item.incorrecta1}</input>
      <input type="radio" name="1" class="answer" id ="b">${item.respuesta}</input>
      <input type="radio" name="1" class="answer" id ="c">${item.incorrecta2}</input>
      <input type="radio" name="1" class="answer" id ="d">${item.incorrecta3}</input>
      <button class="check">"Comprobar"</button>
      </div>
  `;
  sectionQuiz.innerHTML += template;
  }
};





const chooseAnswer = (list) => {
  
  const check = document.querySelector(".check");
    const optionA = document.querySelector("#a");
    const optionB = document.querySelector("#b");
    const optionC = document.querySelector("#c");
    const optionD = document.querySelector("#d");
   
    check.addEventListener("click", () => {
    let answer = "";
    if (optionA.checked) {
      answer = "a";
    } else if (optionB.checked) {
      answer = "b";
    } else if (optionC.checked) {
      answer = "c";
    } else if (optionD.checked) {
      answer = "d";
    }

    let score = 0;
    const {respuesta} = quiz
    
    if (answer === respuesta) {
      score++;
      alert("Eso es!!😀🎉") ;
      cardQuiz(quiz);
    } else {
      alert(`Nooo! La respuesta corresta es: ${respuesta}`)
      cardQuiz(quiz);
      console.log(quiz.respuesta)
    }
  })
  
  }
   
// const allAnswer = [quiz.respuesta, quiz.incorrecta1, quiz.incorrecta2, quiz.incorrecta3]
// const random = Math.floor(Math.random()*allAnswer.length);

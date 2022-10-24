import "./style.css"
import { cleanPage } from "../../utils/cleanPage";
import { getIds } from "../pokeapi/components/getID";
import { getQuiz } from "../quiz/quiz";

export const printHome = () => {
         
    const h2Home = document.createElement("h2");
    h2Home.classList.add("h2Home")
    h2Home.textContent = `Bienvenid@ al Hub-Game,  ${localStorage.user}`
    
    const sectionHome = document.createElement("section");
    sectionHome.classList.add("sectionHome");
    
    const btnPoke = document.createElement("button");
    btnPoke.classList.add("btnPoke");
    btnPoke.addEventListener("click", () => getIds())

    const btnQuiz = document.createElement("button");
    btnQuiz.classList.add("btnQuiz");
    btnQuiz.addEventListener("click", () => getQuiz())
    
    const app = document.querySelector("#app");
    cleanPage(app);     
    app.appendChild(h2Home);
    app.appendChild(sectionHome);
    sectionHome.appendChild(btnPoke);
    sectionHome.appendChild(btnQuiz);
    
    
}






    

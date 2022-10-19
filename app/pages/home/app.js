import "./style.css"
import { cleanPage } from "../../utils/cleanPage";


export const printHome = () => {
    const app = document.querySelector("#app");
    cleanPage(app);
    app.innerHTML = "";
    app.innerHTML = `
    <h2 id="h2Home">Bienvenid@ ${localStorage.user}</h2>
    <section id="sectionHome">
        <button id="btnPoke">Poke Api</button>
    </section>
    `
}





    

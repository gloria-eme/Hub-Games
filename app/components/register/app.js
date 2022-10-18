import { cleanPage } from "../../utils/cleanPage";
import "./style.css";



export const RegisterName = () => {
    const registerInput = document.querySelector(".registerInput")
    const registerBtn = document.querySelector(".registerBtn");
    console.log(registerInput)
   console.log(registerBtn) 
    registerBtn.addEventListener("click", () => {
        return setName();
    })

}

export const setName = () => {
    const registerInput = document.querySelector(".registerInput")
    const registerBtn = document.querySelector(".registerBtn");
    const storage = localStorage.setItem("user", registerInput.value);
    printHome();
}

const printHome = () => {
    const app = document.querySelector("#app");
    cleanPage(app);
    app.innerHTML = `
    <h2 id="h2Home">Bienvenid@ ${localStorage.user}</h2>
    <button id="pokeApi"></button>
    `
}

// console.log(RegisterName())
// //registerInput.textContent = localStorage.getItem("user")
// registerInput.textContent = localStorage.user;
// esto es para que salga el nombre del "user" en un parrafo
// habría que meterlo una clean para borrar los nombres
// hay que unirlo al input
// se puede hacer condicionales
 //si el input tiene algo, pasame a la siguiente pantalla, si no
import { cleanPage } from "../../utils/cleanPage";
import "./style.css"

export const createRegister = () => {
    const box1 = document.createElement("div");
    box1.classList.add("box1");

    const h1 = document.createElement("h1");
    h1.innerText = "El Hub-Game de Neoland";

    const h2 = document.createElement("h2");
    h2.innerText = "Introduce tu nombre";

    const registerInput = document.createElement("input");
    registerInput.classList.add("registerInput")
    registerInput.placeholder = "tu nombre";
    
    const Btn1 = document.createElement("button");
    Btn1.classList.add("Btn1");
    Btn1.textContent = "Aceptar";
    
    // registerBtn.addEventListener("click", () =>  registerInput.value)
    
    const app = document.querySelector("#app");
    cleanPage(app);
    app.appendChild(box1);
    box1.appendChild(h1);
    box1.appendChild(h2);
    box1.appendChild(registerInput);
    box1.appendChild(Btn1);
}


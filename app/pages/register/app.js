

export const createRegister = () => {
    const h1 = document.createElement("h1");
    h1.innerText = "El Hub-Game de Neoland";

    const h2 = document.createElement("h2");
    h2.innerText = "Introduce tu nombre";

    const registerInput = document.createElement("input");
    registerInput.classList.add("registerInput")
    registerInput.placeholder = "tu nombre";
    
    const registerBtn = document.createElement("button");
    registerBtn.classList.add("registerBtn");
    registerBtn.textContent = "Aceptar";
    
    // registerBtn.addEventListener("click", () =>  registerInput.value)
    
    const app = document.querySelector("#app");
    app.appendChild(h1);
    app.appendChild(h2);
    app.appendChild(registerInput);
    app.appendChild(registerBtn);
}


import { createRegister } from "../../pages/register/app";
import { printHome } from "../../pages/home/app";


export const loginUser = () => {
    if (localStorage.user) {
        printHome();
    } else {
        createRegister();
    }
}

export const RegisterName = () => {
    const registerInput = document.querySelector(".registerInput")
    const registerBtn = document.querySelector(".registerBtn");
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



// console.log(RegisterName())
// //registerInput.textContent = localStorage.getItem("user")
// registerInput.textContent = localStorage.user;
// esto es para que salga el nombre del "user" en un parrafo
// habría que meterlo una clean para borrar los nombres
// hay que unirlo al input
// se puede hacer condicionales
 //si el input tiene algo, pasame a la siguiente pantalla, si no
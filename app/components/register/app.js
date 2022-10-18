import "./style.css";




export const RegisterName = () => {
    const registerInput = document.querySelector(".registerInput")
    const registerBtn = document.querySelector(".registerBtn");
    console.log(registerInput)
    const setName = () => localStorage.setItem("user", registerInput.value)
    registerBtn.addEventListener("click", () => {
        return setName()
    })

}


// console.log(RegisterName())
// //registerInput.textContent = localStorage.getItem("user")
// registerInput.textContent = localStorage.user;
// esto es para que salga el nombre del "user" en un parrafo
// habría que meterlo una clean para borrar los nombres
// hay que unirlo al input
// se puede hacer condicionales
 //si el input tiene algo, pasame a la siguiente pantalla, si no
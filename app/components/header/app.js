import "./style.css";

const header = document.querySelector("header")



export const createBtn = () => {
    const colorBtn = document.createElement("button");
    colorBtn.classList.add("btnColor");
    colorBtn.innerText = "Cambiar color";
    header.appendChild(colorBtn);
    const btnColor = document.querySelector(".btnColor");
    btnColor.addEventListener("click", () => setBackgroundColor)
    }













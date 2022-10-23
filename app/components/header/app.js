import "./style.css";
import { setBackgroundColor } from "../../utils/changeColor";
const header = document.querySelector("header");



export const btnColor = () => {
    const colorBtn = document.createElement("button");
    colorBtn.classList.add("btnColor");
    // colorBtn.innerText = "Cambiar color";
    header.appendChild(colorBtn);
    const btnColor = document.querySelector(".btnColor");
    btnColor.addEventListener("click", setBackgroundColor);
    };
 













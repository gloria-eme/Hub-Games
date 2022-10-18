import './style.css'
// import { cleanPage } from "./utils/cleanPage";
import { createBtn } from "./components/header/app";
import { RegisterName } from "./components/register/app";
// import { printHome } from "./components/register/app";
import { setBackgroundColor } from "./utils/changeColor";
import { infoFooter } from "./components/footer/app";
import { createRegister } from "./pages/register/app";

const footer = document.querySelector("footer");
footer.innerHTML = infoFooter();


// cleanPage();
createBtn();

createBtn()
setBackgroundColor();


createRegister();


RegisterName()

import './style.css'
import { setBackgroundColor } from './utils/changeColor';
import { btnColor } from "./components/header/app";
import { RegisterName } from "./components/register/app";

import { createRegister } from "./pages/register/app";


// const footer = document.querySelector("footer");
// footer.innerHTML = infoFooter();

setBackgroundColor();
// loginUser();
btnColor();
createRegister();


RegisterName()

 


// const filter = listPoke.filter(item => item.type);



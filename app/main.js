import './style.css'
// import { cleanPage } from "./utils/cleanPage";
import { btnColor } from "./components/header/app";
import { RegisterName } from "./components/register/app";
import { loginUser } from "./components/register/app";
import { infoFooter } from "./components/footer/app";
import { createRegister } from "./pages/register/app";
// import { printPokeApi} from "./pages/pokeapi/app"
import { printHome} from "./pages/home/app"
import { getIds } from "./pages/pokeapi/services/app"

const footer = document.querySelector("footer");
footer.innerHTML = infoFooter();


loginUser();
createRegister();


RegisterName()
btnColor();

printHome();

const BtnPoke = () => {
    const btnPoke = document.querySelector("#btnPoke");
    btnPoke.addEventListener("click", () => getIds())
  
}
BtnPoke();
await getIds();

import './style.css'
import { headerBtn } from "./components/header/app";
import { register } from "./components/register/app"
// import { changeTheme } from "./components/nav/app";
import { infoFooter } from "./components/footer/app";
// import { Home } from "./pages/home/home";
// import { Images } from "./pages/images/images";
// import { linkPage } from "./utils/linkPage";
// import { nav } from "./components/nav/nav";


const header = document.querySelector("header");
header.innerHTML = headerBtn();

const footer = document.querySelector("footer");
footer.innerHTML = infoFooter();



const themeBtn = document.querySelector("#btnColor");

export const changeTheme = () => {
  document.body.classList.toggle("green");
  };
  
themeBtn.addEventListener("click", changeTheme);

register();

const app = document.querySelector("#app");
app.innerHTML = register();

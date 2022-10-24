import { cleanPage } from "../../../utils/cleanPage";
import { printHome } from "../../home/app";

export const printPokeApi = (list) => {
  const divHome = document.createElement("div");
  divHome.classList.add("divHome");

  const h2Poke = document.createElement("h2");
  h2Poke.classList.add("h2Poke");
  h2Poke.innerText = "PokeApi";

  const user = document.createElement("p");
  user.classList.add("user");
  user.innerText = `Hola ${localStorage.user}`;

  const backHome = document.createElement("button");
  backHome.classList.add("backHome");
  backHome.addEventListener("click", () => {
      return printHome();
  })

  const selectType = document.createElement("select");
  selectType.classList.add("selectType");

  const optionText = document.createElement("option");
  optionText.classList.add("optionText");
  optionText.innerHTML = "Selecciona por tipo";
  optionText.value = ".";
  selectType.appendChild(optionText);

  const sectionPoke = document.createElement("section");
  sectionPoke.classList.add("sectionPoke");

  const app = document.querySelector("#app");
  cleanPage(app);
  app.appendChild(divHome);
  divHome.appendChild(h2Poke);
  divHome.appendChild(user);
  divHome.appendChild(backHome)
  divHome.appendChild(selectType);
  app.appendChild(sectionPoke);
};

export const pokeCard = (list) => {
  for (const item of list) {
    const sectionPoke = document.querySelector(".sectionPoke");
    const template = `
            <figure id="box">
                  <div class=${item.type} id="card">
                        <h2 class= "name"> ${item.name}</h2>
                        <img class = "img" src="${item.image}"/>
                  </div>
                  <h3 class = "type">Tipo:  ${item.type} </h3>
                  <p class = "p1">${item.weight} kg</p>
                  <p class = "p2">${item.height} cm</p>
            </figure>
            `;
    sectionPoke.innerHTML += template;
  }
};

// const printPoke = () => {
//   const sectionPoke = document.querySelector(".sectionPoke");

//   for (let i = 0; i < 152; i++) {
//     const item = list[i];
//     const template = `
//             <figure id="card2">
//                   <h2 class= "name"> ${item.name}</h2>
//                   <img class = "img" src="${item.image}"/>
//                   <h3 class = "type">Tipo: ${item.type} </h3>
//                   <p class = "p1">Peso: ${item.weight}kg</p>
//                   <p class = "p2">Altura: ${item.height}cm</p>
//             </figure>
//           `;
//     sectionPoke.innerHTML += template;
//   }
// };

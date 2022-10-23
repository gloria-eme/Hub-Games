import "./style.css";
import { cleanPage } from "../../../utils/cleanPage";
import { printPokeApi } from "./printPoke";
import { filterPoke, selectTypes } from "./filterType";
import { pokeCard } from "./printPoke";

export const getIds = async () => {
  let listPoke = [];
  for (let id = 1; id <= 152; id++) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    listPoke.push(data);
  }
  transformPoke(listPoke);
};

export const transformPoke = (list) => {
  const mapPoke = list.map((item) => ({
    image: item.sprites.other.home.front_default,
    name: item.name,
    type: item.types[0].type.name,
    weight: item.weight,
    height: item.height * 10,
  }));
  
  printPokeApi(mapPoke);
  pokeCard(mapPoke);
  filterPoke(mapPoke);
  selectTypes(mapPoke);
};

// const filterPoke = (list) => {
//   const filter = list.map((item) => item.types[0].type.name);

//   const typeFilter = [];
//   for (let type of filter) {
//     if (typeFilter.includes(type) === false) {
//       typeFilter.push(type);

//     }
//   }

//   typeFilter.forEach((type) => {
//       const select = document.querySelector(".inputType")
//     const types = document.createElement("option");
//     types.classList.add("optionText");
//     types.value = type;
//     types.innerText = type;
//     select.appendChild(types);
//   });
// }

//   filterType();

// const sectionPoken = document.querySelector("#sectionPoke");

// const getRandomInt = (min, max) => {
//       return Math.floor(Math.random() * (max - min)) + min;

//       }
//       document.addEventListener("DOMContentLoaded", () => {
//       const ramdom = getRandomInt(1, 151);
//       getIds (ramdom);
//       });

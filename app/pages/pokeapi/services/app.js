import "./style.css"
import { cleanPage } from "../../../utils/cleanPage";
// import { printPokeApi } from "../app";


export const getIds = async () => {
            let listPoke = [];
            for (let id = 1; id <= 152; id++) {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await res.json();
            listPoke.push(data);           
      };
      transformPoke(listPoke);
      return listPoke;
      

      function transformPoke  (list) {
            const mapPoke = list.map((item) => ({
                  image: item.sprites.other.home.front_default,
                  name: item.name,
                  type: item.types[0].type.name,
                  weight: item.weight,
                  height: item.height,
      }));
      printPoke(mapPoke);
      };
      

      function printPoke  (list)  {
            const app = document.querySelector("#app");
            cleanPage(app);
            for (let id=0; id<152; id++) {
            const item = list[id]
            const template = `
            <figure class="figure">
                  <h2 class= "name"> ${item.name}</h2>
                  <img class = "img" src="${item.image}"/>
                  <h3 class = "type">Tipo: ${item.type} </h3>
                  <p class = "p1">Peso: ${item.weight}kg</p>
                  <p class = "p2">Altura: ${item.height}cm</p>
            </figure>`
            app.innerHTML += template;
            }
      };
};
 

   
// const getRandomInt = (min, max) => {
//       return Math.floor(Math.random() * (max - min)) + min;
      
//       }
//       document.addEventListener("DOMContentLoaded", () => {
//       const ramdom = getRandomInt(1, 151);
//       getIds (ramdom);
//       });
              
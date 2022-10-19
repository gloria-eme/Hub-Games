import { cleanPage } from "../../../utils/cleanPage";




const linkUrl = "https://pokeapi.co/api/v2/pokemon/"

export const getIds = async () => {
      // try {
            let listPoke = [];
            for (let id = 1; id <= 152; id++) {
            const res = await fetch(`${linkUrl}${id}`);
            const data = await res.json();
            listPoke.push(data);
      
                  
      // const { name } = data;
      // transformPoke(type)
      //lo filtro y solo traigo del Json el .type y lo transformo
      //si hay varios arrays, se puede utilizar:
      //const {type} = dataJson;
      };
      transformPoke(listPoke)
        
      console.log(listPoke)
      return listPoke;
      
      //catch (error) {
      //       console.log(error);
      // }
     
      
// console.log(getIds())
// console.log (getIds());

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
            <h2 class= "h2"> ${item.name}</h2>
            <img class = "img" src="${item.image}"/>
           
      </figure>`
      app.innerHTML += template;
      }
};
};
 // <h3 class = "weigth"> ${item.weight}</h3>
            // <p class = "height">${item.height}</p>
import { pokeCard } from "./printPoke";


export const filterPoke = (list) => {
  const filter = list.map((item) => item.type);
    
  const typeFilter = [];
    for (let type of filter) {
      if (typeFilter.includes(type) === false) {
        typeFilter.push(type); 
      }
    };
    
    typeFilter.forEach((type) => {
      const selectType = document.querySelector(".selectType")
      const option = document.createElement("option");
      option.classList.add("option");
      option.value = type;
      option.innerText = type;
      selectType.appendChild(option);
    })      
  };


export const selectTypes =  (list) => {
    const selectType = document.querySelector(".selectType");
    selectType.addEventListener("change", (event) => {
    filterType(list, event.target.value);
    });
  };


const filterType =  (list, word) => {
  const sectionPoke = document.querySelector(".sectionPoke");
  const section = list.filter((item) => item.type === word);
  console.log(section);
  sectionPoke.innerHTML= "";
  pokeCard(section);
};
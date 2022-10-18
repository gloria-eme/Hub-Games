// export const getPoke = async () => {
//       const data = await fetch("url");
//       const dataJson = await data.json();
//       const dataLIst = dataJson.type
//       transformPoke(type)
      //lo filtro y solo traigo del Json el .type y lo transformo
      //si hay varios arrays, se puede utilizar:
      //const {type} = dataJson;
//  };
      //hay que hacer un fetch por cada item (ver si se puede hacer con un for of)
      //un bucle de todos los pokemons y un fetch por cada item
      //hacer de forma dinámica que el numero del pokemos cambie /1 /2 hasta el /51
      //peticiones, eventos, timeouts, asynawait

// const transformPoke = () => {
//   const mappedPoke = list.map((item) => ({
//     image: item.imagephoto21,  //el nombre que venga en la api
//     //con todo lo demás
//   }));
//   printPoke(mappedPoke)
// }

// const printPoke = (list) => {
//   const app = document.querySelector("#app");

//   for (let i=0; i<51; i++) {
//     const item = list[i]
//     const template = `
//     <figure>
//       <h2> ${item.name} ${item.image}</h2>
//       <h3> ${item.type}</h3>
//     </figure>`
//     app.innerHTML += template
//   }

// }
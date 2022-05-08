// 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
// hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
// console.log(). Para ello, es necesario que crees un .html y un .js.

const url = 'https://api.agify.io?name=michael'
const print = async () => {
    const list = fetch (url);
    const listJson = await list.json();
    console.log(listJson);
}

print();



// 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
// fetch() para hacer una consulta a la api cuando se haga click en el botón, 
// pasando como parametro de la api, el valor del input.
// const baseUrl = 'https://api.nationalize.io';

// let button = document.querySelector("button");
// button.addEventListener("click", () => inputData);

// const inputData = async () => {
//     let inputText = document.querySelector("input").value;
//     const result = await fetch(baseUrl +  inputText);
//     const resultJson = await result.json();
    
//     for (let i = 0; i < resultJson.country.length; i++) {
//         const namePercentil = document.createElement("p");
//         namePercentil.textContent = resultJson.country[i].country_id;
//         document.body.appendChild(namePercentil);
//     }
// };
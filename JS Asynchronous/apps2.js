// 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
// fetch() para hacer una consulta a la api cuando se haga click en el botón, 
// pasando como parametro de la api, el valor del input.

const url = 'https://api.nationalize.io';

let btn = document.querySelector('button');
btn.addEventListener ('click', () => concatenaInput());

    const concatenaInput = async () => {
    const list = await fetch (`${url}`);
    const listJson = await list.json();
    //let inputContent = document.querySelector('input').value;
    //listJson = inputContent;
    console.log(listJson)
}
concatenaInput();

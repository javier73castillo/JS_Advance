

// const url = 'https://api.nationalize.io/';

// // con querysellector selecicionar el boton y con el 
// const btn = document.querySelector('button')
// btn.addEventListener('click', ()=> concatenar())

// //document.getElementById('btn').addEventListener('click', ()=> concatenar())

// const concatenar = () =>{
//     const inputContent = document.querySelector('input');
//     console.log(inputContent.value)
// }

const baseUrl = 'https://api.nationalize.io/'

// const concatenar = async() => {
//    let inputContent = document.querySelector('input').value;
//    const result = await fetch (`${baseUrl}`);
//    const resultToJson = await result.json();
//    return resultToJson

// }

let btn = document.querySelector('button');
    btn.addEventListener ('click', () => concatenar());
    const concatenaInput = async () => {
    const list = await fetch(baseUrl);
    const listJson = await list.json();
    let inputContent = document.querySelector('input').value;
    listJson = inputContent;
    console.log(listJson)
}
concatenaInput();

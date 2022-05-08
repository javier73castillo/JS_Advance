const url = 'https://rickandmortyapi.com/api';
let urlNextPage = '';

// 1. Esto se lanza cuando carga la ventana
// Es una función que se lanza cuando se abre el navegador -> ejecuta una función disparadora
window.onload = () => {
    init();
}

window.addEventListener('scroll', () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight > scrollHeight - 500) {
        nextPage();
    }
})

// 2. Función inicilizadora -> Inicial -> Disparadora
// llama dos funciones -> 1 recuperar personajes | 2 mappear info -> necesita los personajes
// Async | await  -> espera para guardar la info de los personajes -> en la variable
// mappedCharacters por params -> la lista de personajes
const init = async () => {
    const characters = await getCharacters();
    mappedCharacters(characters);
}

// 3. Función recuperar datos
// Async | await -> fetch -> url [que devuelve los datos]
// await  -> tranformar datos recibidos a formato JSON
// Cuando ya tenermos los datos lo devuelve -> Return
const getCharacters = async () => {
    const result = await fetch(`${url}/character`);
    const resultToJson = await result.json();
    return resultToJson
}

// 4. Función para recoger lo que queremos
// Ejecutar una función de pintado por cada elemento iterado
// Función jecutada es printCharacter-> {name + img}
const mappedCharacters = (characters) => {
    characters.results.map((character) => {
        return printCharacter({ name: character.name, img: character.image })
    })
    urlNextPage = characters.info.next;
}

// 5. Funcñion de pintado
// Recibe por param -> {un nombre y una img}
// Recupearar el ul sobre el que queremos añadir datos - querySelector
// con innerHTML -< añadimos los li por cada personaje -> porque va a ser llamada por cada iteración del mapped
const printCharacter = (character) => {
    let characterContainer = document.querySelector('#characters');
    let elementTrim = character.name.replace(' ', '');
    characterContainer.innerHTML += `<li id="${elementTrim}">
    <p>${character.name}</p>
    <img src=${character.img} alt=${character.name}/>
</li>`
}

const nextPage = async () => {
    if (urlNextPage !== null) {
        let characterContainer = document.querySelector('#characters');
        // characterContainer.innerHTML = '';
        const result = await fetch(urlNextPage);
        const resultToJson = await result.json();
        mappedCharacters(resultToJson);
    } else {
        console.log('No hay scroll')
    }
}

const filterCharacter = () => {
    let filter = document.querySelector('#filter').value.replace(' ', '');
    let listCharacters = document.querySelector(`#${filter}`);
    let filtered = document.querySelector('#filtered');
    filtered.appendChild(listCharacters);
}
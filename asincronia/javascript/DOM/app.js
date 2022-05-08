window.onload = () => {
    addContent();
    addListItem(listItems);
    changeText(document.getElementById('div1'));
};

const changeText = (container) => {
    if (container.textContent.includes('texto')) {
        container.innerHTML = container.textContent.replace('texto', 'hola');
    }
}

let currentDiv = document.getElementById("div1");

// Contenido de mi base de datos
let listItems = [
    {
        id: 1,
        name: 'Juan'
    },
    {
        id: 2,
        name: 'Pepe'
    },
    {
        id: 3,
        name: 'Pepa'
    },
    {
        id: 4,
        name: 'Juana'
    },
    {
        id: 5,
        name: 'Alvaro'
    }
]

const addContent = () => {
    // crea un nuevo div y añade contenido
    let newDiv = document.createElement("div");
    let newContent = document.createTextNode("Hola! ¿Qué tal?");
    // añade texto al div creado.
    newDiv.appendChild(newContent);
    // añade el elemento creado y su contenido al DOM
    document.body.insertBefore(newDiv, currentDiv);
}

const addListItem = (list) => {
    let newUl = document.createElement('ul');
    list.forEach((item) => {
        if (item.name !== 'Pepe') {
            let newLi = document.createElement('li');
            let newContent = document.createTextNode(item.name);
            newLi.appendChild(newContent);
            newUl.appendChild(newLi);
        }
    });
    document.body.insertBefore(newUl, currentDiv)
}



console.log(document.getRootNode());
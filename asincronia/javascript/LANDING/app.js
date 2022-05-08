// Lo he pedido a mi backend
const info = {
    title: 'Facebook',
    subtitle: 'Bienvenidos al mundo del desarrollo web'
}
// Lo he pedido a mi backend
const user = [
    {
        name: 'Alvaro',
        img: 'url'
    },
    {
        name: 'Santiago',
        img: 'url'
    },
    {
        name: 'Santiago',
        img: 'url'
    },
    {
        name: 'Santiago',
        img: 'url'
    }
]

// Cuando cargue la ventana
window.onload = () => {
    insertDocument(createTitle(info));
    insertChild(createUsers(user));
};

const createTitle = (info) => {
    return `<div class="title-container">
        <h1> ${info.title} </h1>
        <h2> ${info.subtitle} </h2>
    </div>`
}

const createUsers = (user) => {
    let newUl = document.createElement('ul');
    user.forEach((element) => newUl.appendChild(createUserToInsert(element.name)))
    return newUl
}

const createUserToInsert = (name) => {
    let newLi = document.createElement('li');
    newLi.innerHTML = name;
    return newLi;
}



const insertDocument = (pepe) => {
    document.body.innerHTML += pepe;
}


const insertChild = (nodo) => {
    document.body.appendChild(nodo);
}
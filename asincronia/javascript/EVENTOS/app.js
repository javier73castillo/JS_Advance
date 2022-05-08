const sayHello = () => {
    let newDiv = document.createElement("div");
    let newContent = document.createTextNode("Hola! ¿Qué tal?");
    newDiv.appendChild(newContent);
    document.body.appendChild(newDiv);
}

const handleClick = () => {
    let newDiv = document.createElement("div");
    let newContent = document.createTextNode("Hola! ¿Qué tal desde JS?");
    newDiv.appendChild(newContent);
    document.body.appendChild(newDiv);
}

const handleMouseOver = () => {
    let newDiv = document.createElement("div");
    let newContent = document.createTextNode("AQUI TIENE SUS ENTRDAS");
    newDiv.appendChild(newContent);
    document.body.appendChild(newDiv);
}

document.getElementById("btn").addEventListener("click", handleClick);

document.querySelector('.img').addEventListener("mouseover", handleMouseOver)
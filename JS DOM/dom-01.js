// 1.1 Usa querySelector para mostrar por consola el botón con 
//la clase .showme

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

// 1.3 Usa querySelector para mostrar por consola todos los p

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
// data-function="testMe".

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe".

//1.1
console.log(document.querySelector('.showme'));
//1.2
console.log(document.querySelector('#pillado'));
// 1.3 Usa querySelector para mostrar por consola todos los p

const paragraph = document.querySelectorAll("p");

paragraph.forEach((paragraph) => {
  console.log(paragraph.textContent);
});

console.log("Cantidad de P " + paragraph.length);

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
// data-function="testMe".

console.log('Mostrar el 3er span ' + testMe[3].textContent);

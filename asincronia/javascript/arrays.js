// Antigua - para Alberto es caca
let music = new Array();
music[0] = 'Pop';
music[1] = 'Metal';
music[2] = 'Rock';

console.log(music);


// Listado de elememtos - no tienen porque coincidir con el tipo - No ordenado
let listElements = [1, 'hola', { name: 'pepe' }, true];

console.log(listElements);
// emepzamos a contar desde 0
console.log('0', listElements[0]);
console.log('1', listElements[1]);
console.log('2', listElements[2]);
console.log('3', listElements[3]);

// Métodos de arrays - QUE MODIFICAN EL ARRAY

let listItems = [1, 2, 'tres', true, 5, 'seis', { name: 'siete', number: 7, other: true }, 8];

console.log('ORIGINAL', listItems)

// Elimina el último
listItems.pop();
console.log('POP', listItems)
// Añade tantos elementos como pases al final
listItems.push('ocho', 9, { name: 'diez', number: 10 });
console.log('PUSH', listItems);
// Les da la vuelta
listItems.reverse()
console.log('REVERSE', listItems);
// Elimina el primero
listItems.shift();
console.log('SHIFT', listItems);
// Ordenar elementos
listElements.sort();
console.log('SORT', listItems);

// Ojo con el 100 pilla el primer valor
let listNumbers = [3, 4, 5, 8, 1, 2, 6, 7, 100];
listNumbers.sort();
console.log(listNumbers);

// Alfabetico nos vale
let listNames = ['Alberto', 'Pedro', 'Juan', 'Alvaro', 'Cintia', 'Raul'];
listNames.sort();
console.log(listNames);

// Corta elemento desde posicion idicada y tantos como iondiques 
let listToSplice = [1, 2, 3, 4, 5, 6, 7]
listToSplice.splice(2, 2);
console.log('SPLICE', listToSplice);
// Corta y permite añadir elementos en dicha posición
listToSplice.splice(2, 2, 'Hola amigos del metal');
console.log('SPLICE - ADD', listToSplice);

// Añade un  elemento en la primera posición
let listToUnshift = [1, 2, 3, 4, 5];
listToUnshift.unshift('pepe', 'juan', 'paco');
console.log('UNSHIFT', listToUnshift);

// Metodos NO MODIFICAN AL ARRAY

//Concatenar o unir arrays

let dcHeroes = ['Superman', 'Batman', 'Aquaman'];
let dcVillians = ['Black Adam', 'Joker', 'Lex Luthor'];

// NO SE MODIFICA - Si vale [] se queda en []
let dcCharacters = [];
console.log('CONCAT', dcCharacters.concat(dcHeroes.concat(dcVillians)));

// Directamente le asigno el valor de la concatenación
let dcConcatList = dcCharacters.concat(dcHeroes.concat(dcVillians));
console.log('CONCAT ASIGNADO', dcConcatList);

// JOIN - une y lo pasa a string - por elemento pasado por param
let myHeroes = dcHeroes.join('-');
console.log('JOIN - , ', myHeroes);

let myNumberJoin = [1, 2, 3, 4, 5, 6];

// String separado por ,
let joinNumberList = myNumberJoin.join(',');
console.log(joinNumberList);

// SLICE- te devuelve la parte troceada

let listToSlice = [1, 2, 4, 5, 6];

let partSliceList = listToSlice.slice(0, 2);

console.log('NO MODIFICO', listToSlice);
console.log('SLICE', partSliceList);

// EJEMPLO DE PORQUE NO MODIFICAR - Los Datos nos vienen de una petición

// DB-Base de datos = alamacena la información
// -> <-
// Backend = Consulta [recuperar], manipula y envia info a la DB
// -> <-
// Frontend = Navegador - el usuario interactua con la aplicación y por cada acción emite una solicitud al backend

//------------------- Es por lo que hay tanto curro de FRONT

// DB- CLOUD [FIREBASE] - NEXTJS [SERVER PROPIO - QUE ME DEVUELVE HTML Y CSS CONSTRUIDO]
// Frontend -> Ataco directamente a la DB

let listUsers = [
    {
        id: 1,
        name: 'Cristian',
        isDeveloper: true
    },
    {
        id: 2,
        name: 'Xulio',
        isDeveloper: true
    }
];


let listUsersRecoverFirst = listUsers.slice(0, 1);

console.log(listUsersRecoverFirst);

console.log(listUsers);

// Metodos de localización

let modeSelector = ["Who", "Fentanyl", "Tom", "Dy", "Who"];

let index = modeSelector.indexOf('Tom');


let indexNotExists = modeSelector.indexOf('HOLA');

console.log('indexOf', index);

console.log('indexOf', indexNotExists);

let lastIndexOf = modeSelector.lastIndexOf('Who');

console.log('último', lastIndexOf)


let listFilms = ['Reservoir dogs', 'The Big Lewoski', 'End Game'];


console.log('STRING', listFilms[0].includes('ogs'));


listFilms.forEach((film) => {
    console.log('Pelicula', film)
    if (film.includes('ogs')) {
        console.log('Esta incluido')
    } else {
        console.log('No esta incluido')
    }
})

console.log(listFilms.includes('Reservoir dogs'));
// expected output: true

console.log(listFilms.includes('og'));
// expected output: false



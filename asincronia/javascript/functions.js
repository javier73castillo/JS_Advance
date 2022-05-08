// Automatizacion - reutilizable - puede tener un retorno - contenedor de código
// Es un fragmento de codigo reutilizable que automatiza procesos y retorna un valor en base a los elementos de entrada.

// Palabara reservada function + nombre + ( params o no ) + { codigo}

function sayHelloConsole(name) {
    console.log('Hola:' + name);
}

// Invocado o ejecutado
sayHelloConsole('Henry');
sayHelloConsole('Ema');
sayHelloConsole('Cintia');
sayHelloConsole('Jorges');

//------------------------- EJEMPLO CON FUNCIONALIDAD
function newFriendToList(name, listMyFriends) {
    listMyFriends.push(name);
}

let listFriendsAlberto = ['Carlitos', 'Miguel', 'Alba', 'Fran', 'Cristian'];

newFriendToList('Antonio', listFriendsAlberto);
console.log('ALBERTO', listFriendsAlberto);

newFriendToList('Alvaro', listFriendsAlberto);
console.log('ALBERTO', listFriendsAlberto);


let listFriendsAlvaro = ['Antonio', 'Silvia', 'Agus', 'Santi'];

newFriendToList('Alberto', listFriendsAlvaro);

console.log('ALVARO', listFriendsAlvaro);


//-------

let food = ['ice cream', 'pizza', 'hamburger', 'stew', 'water melon', 'salt'];

let favoritePlayers = ['Piti', 'Cota', 'Michel I de vallecas', 'Trejo'];

function getFirstItem(list) {
    // length nos devuelve la longitud de un elemento iterable - string | array
    if (list.length > 0) {
        console.log('FIRST', list[0]);
    } else {
        console.log('Elemento no iterable')
    }
}

function reverseList(list) {
    console.log('REVERSE', list.reverse());
}

function sortListAlphabetic(list) {
    console.log('SORT', list.sort());
}

function sayPepe() {
    console.log('Dice Pepe')
}

sayPepe();
sayPepe();
sayPepe();
sayPepe();

getFirstItem(food);
getFirstItem(favoritePlayers);

reverseList(food);
reverseList(favoritePlayers);

sortListAlphabetic(food);
sortListAlphabetic(favoritePlayers);

getFirstItem('pepe');
getFirstItem([100]);

getFirstItem(true);

// Functions default parameters - default podemos pasar el tipo que queramos
function marvelAttacks(name = 2, attack = 'algo muy poderoso') {
    console.log(name + ' y su ataque es ' + attack)
}

marvelAttacks('Spiderman', 'lanzar telarañas');

marvelAttacks('Iron man');

marvelAttacks();

function dcFan(name, editorial) {
    name = name || 'Un personaje';
    editorial = editorial || 'soy de DC';

    console.log(name + 'es un tipo de ' + editorial);
}


function dcFanWhitVars(name, editorial) {
    let nameDefault = name || 'Un personaje';
    let editorialDefault = editorial || 'soy de DC';

    console.log(nameDefault + 'es un tipo de ' + editorialDefault);
}

dcFan('Alberto');

dcFan('Alberto', 'soy de Marvel');

dcFan();

//--------------- Funciones callback TODO: ver más adelante
function sayNameCallback(name) {
    console.log('HOLA TU NOMBRE ES ' + name)
}

function sayMyName(sayCompleteName, name) {
    sayCompleteName(name)
}


sayMyName(sayNameCallback, 'pepe');

// Funciones con retorno
function giveAMoney(quantity) {
    return 'Te doy para gastar ' + quantity;
    console.log('Hola Upgraders');
}

let money = giveAMoney(1000);

console.log(money);


function suma(numberA, numberB) {
    return numberA + numberB;
}

let total = suma(5, 5);

console.log(total);

function addItemToList(item, list) {
    return list.push(item);
}

let code = ['Js', 'Java', 'Python'];

console.log(code)

addItemToList('Php', code);

console.log(code)
// Declarar (reservar espacio de memoria)
let name;

// Inicializar (dar valor)
name = 'Jorge';

// Imprimir por consola - node + nombre_fichero
console.log(name);

// Declarar + inicializar (dar valor)
let box = '🥁 ';

// Imprimir por consola - node + nombre_fichero
console.log(box)

let boxTwo = '🎸 ';

console.log(boxTwo);

// Intentamos no usar var - salto de fe [lo vermeos en scopes]
var boxVar = 'Esto es una variable con Var';

console.log(boxVar);

// Declarar variables en una misma linea

let banana = '🍌', orange = '🍊', kiwi = '🥝';

console.log('LINE', banana, orange, kiwi);

// Os propongo mejor declaralo con salto

let bananaJump = '🍌';
let orangeJump = '🍊';
let kiwiJump = '🥝';

console.log('JUMP', banana, orange, kiwi);

// let no permite dar mismo nombre a dos variables - var si
var potatoe = 'patata';
console.log('PRIMERO', potatoe)
var potatoe = 'tomato';
console.log('SEGUNDO', potatoe)

// Erro de ejecución - no permite usar dos let con el mismo nombre
// let melon = 'melon';
let melon = 'water melon';

// cambiar valor de variable
let favoriteFruit = '🍉';

console.log('Mi fruta preferida es:', favoriteFruit);

favoriteFruit = '🍊';

console.log('Mi fruta preferida con 34 años:', favoriteFruit);

// JS tiene un único hilo - se lee de arriba - izquierda haci abajo - derecha


// Variables naming

// Ser especifico - number solo me indica que es un numero
let number = 34;
// age me da más información sobre el valor alamacenado
let age = 34
// se que es un número y que referencia tiene
let favoriteNumber = 4;

// No empezar por un número
// let 2pepe = 54;

// No usar guiones
// let my-name = 'Alberto';

// Si CamelCase
let myName = 'Alberto';

// no se puede llamar a una variable let o return
// let let = 'pepe';
// let return = 'pepe';

// Asignaciónd e valor de una variable a otra

// No acceder antes de ser inicializado
// let myFavoritePokemon = pokemon;

let pokemon = 'Charizar';

let myFavoritePokemon = pokemon;

pokemon = 'Charmander'

let strongestPokemon = myFavoritePokemon;

console.log('NOMBRE', pokemon);
console.log('FAVORITO', myFavoritePokemon);
console.log('TOY FUERTE', strongestPokemon);


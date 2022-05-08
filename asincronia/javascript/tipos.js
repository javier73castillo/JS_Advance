let name = typeof 'Alberto'; // string

let age = typeof 34; // number

let isDeveloper = typeof true; // boolean

console.log('TIPO', name);
console.log('TIPO', age);
console.log('TIPO', isDeveloper);

// Ejemplo para entnder booleans
let isChef = true;

if (isChef) {
    console.log(isChef);
}

// Reasignar valor de tipo diferente

let mutantVariable = 'Pepe';
mutantVariable = 35;
mutantVariable = true;

console.log('MUTANDO', mutantVariable);

let example; // Value undefined
example = '🍌'; // Value 🍌
example = 2; // Value 2
example = '🍎'; // Value 🍎
example = true; // Value true

console.log('MUTANDO', example);

// String - cadena de texto

let upgraderName = 'Henry';

console.log('STRING', upgraderName);

// Método para poner el string en mayusculas
let mayusculasUpgrader = upgraderName.toUpperCase();

console.log('SIN VARIABLE', upgraderName.toUpperCase());

console.log('CON VARIABLE', mayusculasUpgrader);

upgraderName = upgraderName.toUpperCase();

console.log('REASIGNAR', upgraderName);

// Ejemplo de replace

let sentence = 'A nuestro amigo Henry le gusta la fiesta';

// replace - remplazar
console.log(sentence.replace('fiesta', 'tranquilidad'));

// Includes - está incluido?
console.log(sentence.includes('fiesta'));
console.log(sentence.includes('pepe'));

// contamos desde 0 - 0=P / 1=a ...
let counterWord = 'Pato';

// Number
let ageNumber = 34;
let weight = 76.5;

// Boolena
let isDeveloperBoolean = true;
let isDriver = false;

// Null

let valueReturnNull = null;
console.log(valueReturnNull);

// Undefined
let fruit; // Value undefined

console.log('UNDEFINED', fruit);

fruit = undefined; // Value undefined
console.log('ASIGNAMOS UNDEFINED', fruit);

let one = Symbol('one'); // Es único independiente de su valor

let otherOne = Symbol('one'); // Es único independiente de su valor

console.log(one === otherOne);

// Utilidad de Symbol - generar un id único

let upgradersClass = [
    {
        id: Symbol(1),
        name: 'Xulio'
    },
    {
        id: Symbol(1),
        name: 'Jorge'
    }
]

// CONCATENAR - Es pregunta de entrevista - funcionamiento de tipos

let banana = '🍌' + 5 + 5; // '🍌55'

let quantityBanana = 5 + 5 + '🍌'; // '10🍌'

console.log('BANANA', banana);

console.log('QUANTITY BANANA', quantityBanana)







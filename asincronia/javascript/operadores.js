// OPERADORES ARITMETICOS

let numA = 15;
let numB = 3;

let suma = numA + numB;

console.log(suma);

let resta = numA - numB;

console.log(resta);

let multi = numA * numB;

console.log(multi);

let division = numA / numB;

console.log(division);

let percentage = 30000 % 7;

console.log(percentage);

let discount = (19.90 * 80) / 100;

console.log(discount);

let num1 = ++numA;
console.log(num1);
let num2 = --numB;
console.log(num2);

// Operados LΓ³gicos || OR


let banana = 'π';

let apple = 'π';

let box = 'π¦';

let man = 'π¨';

// banana || apple son fruits -> true; // Ambas son frutas

// banana || box son fruits -> true; // Una u otra es fruta

// box || man son fruit -> false; // Ninguna es fruta

if ((banana == 'π') || (apple == 'π')) console.log('Son frutas - 1');

if ((banana == 'π') || (box == 'π')) console.log('Son frutas - 2');

if ((man == 'π') || (box == 'π')) console.log('Son frutas - 3');


// Operados LΓ³gicos && Y

// banana && apple son fruits -> true; // Ambas son frutas

// banana && box son fruits -> false; // solo banana es una fruta

// box && man son fruit -> false; // Ninguna es fruta

if ((banana == 'π') && (apple == 'π')) console.log('Son ambas frutas - 1');

if ((banana == 'π') && (box == 'π')) console.log('Son ambasfrutas - 2');

if ((man == 'π') && (box == 'π')) console.log('Son ambas frutas - 3');

// Operados LΓ³gicos ! NOT


let imDeveloper = true;
console.log(imDeveloper);
imDeveloper = !imDeveloper; // El contrario de imDeveloper es false
console.log(imDeveloper);
imDeveloper = !imDeveloper; // El contrario de imDeveloper es true
console.log(imDeveloper);
console.log(!true); // El contrario de true es false

console.log(!false); // El contrario de false es true


if ((banana != 'π') && (apple == 'π')) console.log('UNO');

if ((banana == 'π') && (box != 'π')) console.log('DOS');

if ((man != 'π') || (box != 'π')) console.log('TRES');

// == compara solo el valor === compara valor y tipo

let numberSelect = '2';
let numberSelectNumber = 2;

if (numberSelect == numberSelectNumber) console.log('UNO', 'Coincide en valor');

if (numberSelect === numberSelectNumber) console.log('UNO', 'Coincide en valor pero no en tipo');

// != compara que no sea el mismo valor !== no coincida en valor y tipo

if (numberSelect != numberSelectNumber) console.log('DOS', 'Coincide en valor');

if (numberSelect !== numberSelectNumber) console.log('DOS', 'Coincide en valor pero no en tipo');
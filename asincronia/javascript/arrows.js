// Arrow funcition sintaxis

const sayName = (param) => {
    console.log(param)
}

sayName('Pepe')

// Acortar 1

const returnValue = (param) => console.log('hola ' + param);

returnValue('Paco')

// ACORTAR 2 -> solo un elemento por param

const multiplicationFour = x => x * 4;

console.log(multiplicationFour(4));

const multiTable = (x, y) => x * y;

// sin acortar - esto PARA TODOS HASTA QUE APRENDAIS
const myArrow = (param, paramTwo) => {
    // operación

    return // nuestro retorno
}

// Arrow transform 
const changevalues = (list, numberToChange, numberChange) => {
    for (let index = 0; index < list.length; index++) {
        if (list[index] == numberToChange) {
            list[index] = numberChange
        }
    }
}

let numberList = [1, 2, 1, 4, 1, 5];

changevalues(numberList, 1, 5);

console.log(numberList);

// Arrow + 3 param -> objeto

const changeValuesObject = (objectChanges) => {
    for (let index = 0; index < objectChanges.list.length; index++) {
        if (objectChanges.list[index] == objectChanges.numberToChange) {
            objectChanges.list[index] = objectChanges.numberChange
        }
    }
}

let inputelectNumber = 4;
let inputToChange = 10;


let objectChanges = {
    numberToChange: inputelectNumber,
    numberChange: inputToChange,
    list: [1, 2, 1, 4, 1, 5]
}

let name = 'Alberto';
let newName = 'Pedro';
let listUsers = ['Alberto', 'Juan', 'Pepe', 'Alberto']

let listToChange = {
    numberToChange: name,
    numberChange: newName,
    list: listUsers
}

changeValuesObject(objectChanges);

changeValuesObject(listToChange);

console.log(objectChanges.list)


console.log(listToChange.list)
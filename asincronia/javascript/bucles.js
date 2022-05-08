// Framgento de codigo que itera sobre un elemento hasta que cumple la condicion

// For tradicional - for (defimos el iterador - condición - modif) {logica}

let numberList = [1, 2, 3, 4, 5]

for (let i = 0; i < numberList.length; i++) {
    console.log('VALUES', i, numberList[i])
}

for (let j = 0; j < numberList.length; j++) {
    if (numberList[j] % 2 == 0) {
        console.log('DIVISIBLE', j, numberList[j])
    }
}

// anidar bucles

let miniCodersList = [
    {
        name: 'JdelaCruz',
        codeList: ['Js', 'React']
    },
    {
        name: 'EdDarko',
        codeList: ['Js', 'Node']
    }
]

for (let i = 0; i < miniCodersList.length; i++) {
    for (let j = 0; j < miniCodersList[i].codeList.length; j++) {
        console.log(miniCodersList[i].name + 'Works: ' + miniCodersList[i].codeList[j])
    }
}

let foodList = [
    {
        name: 'Patata',
        kcal: 100,
        recipes: ['Tortilla de patatas', 'ensaladilla rusa']
    },
    {
        name: 'Tomate',
        kcal: 50,
        recipes: ['sopa de tomate', 'gazpacho']
    },
    {
        name: 'salmon',
        kcal: 200,
        recipes: ['salmon al horno', 'salmon a la plancha']
    },
    {
        name: 'cerdo',
        kcal: 300,
        recipes: ['costillas', 'chuletas']
    }
]

// sacar las recetas que puedo hacer
for (let i = 0; i < foodList.length; i++) {
    for (let j = 0; j < foodList[i].recipes.length; j++) {
        console.log(foodList[i].recipes[j])
    }
}
// calcular el total kcal de mis alimentos
let totalKcals = 0;

for (let i = 0; i < foodList.length; i++) {
    totalKcals += foodList[i].kcal
}
console.log(totalKcals);

// sacar la lista de mis alimentos
for (let i = 0; i < foodList.length; i++) {
    console.log(foodList[i].name)
}

// ----> Funciones reutilizables

const listIterable = (list) => {
    for (let i = 0; i < list.length; i++) {
        foodTotalKcal(list[i].kcal)
        AddName(list[i].name)
        for (let j = 0; j < list[i].recipes.length; j++) {
            AddName(list[i].recipes[j])
        }
    }
}

let listNames = [];
let nameRecipes = []
const AddName = (name) => {
    listNames.push(name);
}

let counter = 0;
const foodTotalKcal = (kcal) => {
    counter += kcal
}

listIterable(foodList);
// ForEach --->

let nameList = ['Raul', 'Jorge', 'Ema', 'Paula'];

// Rendimiento - X
nameList.forEach(
    function (params) {
        console.log(params)
    }
)

nameList.forEach((params) => {
    console.log(params)
})

nameList.forEach(params => console.log(params));

// Rendimiento - V
for (let i = 0; i < nameList.length; i++) {
    name(nameList[i])

}

function name(params) {
    console.log(params)
}

// For..of - + rapido que forEach valores de objetos - es una directiva de angular

let justiceLeague = ['Batman', 'Aquaman', 'Superman'];
for (let character of justiceLeague) {
    console.log(character);
}

let clark = 'Superman';
for (let who of clark) {
    console.log(who);
}

// For in - claves de los objetos - diferente a los anteriores / iterador de objectos

// Definimos un objeto con los datos de una spiderman
let spiderman = {
    nombre: "Peter",
    apellidos: "Parker",
    pais: "USA",
    profesion: "Student"
}

for (let key in spiderman) {
    console.log("Spiderman tiene " + key + " con valor: " + spiderman[key]);
}

// For in vs for of

let dieHardList = [1, 2, 'Simon', 'John McClane', 'Zeus Carver'];

var dieHardObj = {
    name: 'John',
    surname: 'McClane',
    age: 37
};

for (value of dieHardList) {
    console.log(value);
}

for (key in dieHardList) {
    console.log(key);
}

for (key in dieHardObj) {
    console.log(key);
}

//NO USAR FOR OF O OTROS PARA ITERAR UN OBJECTO SOLO FOR IN
// for (value of dieHardObj) {
//     console.log(value);
// }


//For..of vs for..each

let backToTheFutureList = [21, 10, 2015, 'Delorean'];
let backToTheFutureName = 'Dr.Emmett Brown';

// Iterar un Array
for (item of backToTheFutureList) {
    console.log(item);
}

backToTheFutureList.forEach(function (value, index) {
    // podemos acceder al índice
    console.log(value, index);
});

backToTheFutureList.forEach((value, index) => {
    console.log(value, index);
})

for (value of backToTheFutureName) {
    console.log(value);
}

// Porque ejecuto una funcion por linea y el string pese a ser iterable no tiene elementos de ejecucion
// backToTheFutureName.forEach(function (value, index) {
//     console.log(value, index);
// });


// RESUMEN -> forEach => para todo menos for of strings y for in objectos

let namesUpgraders = { name: 'Javier', age: 25 }

for (key in namesUpgraders) {
    if (typeof (namesUpgraders[key]) === 'string') {
        console.log('Entro')
        for (value of namesUpgraders[key]) {
            console.log(value)
        }
    }
}


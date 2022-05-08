// -> Js es monohilo: Un hilo de lectura

// -> Frontal necesito info de la DB -> 0.0001s -> Te prometo que llegará

// Promesas -> 2 estados - Cumplir [resolve] | no cumplir [reject]

// Messi -> fc Barcelona -> 50 millones -> [prometo]
// Messi vive como si tuviese 50 millones
// FC Barcelona -> lo cumpla
// FC Barcelona -> Quiebra y no lo cumpla
// Messi que ha vivido en base a una promesa -> como si tuviese 50 millones

// Raul -> 300k -> Pide un prestamo
// Raul promete pagarlo -> Disfruta de sus casa
// Raul -> Pgar el total | no pagarlo y perder la casa

//-------

// getUser - Recupera los datos del usuario 0.0001s
// tranformDataUser ->Tranformo la información -> y le prometo que vaa tner esos datos

//-----
// Post- Linkedin -> Hola soy Paula y soy FS Developer
// -> Tu post está subido / MENTIRA Peticion -> 0.0002s
// TODO VA OK

const addFood = (food, foodList) => {
    const promiseFood = new Promise((resolve, reject) => {
        if (!foodList || !food) {
            reject('Params incomplete')
        }
        // SetTimeOut = 1 param una funcion - 2 el tiempo que tarda
        setTimeout(() => {
            foodList.push(food);
            resolve(foodList);
        }, 5000)
    });
    return promiseFood
};

const list = ['patata', 'tomate', 'aguacate'];

addFood('lechuga', list).then((list) => {
    console.log(list);
}).catch((error) => {
    throw new Error(error)
});

console.log(list);
console.log('Sigo mi camnimo soy monoHilo');

const user = {
    surname: 'Perez',
    age: 35,
    color: 'red',
    team: 'Valencia',
    location: 'León'
}

// Esto se usa mucho en React para manipular elementos de un state
const newUserName = (name, user) => {
    const userPromise = new Promise((resolve, reject) => {
        if (!user) reject('No hay Usuario')
        setTimeout(() => {
            user = {
                name,
                ...user
            }
            resolve(user)
        }, 2000)
    });
    return userPromise
}

newUserName('Paco', user).then((user) => {
    console.log(user);
}).catch((error) => {
    throw new Error(error)
});

console.log(user);

// Notion

const addItem = (item, list) => {
    const promise = new Promise((resolve, reject) => {
        if (!list) {
            reject('No existe el array');
        }

        setTimeout(function () {
            list.push(item);
            resolve(list);
        }, 2000);
    });

    return promise;
};

const listColor = ['Rojo', 'Azul', 'Verde'];

addItem('Amarillo', listColor)
    .then((listColor) => {
        console.log(`El listado final es: ${listColor.join(', ')}`);
    })
    .catch((err) => {
        throw new Error(err);
    });


const listCoen = ['Raising Arizona', 'Fargo', 'Barton Fink'];

addItem('The big Lewoski', listCoen)
    .then(() => addItem('O Brother, Where Art Thou?', listCoen))
    .then(() => addItem('The Man Who Wasnt There', listCoen))
    .then(() => addItem('The Ladykillers', listCoen))
    .then(() => {
        console.log(listCoen);
    }).catch((error) => {
        throw new Error(error)
    });

// (4 seg. de delay) -> ['Raising Arizona','Fargo','Barton Fink', ...];




const theBigLewoski = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'The big Lewoski');
});
const theLadyKillers = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'The Lady Killers');
});
const joJoRabbit = new Promise((resolve, reject) => {
    reject('jo jo rabbit - error Taika Waititi');
});

/* Example: .then with 2 functions */
Promise.all([theBigLewoski, theLadyKillers]).then(
    (films) => {
        console.log(films);
    }, (err) => {
        console.error(err);
    });

/* Example: .catch */
  // Promise.all([theBigLewoski, theLadyKillers, joJoRabbit])
  //   .then((films) => {
  //     console.log(films);
  //   }).catch((err) => {
  //     console.error(err);
  //   });
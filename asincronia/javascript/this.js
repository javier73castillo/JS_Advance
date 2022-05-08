let streamer = {
    nombre: 'Cristian',
    edad: 29,
    streaming: function () {
        console.log(this.nombre + ' en Twitch');
    }
};

streamer.streaming(); // Cristian en Twitch

// Cuando invoco a la función le paso un objeto laura o mateo
let sayMyName = function (obj) {
    // le damos un nuevo atributo - una función que se ejecuta y dice el nombre
    obj.speak = function () {
        console.log(this.nombre);
    };
    // esto es igual a la lína 23
};

// Scope propio de las arrows
// let isMommy = (persona) => {
//     persona.isMommy = () => {
//         console.log('Soy madre:' + this.name)
//     }
// }

let isMommy = function (persona) {
    persona.isMommy = function () {
        console.log('Soy Mamá:' + this.name);
    };
}

const ana = {
    name: 'Ana'
}

const juana = {
    name: 'Juana'
}

const lolita = {
    name: 'lolita'
}

isMommy(juana);

juana.isMommy();

// lolita.isMummy()

// ana.isMummy();

const mateo = {
    nombre: 'Mateo',
    edad: 1
    // speak: ()=> console.log(this.name)
};

const laura = {
    nombre: 'Laura',
    edad: 33
};

// primero pasamos el objeto 
sayMyName(laura);
sayMyName(mateo);

// aqui ya tiene la propiedad y la puedo ejecutar
laura.speak(); // Laura
mateo.speak(); // Mateo


let Persona = function (nombre, edad, child) {
    return {
        nombre: nombre,
        edad: edad,
        hablar: function () {
            console.log('Soy', this.nombre);
        },
        child: {
            nombre: child,
            hablar: function () {
                console.log('Soy', this.nombre);
            }
        }
    };
};

const lauraTwo = Persona('Laura', 30, 'Mateo');

lauraTwo.hablar(); // Laura
lauraTwo.child.hablar(); // Mateo
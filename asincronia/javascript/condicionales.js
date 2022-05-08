// Marca el camino a seguir en nuestrro código

let sayHelloUser = (user) => {
    return 'hola eres un usuario con el nombre ' + user.name;
}

let sayHelloAdmin = (admin) => {
    return 'hola eres un admin con el nombre ' + admin.name;
}

let xulioAdmin = {
    name: 'Xulio',
    isAdmin: true
}

let ricardoUser = {
    name: 'Ricardo',
    isUser: true
}

if (xulioAdmin.isAdmin) {
    console.log(sayHelloAdmin(xulioAdmin))
}

if (ricardoUser.isUser) {
    console.log(sayHelloAdmin(ricardoUser))
}

// Respuesta Booleana

if (true) { console.log('Hola Upgraders') };
if (false) { console.log('Adios Upgraders') };

let name = 'pepa';

if (name === 'pepe') { console.log('Hola pepe') } else { console.log('No eres pepe') };

// If Else + else if

let avenger = {
    name: 'Patata',
    isHuman: false,
    power: 400,
    isHansom: true,
    weapon: 'Mjornir'
}

if (avenger.name === 'Thor') {
    console.log('Hola Thor')
} else if (avenger.power > 100) {
    console.log('Ohh eres muy fuerte')
} else if (avenger.weapon === 'Mjornir') {
    console.log('Donde esta el stormBraker')
} else {
    console.log('Joe con Thor')
}

// Ternarios

let age = 18;

let accessAllowed = (age >= 18) ? true : false;

let ageTwo = 18;

let message = (ageTwo < 3) ? '¡Wow cada día los developers son más jóvenes!' :
    (ageTwo < 18) ? '¡Bienvenido a MiniCode!' :
        (ageTwo < 100) ? 'Debe gustarte mucho el desarrrollo' :
            '¡Meehh error en el sistema!';

console.log(message);

// Sin asignar el valor a una variable

let nameReact = 'Pepe';

(nameReact === 'Cristian Castillo') ? console.log('¡Fan de React!') : console.log('Ouch! no te gusta React?');

let alberto = {
    pastilla: true,
    dinero: true,
}

if (alberto) (alberto.pastilla && alberto.dinero) ? console.log('Vuelo') : console.log('No')
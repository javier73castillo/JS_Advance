// const -> siempre se ha de asignar valor al inicializar variable. 
// -> No se puede reasignar el valor.
const name = 'FirstConst';

// let -> se diferencia de var en el scope de la variable. 
// -> Lugar de acción de la variable.
// var myAvenger = 'SpiderMan'

// if (myAvenger) {
//     var myAvenger = 'Thor';
//     console.log('Dentro del if: ' + myAvenger);
// }
// console.log('Fuera del if: ' + myAvenger);

// En ambas es Thor -> se ha pisado el valor de myAvenger.

let myAvenger = 'SpiderMan'

if (myAvenger) {
    let myAvenger = 'Thor';
    console.log('Dentro del if: ' + myAvenger);
}

const sayAvenger = () => {
    let myAvenger = 'Captain America';
    console.log('Dentro de la función', myAvenger)
}

function sayAvengerOther() {
    let myAvenger = 'Black Widow';
    console.log('Dentro de la función vieja', myAvenger)
}

sayAvenger();

sayAvengerOther();

console.log('Fuera del if: ' + myAvenger);

// En una es Spiderman y en la otra Thor 
// -> respeta el scope o creación de la variable.
// -> Ocurre lo mismo en funciones.
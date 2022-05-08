// A la antigua - nuevo elemento de tipo object
let upgrader = new Object();
// Key + value
upgrader.name = 'Henry';
upgrader.age = 19;

console.log(upgrader);

// A la nueva - JS mola
let student = {
    name: 'Paula',
    age: 27
}

student.city = 'Toscana';

console.log(student);
console.log('NOMBRE', student.name);
console.log('CIUDAD', student.city);
console.log('EDAD', student['age']);

// Objeto complejo - Parte 1

let avenger = {
    name: 'Doctor Strange',
    age: 37,
    powers: ['time control', 'ojo agamoto', 'cloack']
}

console.log(avenger.powers[0]);
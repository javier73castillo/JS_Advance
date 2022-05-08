let xmen = ['Ciclops', 'Beast', 'Angel', 'Marvel-girl'];
let newXmen = ['Wolverine', 'NightCrawler', 'Storm'];
let newMutants = ['iceMan', 'Kitty Pride'];

let profesor = [...xmen, ...newXmen, ...newMutants];

console.log(profesor);
console.log(xmen);
console.log(newXmen);
console.log(newMutants);

//-------- PcComponentes

let mobiles = ['Apple', 'Motorola', 'Xiaomi', 'Samsung'];

let portatiles = ['MSI', 'MacBook', 'Huawei'];

let camara = ['Canon', 'Kodak', 'Nikon'];

let carritoAlberto = [...mobiles, ...portatiles, ...camara];

let carritoRaul = [...portatiles];

let filterCarritoAlberto = 'Apple';

carritoAlberto.forEach((item) => {
    if (item === 'Apple') {
        mobiles.forEach((mobile) => {
            if (mobile === 'Apple') {
                return 'Es un Mobile'
            } else {

            }
        })
    }
})

let portatilesReverse = [...portatiles].reverse();

console.log(portatiles);
console.log(portatilesReverse);

//------

// productos - [] - backend [logica de negocio]


// filtro - copia  de productos y aplico el filtro 35 []

const suma = (a, b, c = 3) => {
    return a + b + c;
}

const numbers = [1, 2];

console.log(suma(...numbers));


const rest = (a, b) => a - b;

const numberResta = [5, 25];

rest(...numberResta);

const myTeam = 'RAYO';
const characters = [...myTeam];

console.log(characters)

let myTeamUnion = characters.join('-');

console.log(myTeamUnion);


const obj1 = { firstName: 'Foo', age: 22, garnyMola: true };
const obj2 = { lastName: 'Bar', gender: 'M', garnyMola: false };

const newObj = { ...obj2, ...obj1, planet: 'Earth' };

console.log(newObj);

const details = {
    firstName: 'Code',
    lastName: 'Burst',
    age: 22
};

const { age, ...restOfTheDetails } = details;

console.log(age);
console.log(restOfTheDetails);


let objectProduct = {
    hdvhd: 1,
    djvklsd: 2,
    dchvkdlfsjv: 3,
    sdfjbkfdsjbvs: 4,
    sdñfbhvdfsjb: 5,
    cbvosfjboivs: 6,
    fdjbhsd: 7
}

const { hdvhd, djvklsd, cbvosfjboivs, ...partTwo } = objectProduct
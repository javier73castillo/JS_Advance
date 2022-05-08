// Map - Mapea : modifica el elemento iterable y te lo devuelve en uno nuevo
var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
];

// Lo que necesitamos nombres

let officersName = [];

officers.forEach((officer) => {
    officersName.push(officer.name)
});

console.log(officersName);

let officersNameMap = officers.map((officer) => {
    return officer.name
});

let officerMapNameClean = officers.map(officer => officer.name + 'Pepe')

console.log(officersNameMap);
console.log(officerMapNameClean);

//-------- Otro Ejemplo - Map transforma datos

let madridPlayers = [
    {
        dorsal: 8,
        name: 'Kroos'
    },
    {
        dorsal: 10,
        name: 'Modric'
    }, {
        dorsal: 14,
        name: 'Casemiro'
    }, {
        dorsal: 9,
        name: 'Benzema'
    }
]

let dorsalesEnUso = madridPlayers.map((player) => {
    return player.dorsal
});

let transformData = madridPlayers.map((player) => {
    if (player.name === 'Casemiro') {
        return { ...player, esUnCerdo: true }
    } else {
        return { ...player, granJugador: true }
    }
});

console.log(transformData);

console.log(dorsalesEnUso);

//------- Filtros solo filtra

const pilots = [
    { id: 2, name: "Wedge Antilles", faction: "Rebels", },
    { id: 8, name: "Ciena Ree", faction: "Empire", },
    { id: 40, name: "Iden Versio", faction: "Empire", },
    { id: 66, name: "Thane Kyrell", faction: "Rebels", }];

let myEmpire = [];

pilots.forEach((pilot) => {
    if (pilot.faction === 'Empire') {
        myEmpire.push(pilot)
    }
});

console.log(myEmpire);

let empire = pilots.filter(pilot => pilot.faction === 'Empire');

console.log(empire);

// Find - Devuelve el primero que cumpla la condicion
// si no cumple devuelve undefined

const array1 = [5, 6, 8, 4, 1];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12

const upgraders = [
    {
        name: 'Xulio',
        surname: 'Rojas',
    },
    {
        name: 'Ricardo',
        surname: 'Riballo',
    },
    {
        name: 'Jorge',
        surname: 'Riballo',
    },
    {
        name: 'Alvaro',
        surname: 'Gutierrez',
    }
]

const findRiballo = upgraders.find(upgrader => upgrader.surname === 'Riballo');

const filterRiballo = upgraders.filter(upgrader => upgrader.surname === 'Riballo');
console.log(findRiballo);
console.log(filterRiballo);

// Reduce 

var pilotsReduce = [
    { id: 10, name: "Poe Dameron", experience: 5, },
    { id: 2, name: "Temmin 'Snap' Wexley", experience: 10, },
    { id: 41, name: "Tallissan Lintra", experience: 1, },
    { id: 99, name: "Ello Asty", experience: 2, }
];

let myExperience = 1;

let totalExperience = pilotsReduce.reduce((acc, pilot) => {
    return acc + pilot.experience
}, myExperience)

console.log(totalExperience);

//-------

var personnel = [
    { id: 5, name: "Luke Skywalker", pilotingScore: 98, shootingScore: 56, isForceUser: true, },
    { id: 82, name: "Sabine Wren", pilotingScore: 73, shootingScore: 99, isForceUser: false, },
    { id: 22, name: "Zeb Orellios", pilotingScore: 20, shootingScore: 59, isForceUser: false, },
    {
        id: 15, name: "Ezra Bridger", pilotingScore: 43, shootingScore: 67,
        isForceUser: true,
    },
    {
        id: 11, name: "Caleb Dume", pilotingScore: 71, shootingScore: 85,
        isForceUser: true,
    }
];

const totalJediScore = personnel.filter(person => person.isForceUser)
    .map(jedi => jedi.pilotingScore + jedi.shootingScore)
    .reduce((acc, score) => acc + score, 0);

console.log(totalJediScore);
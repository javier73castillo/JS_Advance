let marvelCharacter = {
    name: {
        heroName: 'Doctor Strange',
        humanName: 'Stephen Vincent Strange'
    },
    team: ['Avengers', 'Iluminati']
}

let { name, team } = marvelCharacter;

console.log(name)
console.log(team)

let { heroName, humanName } = marvelCharacter.name;

console.log(heroName);
console.log(humanName);

heroName = 'Pepe';

console.log(marvelCharacter);

//----------

const teamFootball = {
    name: 'AD Rayo Vallecano',
    age: 98,
    players: [
        {
            name: 'Bebe',
            number: 10
        },
        {
            name: 'Trejo',
            number: 8
        }
    ],
    info: {
        followers: 8500,
        stadium: 'Vallecas Inferno'
    }
}

// variable entre{} - por que es de un objeto lo que quiero recupera = no,bre de objeto
let { players, info, age } = teamFootball;

let { stadium } = info;

console.log(players);
console.log(info);
console.log(age);
console.log(stadium);

//------ Best Practices - Para Props de React

let person = {
    age: 28,
    isDeveloper: true,
    name: 'Ricardo',
}

const sayMeInfo = ({ name, age, isDeveloper }) => {
    console.log(name);
}

const sayMeInfoWithIn = (param) => {
    let { name, age, isDeveloper } = param
    console.log(name);
}


sayMeInfo(person);
// 2.2 Convierte la siguiente función con un fetch utilizando async-await. 
// Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;


// function getCharacters() {
//     fetch('https://rickandmortyapi.com/api/character').then(res => res.json()).then(characters => console.log(characters));
// }

//getCharacters();

const getCharacter = async () => {
    const res = await fetch ('https://rickandmortyapi.com/api/character')
    const resData =await res.json();
    console.log(resData);
}
getCharacter();

// 2.1 Convierte la siguiente promesa para esperar a ejecutar el console usando 
// async-await.

const runTimeOutA = async () =>
{
    const text = await 'Time out Two!';
    console.log(text);
}
runTimeOutA();


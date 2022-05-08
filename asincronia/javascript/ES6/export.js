let name = 'Paco';

let surname = 'Perez';

export { name, surname };

let years = 45;

export { years as age };

export let color = 'red', number = 50;

export const functionName = () => {
    console.log('Paco')
}

export default name = 'pepito';

export { name1, name2, …, nameN };
export { variable1 as name1, variable2 as name2, …, nameN };
export let name1, name2, …, nameN; // también var
export let name1 = …, name2 = …, …, nameN; // también var, const
export function FunctionName() {... }
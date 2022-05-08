const addItemAndTriggerCallback = (item, list, callbackDone, callbackError) => {
    if (!list) {
        setTimeout(() => {
            callbackError('OOOOOHH no hay heroes')
        }, 2000);
    } else {
        setTimeout(() => {
            list.push(item);
            callbackDone(list, '[Estos son tus heroes]');
        }, 2000);
    }
}

// Para callbacks error
// const listHeores = undefined;

// Para no error
const listHeores = ['Batman', 'Superman', 'Wonder Woman']

let heroe = 'Green Lattern';

const callbackHeroes = (list, message) => {
    console.log(`El listado final es: ${list.join(', ')} -`, message);
}

const callbackError = (message) => {
    throw new Error(message);
}


addItemAndTriggerCallback(heroe, listHeores, callbackHeroes, callbackError)
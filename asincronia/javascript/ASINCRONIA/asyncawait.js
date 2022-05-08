const addItem = (item, list) => {
    const promise = new Promise((resolve, reject) => {
        if (!list) {
            reject('No existe el array');
        }

        setTimeout(function () {
            list.push(item);
            resolve(list);
        }, 2000);
    })

    return promise;
};

const processFilm = async (film, filmography) => {
    try {
        const result = await addItem(film, filmography);
        console.log(result);
    } catch (error) {
        console.error('error', error);
    }
}

processFilm('Back to the Future III', ['Back to the Future', 'Back to the Future II']);

const filmography = ['Raising Arizona', 'Fargo', 'Barton Fink'];
processFilm('The big Lewoski', filmography);
processFilm('O Brother, Where Art Thou?', filmography);
processFilm('The Ladykillers', filmography);

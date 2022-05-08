// error NO controlado
const error = null;

// Intenta y sino ejecutas
try {
    // error controlado
    error.name = 'Pepe';
} catch (error) {
    console.error('error', error);
}
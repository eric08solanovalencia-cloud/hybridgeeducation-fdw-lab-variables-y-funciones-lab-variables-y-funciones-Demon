// Ejercicio 2: Uso de Constantes en Funciones
// Declara una función llamada "obtenerPI" que retorne el valor 3.1416

function obtenerPI() {
    const PI = 3.1416; // declaramos una constante PI
    return PI;         // retornamos su valor
}

// No modificar
// Exporta la función para que pueda ser utilizada en otros archivos
// Como ves, tu función debe tener el nombre obtenerPI
module.exports = {
    obtenerPI
};

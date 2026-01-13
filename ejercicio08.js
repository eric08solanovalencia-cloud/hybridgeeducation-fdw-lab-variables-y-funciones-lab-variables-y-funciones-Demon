// Ejercicio 8: Concatenación de Cadenas
// Declara una función llamada "concatenarCadenas" que acepte dos parámetros, "cadena1" y "cadena2", y retorne la concatenación de ambas cadenas

//Ejemplos:
// concatenarCadenas("Hola", "Mundo") => "HolaMundo"
// concatenarCadenas("Frase", "de prueba") => "Frasede prueba"

function concatenarCadenas(cadena1, cadena2) {
    return cadena1 + cadena2; // Retorna la concatenación de ambas cadenas
}
// Exporta la función para que pueda ser utilizada en las pruebas
module.exports = {
    concatenarCadenas
};

// Ejercicio 9: Calcular el promedio de 5 números
// Declara una función llamada "calcularPromedio" que acepte 5 parámetros "n1", "n2", "n3", "n4", "n5" y devuelva el promedio de los 5 números.

function calcularPromedio(n1, n2, n3, n4, n5) {
    const suma = n1 + n2 + n3 + n4 + n5; // sumamos los 5 números
    const promedio = suma / 5;           // dividimos entre 5 para obtener el promedio
    return promedio;                     // retornamos el resultado
}

// Exporta la función para que pueda ser utilizada en las pruebas
module.exports = {
    calcularPromedio
};

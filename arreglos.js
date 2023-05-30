// Declaración de un arreglo
var numeros = [1, 2, 3, 4, 5];

// Acceder a elementos del arreglo
console.log(numeros[0]);  // Salida: 1
console.log(numeros[2]);  // Salida: 3

// Modificar elementos del arreglo
numeros[1] = 10;
console.log(numeros);  // Salida: [1, 10, 3, 4, 5]

// Obtener la longitud del arreglo
console.log(numeros.length);  // Salida: 5

// Recorrer un arreglo
for (var i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

// Agregar elementos al final del arreglo
numeros.push(6);
console.log(numeros);  // Salida: [1, 10, 3, 4, 5, 6]

// Eliminar el último elemento del arreglo
numeros.pop();
console.log(numeros);  // Salida: [1, 10, 3, 4, 5]

// Buscar el índice de un elemento en el arreglo
var indice = numeros.indexOf(3);
console.log(indice);  // Salida: 2

// Eliminar elementos de una posición específica
numeros.splice(1, 2);
console.log(numeros);  // Salida: [1, 4, 5]

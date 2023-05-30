function esPalindromo(palabra) {
  // Convertir la palabra a minúsculas y eliminar los espacios en blanco
  palabra = palabra.toLowerCase().replace(/\s/g, "");

  // Obtener la longitud de la palabra
  var longitud = palabra.length;

  // Verificar si la palabra es un palíndromo
  for (var i = 0; i < longitud / 2; i++) {
    if (palabra[i] !== palabra[longitud - 1 - i]) {
      return false;
    }
  }

  return true;
}

// Ejemplos de uso
var palabra1 = "reconocer";
var palabra2 = "hola";

console.log(palabra1 + " es un palíndromo: " + esPalindromo(palabra1));
console.log(palabra2 + " es un palíndromo: " + esPalindromo(palabra2));

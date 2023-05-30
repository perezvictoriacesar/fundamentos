function resolverEcuacionSegundoGrado(a, b, c) {
    // Calcular el discriminante
    var discriminante = b * b - 4 * a * c;
  
    // Verificar si la ecuación tiene soluciones reales
    if (discriminante < 0) {
      return "La ecuación no tiene soluciones reales.";
    } else if (discriminante === 0) {
      var x = -b / (2 * a);
      return "La ecuación tiene una solución real: x = " + x;
    } else {
      var x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
      var x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
      return "La ecuación tiene dos soluciones reales: x1 = " + x1 + ", x2 = " + x2;
    }
  }
  
  // Obtener los valores de a, b y c del usuario (pueden ser ingresados de cualquier manera, como a través de un formulario o la consola)
  var a = parseFloat(prompt("Ingrese el valor de a:"));
  var b = parseFloat(prompt("Ingrese el valor de b:"));
  var c = parseFloat(prompt("Ingrese el valor de c:"));
  
  // Resolver la ecuación y mostrar las soluciones
  var soluciones = resolverEcuacionSegundoGrado(a, b, c);
  console.log(soluciones);
  
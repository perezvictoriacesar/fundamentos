function jugarRocaPapelTijera(jugador1, jugador2) {
    jugador1 = jugador1.toLowerCase();
    jugador2 = jugador2.toLowerCase();
  
    if (jugador1 === jugador2) {
      return "¡Es un empate!";
    } else if (
      (jugador1 === "r" && jugador2 === "t") ||
      (jugador1 === "p" && jugador2 === "r") ||
      (jugador1 === "t" && jugador2 === "p")
    ) {
      return "¡Jugador 1 gana!";
    } else if (
      (jugador2 === "r" && jugador1 === "t") ||
      (jugador2 === "p" && jugador1 === "r") ||
      (jugador2 === "t" && jugador1 === "p")
    ) {
      return "¡Jugador 2 gana!";
    } else {
      return "Entrada inválida. Los jugadores deben elegir 'r', 'p' o 't'.";
    }
  }
  
  // Obtener la elección del jugador 1 y jugador 2 (pueden ser ingresados de cualquier manera, como a través de un formulario o la consola)
  var jugador1 = prompt("Jugador 1, elige 'r' para Roca, 'p' para Papel o 't' para Tijera:");
  var jugador2 = prompt("Jugador 2, elige 'r' para Roca, 'p' para Papel o 't' para Tijera:");
  
  // Jugar el juego y mostrar el resultado
  var resultado = jugarRocaPapelTijera(jugador1, jugador2);
  console.log(resultado);
  
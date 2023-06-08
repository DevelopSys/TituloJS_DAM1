// hacer un array donde se guardan todas las cartas de la baraja francesa
// C P T R 1-10 J Q K

// calcularValor: retorna el valor de una carta
// barajar: genera la barja y mezcla
// repartir carta: saca una carta de la baraja

let baraja = [];

function generarBaraja() {
  let palos = ["C", "D", "P", "T"];
  for (let index = 0; index < palos.length; index++) {
    const palo = palos[index];
    // C - D - P - T
    for (let index = 1; index < 14; index++) {
      if (index == 11) {
        baraja.push(`J${palo}`);
      } else if (index == 12) {
        baraja.push(`Q${palo}`);
      } else if (index == 13) {
        baraja.push(`K${palo}`);
      } else {
        baraja.push(`${index}${palo}`);
      }
    }
  }

  baraja = _.shuffle(baraja);
}

function repartirCarta() {
  let carta = baraja.shift();
  return carta;
}

function obtenerValorCarta(carta) {
  let valor = carta.substring(0, carta.length - 1);
  switch (valor) {
    case "J":
      valor = 11;
      break;
    case "Q":
      valor = 12;
      break;
    case "K":
      valor = 13;
      break;
  }
  return valor;
}

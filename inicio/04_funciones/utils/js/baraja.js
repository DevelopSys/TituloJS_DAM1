// hacer un array donde se guardan todas las cartas de la baraja francesa
// C P T R 1-10 J Q K

// calcularValor: retorna el valor de una carta
// barajar: genera la barja y mezcla
// repartir carta: saca una carta de la baraja

let baraja = [];
let botonIniciar = document.querySelector(".btn-primary");
let botonCarta = document.querySelector(".btn-secondary");
let botonPasar = document.querySelector(".btn-success");
let puntuacionSpanJ1 = document.querySelector("#j1");
let puntuacionSpanJ2 = document.querySelector("#j2");
let tapeteJ1 = document.querySelector("#tapete-jugador");
let tapeteJ2 = document.querySelector("#tapete-maquina");

let puntosJ1 = 0;
let puntosJ2 = 0;

setTimeout(() => {
  let nombre = prompt("Por favor introduce tu nombre");
  document.querySelector("div#tapete-jugador h2").innerHTML =
    nombre + " " + document.querySelector("div#tapete-jugador h2").innerHTML;
}, 1000);

botonIniciar.addEventListener("click", () => {
  if (baraja.length == 0) {
    generarBaraja();
    alert("Juego iniciado!!!");
    botonIniciar.disabled = true;
    botonPasar.disabled = false;
    botonCarta.disabled = false;
  } else {
    alert("Ya hay una baraja en juego");
  }
});

botonCarta.addEventListener("click", () => {
  if (baraja.length > 0) {
    let carta = repartirCarta();
    puntosJ1 += Number(obtenerValorCarta(carta));
    puntuacionSpanJ1.innerHTML = puntosJ1.toString();
    tapeteJ1.innerHTML += `<img src="./utils/images/${carta}.png" style="height: 50%" />`;
  } else {
    alert("lo siento no hay mas cartas");
  }
});

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

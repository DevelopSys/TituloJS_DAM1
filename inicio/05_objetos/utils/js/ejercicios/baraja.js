// hacer un array donde se guardan todas las cartas de la baraja francesa
// C P T R 1-10 J Q K

// calcularValor: retorna el valor de una carta
// barajar: genera la barja y mezcla
// repartir carta: saca una carta de la baraja

let baraja = [];
let nombreJugador = document.querySelector("#nombre-jugador");
let botonIniciar = document.querySelector(".btn-primary");
let botonCarta = document.querySelector(".btn-secondary");
let botonPasar = document.querySelector(".btn-success");
let puntuacionJ1 = document.querySelector("#j1");
let puntuacionJ2 = document.querySelector("#j2");
let tapeteJ1 = document.querySelector("#tapete-jugador");
let tapeteJ2 = document.querySelector("#tapete-maquina");

let puntosJ1 = 0;
let puntosJ2 = 0;

setTimeout(() => {
  let nombre = prompt("Por favor introduce tu nombre");
  nombreJugador.textContent = nombre;
}, 1000);

botonIniciar.addEventListener("click", () => {
  if (baraja.length == 0) {
    generarBaraja();
    //alert("Juego iniciado!!!");
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
    puntosJ1 += obtenerValorCarta(carta);
    puntuacionJ1.textContent = puntosJ1.toString();
    //console.log(puntuacionSpanJ2.innerHTML);
    tapeteJ1.innerHTML += `<img src="${carta.imagen}" style="height: 60%" />`;

    setInterval(() => {
      if (puntosJ1 == 21) {
        alert("Has ganado");
      } else if (puntosJ1 > 21) {
        alert("Has perdido");
      }
    }, 500);
  } else {
    alert("lo siento no hay mas cartas");
  }
});
botonPasar.addEventListener("click", () => {
  // jugar maquina

  do {
    let carta = repartirCarta();
    tapeteJ2.innerHTML += `<img src="${carta.imagen}" style="height: 60%" />`;
    puntosJ2 += carta.valor;
    puntuacionJ2.textContent = puntosJ2.toString();
    setInterval(() => {
      if (puntosJ2 == 21) {
        alert("Has ganado");
      } else if (puntosJ2 > 21) {
        alert("Has perdido");
      }
    }, 500);
  } while (puntosJ2 < 17);

  setTimeout(() => {
    if (puntosJ1 > puntosJ2) {
      alert("Has ganado");
    } else if (puntosJ2 > puntosJ1) {
      alert("Has perdido");
    } else {
      alert("Hay empate");
    }
  }, 1000);
});

// pulso boton pasar

// la maquina juega
// cuando paso y la maquina
/* if (){

    } else {

    } */

function generarBaraja() {
  let palos = ["C", "D", "P", "T"];
  for (let index = 0; index < palos.length; index++) {
    const palo = palos[index];
    // C - D - P - T
    for (let index = 1; index < 14; index++) {
      if (index == 11) {
        baraja.push(
          new Carta(`J${palo}`, `../05_objetos/utils/images/J${palo}.png`, 11)
        );
      } else if (index == 12) {
        baraja.push(
          new Carta(`Q${palo}`, `../05_objetos/utils/images/Q${palo}.png`, 12)
        );
      } else if (index == 13) {
        baraja.push(
          new Carta(`K${palo}`, `../05_objetos/utils/images/K${palo}.png`, 13)
        );
      } else {
        baraja.push(
          new Carta(
            `${index}${palo}`,
            `../05_objetos/utils/images/${index}${palo}.png`,
            index
          )
        );
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
  return carta.valor;
}

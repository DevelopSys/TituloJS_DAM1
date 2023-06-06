// hacer un array donde se guardan todas las cartas de la baraja francesa
// C P T R 1-10 J Q K

let palos = ["C", "D", "P", "T"];
let baraja = [];
// 1-13

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

/* for (let index = 0; index < 100; index++) {
  let aleatorio1 = parseInt(Math.random() * 40);
  let aleatorio2 = parseInt(Math.random() * 40);
  let aux = baraja[aleatorio1];
  baraja[aleatorio1] = baraja[aleatorio2];
  baraja[aleatorio2] = aux;
} */

baraja = _.shuffle(baraja);
console.log(baraja.pop());
console.log(baraja.pop());
console.log(baraja.pop());
console.log(baraja.pop());
console.log(baraja.pop());
console.log(baraja.pop());
console.log(baraja.pop());
console.log(baraja.pop());
console.log(baraja);

//console.log(baraja);
// quiero tener en un array el palo de D
//let diamantes = [];

/*baraja.forEach((e) => {
  if (e.includes("D")) {
    diamantes.push(e)
    //console.log(e);
  }
});*/

/* diamantes = baraja.filter((e) => {
  return e.includes("D");
});

let carta = baraja.find((e) => {
  return e.includes("D");
});

console.log(carta);
console.log(diamantes.length); */

// el array resultate tendrá tantos elementos como el resultado del predicado sea true
// sacar solo las cartas de Diamantes

// barajar la baraja

let numero1 = 10;
let numero2 = "10";
let continuar = false;

// == los datos son iguales
// === los datos y los tipos son iguales
// let resultado = numero1 === numero2;
/* resultado
  ? console.log("Los numeros son igualez")
  : console.log("Los numeros son diferentes"); */
/*if (resultado) {
  console.log("Los numeros son iguales");
} else {
  console.log("Los numeros son diferentes");
} */

/* let letra = "T";
switch (letra) {
  case "A":
    console.log("La letra tiene un valor de A");
    break;

  case "B":
    console.log("La letra tiene un valor de B");
    break;

  case "C" | "E":
    console.log("La letra tiene un valor de C o E");
    break;
  default:
    console.log("La letra no tiene un valor reconocido");
} */

let nombres = ["Nombre 1", "Nombre 2", "Nombre 3", "Nombre 4", "Nombre 5"];
/* for (let index = 0; index < nombres.length; index++) {
  console.log(`${index + 1} ${nombres[index]}`);
} */

// (parametros) => {ejecucion}

/* nombres.forEach((e, i) => {
  // sacar solo los elementos que estan en posiciones pares?
  if (i % 2 == 0) {
    console.log(`${i + 1} ${e}`);
  }
}); */

/* for (const key in nombres) {
  console.log(key);
}

for (const iterator of nombres) {
  console.log(iterator);
}
 */

numero1 = 15;
/* while (numero1 > 0) {
  console.log(numero1);
  numero1--;
} */

do {
  console.log(numero1);
  numero1--;
} while (numero1 > 10);

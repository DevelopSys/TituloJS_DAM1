function primeraFuncion() {
  console.log("Ejemplo de funcion");
}

function funcionSumar(param1, param2) {
  console.log("Se va a realizar la suma de dos parametros");
  return param1 + param2;
}

function funcionMultiplicar(param1, param2 = 1) {
  console.log("Se va a realizar la multiplicación de al menos 2 parametros");
  return param1 * param2;
}

function sumaMultiples(...params) {
  console.log("Esto es una funcion con argumentos multiples");
  let acumulador = 0; //undefined
  params.forEach((e) => {
    acumulador += e;
  });

  console.log(acumulador);
}

function funcionInvisibles(param1) {
  console.log("Esto es una funcion con parametros invisibles");
  console.log(`Parametro pedido ${param1}`);
  console.log(arguments.length);
  console.log(arguments[0]);
}

// param => cuerpo con una linea --> la linea es el return implicito
// (params) => {cuerpo} --> la linea (ultima) que retorne tiene que ser explicita

let funcionArrowSuma = (p1, p2) => {
  return p1 + p2;
};

// primeraFuncion();
// console.log(funcionSumar(5, 9));
// console.log(funcionSumar("Uno", "Dos"));
// console.log(funcionSumar("Uno"));
// console.log(funcionMultiplicar(7, 3));
// sumaMultiples(1, 2, 3, 123);
// funcionInvisibles(1, 2, 123, 123, 1, 231, 23, 123, 123);
// console.log(funcionArrowSuma(5, 9));

let elementos = [];

elementos.forEach((element) => {});

elementos.forEach((element, index) => {});

function operar(p1, p2, p3) {
  p1(p2, p3);
}

operar(
  (op1, op2) => {
    console.log(`La suma es ${op1 + op2}`);
  },
  4,
  6
);
operar(
  (op1, op2) => {
    console.log(`La resta es ${op1 - op2}`);
  },
  4,
  6
);
operar(
  (op1, op2) => {
    console.log(`La multiplicacion es ${op1 * op2}`);
  },
  4,
  6
);
operar(
  (op1, op2) => {
    console.log(`La division es ${op1 / op2}`);
  },
  4,
  6
);

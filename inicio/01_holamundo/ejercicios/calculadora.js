let condicion = true;

do {
  let operando1 = prompt("Por favor introduce operando 1");
  let operando2 = prompt("Por favor introduce operando 2");

  if (
    isNaN(operando1) ||
    isNaN(operando2) ||
    operando1 == null ||
    operando2 == null
  ) {
    // alguno de los dos no es numero
    alert("Alguno de los elementos no es correcto");
  } else {
    alert(
      `Las operaciones entre ${operando1} y ${operando2} son:\nSuma: ${
        Number(operando1) + Number(operando2)
      }\nResta: ${operando1 - operando2}\nMultiplicacion ${
        operando1 * operando2
      }\nDivision: ${operando1 / operando2}\nModulo: ${operando1 % operando2}`
    );

    condicion = confirm("¿Quieres volver a realizar calculos?");
  }
} while (condicion);

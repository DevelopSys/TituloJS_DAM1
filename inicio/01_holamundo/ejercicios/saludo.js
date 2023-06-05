let nombre = prompt("Por favor introduce tu nombre");
let apellido = prompt("Por favor introduce tu apellido");
let edad = prompt("Por favor introduce tu edad");
let ciclo = prompt("Por favor introduce el ciclo donde estás matriculado");
let correcto = confirm(
  `Los datos introducidos son los siguientes\nNombre: ${nombre}\nApellido: ${apellido}\nEdad: ${edad}\nCiclo: ${ciclo}`
);

correcto
  ? alert(
      `Nombre: ${nombre} Apellido: ${apellido} Edad: ${edad} Ciclo: ${ciclo}`
    )
  : alert("No se puede continuar");

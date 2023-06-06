let equipos = ["Barcelona", "Madrid", "Atletico", "Real sociedad"]; // string any

// operaciones sobre arrays
console.log(equipos.length);

// capturar una posicion
console.log(equipos[equipos.length - 1]);
console.log(equipos);

// cambiar el valor de algo
equipos[equipos.length] = "Villarreal";
console.log("Agregado al final");
console.log(equipos);

// operaciones con metodos

// agrega - eliminar elementos al final
console.log(equipos.push("Sevilla", "Girona", "Getafe", "Osasuna"));
console.log("Ejecutado push");
console.log(equipos);

console.log(`El equipo eliminado es el ${equipos.pop()}`);
console.log("Ejecutado pop");
console.log(equipos);

// agregar -eliminar elementos del principio
console.log(equipos.unshift("Elche", "Español", "Valladolid"));
console.log("Agregado unshift");
console.log(equipos);

console.log(`El equipo eliminado del principio es ${equipos.shift()}`);
console.log("Ejecutado shift");
console.log(equipos);

// mostrar la tabla de clasificación

equipos.forEach((element, index) => {
  console.log(`${index + 1} - ${element}`);
});

// 1. Barcelona
// 2. Madrid

// console.log(equipos);

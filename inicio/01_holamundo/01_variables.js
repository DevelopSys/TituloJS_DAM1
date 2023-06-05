// codigo js desde un fichero externo
console.log("codigo desde js externo");

// variables

// mutables --> cambia su valor
// var let
// no mutables --> no cambia su valor

const datos = ["dato1", "dato2", "dato3", "dato4"];
//Object.freeze(dato)
datos.push("dato5");
datos.pop();
console.log(datos);

// const

let nombre = "Borja"; // string;
let edad = 39.0; // number
let pi = 3.141516; // number
let experiencia = false; // boolanel
let dato = null; // null
let cosa; // undefined
let elementos = ["opcion 1", "opcion 2", "opcion 3"]; // Array -> List

/* console.log("Nombre " + nombre);
console.log("Edad " + edad);
console.log("pi " + pi);
console.log("Experiencia " + experiencia); */

// string template
console.log(`Nombre: ${nombre} Edad: ${edad} Experiencia: ${experiencia}`);

// tipos
console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof pi);
console.log(typeof experiencia);
console.log(typeof dato);
console.log(typeof cosa);
console.log(typeof elementos);

// numeros let suma = A+4 NaN -> Not a Number
console.log(isNaN(edad)); // false

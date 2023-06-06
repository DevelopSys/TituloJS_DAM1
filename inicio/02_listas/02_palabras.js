let palabra = "EjemploE";
let frase =
  "Esto es un ejemplo de una frase para poder analizarla con JS Vamos a contar unas cuantas cosas. Para ello vamos a utilizar los métodos que hemos vistao de string";

console.log(
  "Letras " + frase.replaceAll(" ", "").replaceAll(".", "").split("").length
);

console.log("Palabras " + frase.replaceAll(".", "").split(" ").length);
console.log("Oraciones " + Number(frase.split(".").length + 1));

let espacios = 0;
for (let index = 0; index < frase.length; index++) {
  if (frase.charAt(index) == " ") {
    espacios++;
  }
}
console.log(`El numero de espaciones es de: ${espacios}`);

/* frase.split(" ").forEach((e) => {
  console.log(e);
}); */

// contar cuantas letras tiene
// contar cuantas palabras tiene
// contar cuantas oraciones tiene  (.)
// contar cuantos espacios tiene
// contar cuantas vocales tiene
// contar cuantas consonantes tiene

//palabra = palabra.replace("E", "A");
//console.log(palabra.charAt(0));
/* palabra.split("").forEach((e) => {
  console.log(e);
}); */

console.log(palabra.substring(0, 4));
console.log(palabra.substring(4, palabra.length));

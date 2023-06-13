let lista = document.querySelector("#lista-usuarios");
let boton = document.querySelector("#boton-busqueda");
let input = document.querySelector("#input-numero");
let select = document.querySelector("#select-genero");

boton.addEventListener("click", (e) => {
  // sacar el numero del input
  let numero = input.value;
  let genero = select.value;
  console.log(`${numero} ${genero}`);
  // sacar el genero del select
  fetch(`https://randomuser.me/api/?gender=${genero}&results=${numero}`)
    .then((e) => e.json())
    .then((e1) => {
      e1.results.forEach((element) => {
        lista.innerHTML += `<li>${element.name.title} ${element.name.first} ${element.name.last}</li>`;
      });
    })
    .catch((err) => {
      console.log(err);
    });

  // https://randomuser.me/api/?gender=all&results=100
});

/* fetch("https://randomuser.me/api/?results=50")
  .then((e) => e.json())
  .then((e1) => {
    e1.results.forEach((element) => {
      lista.innerHTML += `<li>${element.name.title} ${element.name.first} ${element.name.last}</li>`;
    });
  })
  .catch((err) => {
    console.log(err);
  }); */

// incoporar un input para indicar el número de elementos a mostrar
// incoporar un select para indicar el genero a mostrar (masculino,
// femenino, todos)

// Crear una ul y meter todos los usuarios (nombre - apellidos)
// dentro de la misma

let lista = document.querySelector("#lista-usuarios");

fetch("https://randomuser.me/api/?results=50")
  .then((e) => e.json())
  .then((e1) => {
    e1.results.forEach((element) => {
      lista.innerHTML += `<li>${element.name.title} ${element.name.first} ${element.name.last}</li>`;
    });
  })
  .catch((err) => {
    console.log(err);
  });

// incoporar un input para indicar el número de elementos a mostrar
// incoporar un select para indicar el genero a mostrar (masculino, femenino, todas)

// Crear una ul y meter todos los usuarios (nombre - apellidos)
// dentro de la misma

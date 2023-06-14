let lista = document.querySelector("#lista-usuarios");
let boton = document.querySelector("#boton-busqueda");
let input = document.querySelector("#input-numero");
let select = document.querySelector("#select-genero");
let fila = document.querySelector("#fila");
let botonNavegar = document.querySelector("#boton-navegar");

boton.addEventListener("click", (e) => {
  // sacar el numero del input
  let numero = input.value;
  let genero = select.value;
  console.log(`${numero} ${genero}`);
  // sacar el genero del select
  fetch(`https://randomuser.me/api/?gender=${genero}&results=${numero}`)
    .then((e) => e.json())
    .then((e1) => {
      /*     lista.childNodes.forEach((e) => {
        lista.removeChild(e);
      }); */
      /* lista.innerHTML = "";
      e1.results.forEach((element) => {
        lista.innerHTML += `<li>${element.name.title} ${element.name.first} ${element.name.last}</li>`;
      }); */

      fila.innerHTML = "";
      e1.results.forEach((element) => {
        console.log(e1);
        fila.innerHTML += `<div class="col">
        <div class="card" style="width: 18rem">
          <img src="${element.picture.large}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${element.name.title} ${element.name.first} ${element.name.last}</h5>
            <p class="card-text">
            ${element.location.city}
            </p>
            <a href="#" class="btn btn-primary">Navegar</a>
          </div>
        </div>
      </div>`;
      });
    })
    .catch((err) => {
      console.log(err);
    });

  // https://randomuser.me/api/?gender=all&results=100
});

botonNavegar.addEventListener("click", (e) => {
  //console.log(window.location);
  localStorage.setItem("uuid", "4c67c2b3-f7f8-42cb-8350-9e0ac2bf4457");
  window.location.href = "./detail.html";
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

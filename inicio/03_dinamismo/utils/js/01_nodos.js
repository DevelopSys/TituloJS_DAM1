// ANTIGUOS

// busqueda por id --> Element
// let nodoBoton = document.getElementById("boton-pulsar");
// busqueda por class --> Collection
// nodoBoton = document.getElementsByClassName("btn");
// busqueda por tag
// nodoBoton = document.getElementsByTagName("button");
// console.log(nodoBoton);

// NUEVOS
// si no pongo nada tag
// si pongo .  buscas por clase
// si pongo #  buscas por id

/* let nodoBoton = document.querySelector("button");
nodoBoton = document.querySelector(".btn");
nodoBoton = document.querySelector("#boton-borrar");
console.log(nodoBoton); */

/*let nodoBotones = document.querySelectorAll("button");
console.log(nodoBotones);*/

let inputNodo = document.querySelector("input");
let botonAnadir = document.querySelector("#boton-anadir");
let botonBorrar = document.querySelector("#boton-borrar");
let lista1 = document.querySelector("div.lista-uno ul");
let lista2 = document.querySelector("div.lista-dos ul");
let select = document.querySelector("select");
let li = document.querySelectorAll("li");
let nodoSeleccionado;
li.forEach((e) => {
  e.addEventListener("click", () => {
    // se quitan todos los active
    li.forEach((e1) => {
      e1.classList.remove("active");
    });
    // se pone active el del click

    nodoSeleccionado = e;
    e.classList.add("active");
  });
});
botonAnadir.addEventListener("click", (e) => {
  // 1 creo un lista 2
  let nodoLI = document.createElement("li");
  nodoLI.className = "list-group-item li-hijo";
  nodoLI.textContent = inputNodo.value;
  inputNodo.value = "";
  // 2 lo añado a la lista

  //console.log(select.value);
  if (Number(select.value) == 1) {
    lista1.innerHTML += `<li class='list-group-item li-hijo'>${inputNodo.value}</li>`;
  } else if (Number(select.value) == 2) {
    lista2.innerHTML += `<li class='list-group-item li-hijo'>${inputNodo.value}</li>`;
  } else {
    alert("Por favor selecciona una lista");
  }
  // lista.innerHTML += `<li class='list-group-item li-hijo'>${inputNodo.value}</li>`;
});
botonBorrar.addEventListener("click", (e) => {
  // borrar el seleccionado

  document.querySelector(".active").remove();
  nodoSeleccionado.remove();
  /* let nodoBorrar = document.querySelector("#nodo-borrar");
  nodoBorrar.remove();
  lista1.removeChild(nodoBorrar); */
});

//console.log(botonAnadir);
//let nodos = document.querySelectorAll("div.lista-dos ul li");
//console.log(nodos);

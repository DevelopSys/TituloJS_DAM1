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
let lista = document.querySelector("div.lista-dos ul");

botonAnadir.addEventListener("click", (e) => {
  /* // 1 creo un lista 2
  let nodoLI = document.createElement("li");
  nodoLI.className = "list-group-item li-hijo";
  nodoLI.textContent = inputNodo.value;
  inputNodo.value = "";
  // 2 lo añado a la lista
  lista.append(nodoLI); */

  lista.innerHTML += `<li class='list-group-item li-hijo'>${inputNodo.value}</li>`;
});

//console.log(botonAnadir);

let nodos = document.querySelectorAll("div.lista-dos ul li");
console.log(nodos);

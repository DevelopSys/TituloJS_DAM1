let dato = localStorage.getItem("uuid");
console.log(dato);

let array = [];

fetch("https://randomuser.me/api/?results=50")
  .then((e) => e.json())
  .then((e1) => {
    /* e1.results.forEach((element) => {
      if (element.name.title == "Mr") {
        console.log(element.name.first);
      }
    }); */

    let usuario = e1.results.find((e2) => {
      return e2.name.title == "Mr";
    });
    console.log(usuario);
  });

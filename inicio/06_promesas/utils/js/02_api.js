fetch("https://randomuser.me/api/?results=50")
  .then((e) => {
    // pasar el resultado a JSON --> tarda no se cuanto
    console.log("Resultado primera promesa");
    console.log(e);
    return e.json();
  })
  .then((e1) => {
    console.log("Resultado segunda promesa");
    console.log(e1);
  })
  .catch((err) => {
    console.log(err);
  });

// obtener por consola el nombre y apellidos de todos los usuarios del
// JSON

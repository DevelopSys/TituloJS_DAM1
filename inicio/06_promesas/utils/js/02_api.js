fetch("https://randomuser.me/api/?results=50")
  .then((e) => e.json())
  .then((e1) => {
    e1.results.forEach((element) => {
      console.log(
        `${element.name.title} ${element.name.first} ${element.name.last}`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });

// Crear una ul y meter todos los usuarios (nombre - apellidos)
// dentro de la misma

let promesa = new Promise((res, rej) => {
  let aleatorio = parseInt(Math.random() * 11);
  console.log(aleatorio);
  // 7
  setTimeout(() => {
    if (aleatorio >= 5) {
      res(aleatorio);
    } else {
      rej("Numero insuficiente");
    }
  }, 5000);
});

promesa
  .then((e) => e * 4)
  .then((e1) => {
    console.log(e1);
  })
  .catch((err) => {});

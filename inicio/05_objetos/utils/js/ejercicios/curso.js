let dam1 = [
  new Asignatura(
    "Programacion",
    "PRO",
    7,
    ["C1", "C2", "C3", "C4"],
    1,
    "Borja Martin"
  ),
  new Asignatura("Entornos", "ED", 3, ["C1", "C2"], 1, "Jesus Niño"),
  new Asignatura(
    "Base de datos",
    "BD",
    6,
    ["C1", "C2", "C4"],
    1,
    "Luis Hermida"
  ),
  new Asignatura(
    "Formacion Laboral",
    "FOL",
    3,
    ["C1", "C2"],
    1,
    "Ivan Redruello"
  ),
  new Asignatura("Sistemas", "SI", 6, ["C1", "C2", "C4"], 1, "Sandra Leon"),
  new Asignatura("Lenguaje de marcas", "LM", 5, ["C1", "C2"], 1, "Sandra Leon"),
];
let dam2 = [
  {
    nombre: "Programacion Multimedia",
    siglas: "PMDM",
    horas: 4,
    conocimientos: ["C1", "C2", "C4", "C4"],
    curso: 2,
    profesor: "Borja Martin",
    mostrarDatos: function () {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Siglas: ${this.nombre}`);
      console.log(`Horas: ${this.nombre}`);
      console.log(`Profesor: ${this.nombre}`);
      console.log(`Curso: ${this.nombre}`);
      console.log(`Los conocimientos son`);
      this.conocimientos.forEach((e) => {
        console.log(`\t ${e}`);
      });
    },
  },
  {
    nombre: "Desarrollo de Interfaces",
    siglas: "DI",
    horas: 6,
    conocimientos: ["C1", "C2", "C4", "C4", "C4"],
    curso: 2,
    profesor: "Borja Martin",
  },
  {
    nombre: "Programacion Servicios y Procesos",
    siglas: "PSP",
    horas: 5,
    conocimientos: ["C1", "C2", "C4", "C4", "C4", "C4"],
    curso: 2,
    profesor: "Jesus Niño",
  },
  {
    nombre: "Acceso a Datos",
    siglas: "AD",
    horas: 6,
    conocimientos: ["C1", "C2"],
    curso: 2,
    profesor: "Luis Miguel Serrano",
  },
  {
    nombre: "Sistemas de Gestión Empresarial",
    siglas: "SGE",
    horas: 5,
    conocimientos: ["C1", "C2", "C4"],
    curso: 2,
    profesor: "Numilen Joost",
  },
  {
    nombre: "Ingles",
    siglas: "ING",
    horas: 2,
    conocimientos: ["C1", "C2", "C4", "C4"],
    curso: 2,
    profesor: "Rocio Pizarro",
  },
  {
    nombre: "Empresa e Iniciativa Emprendedora",
    siglas: "EIE",
    horas: 3,
    conocimientos: ["C1", "C2", "C4", "C4", "C4", "C4", "C4", "C4"],
    curso: 2,
    profesor: "Marta Jimenez",
  },
  {
    nombre: "Formacion en centros de trabajo",
    siglas: "FCTs",
    horas: 370,
    conocimientos: ["C1", "C2", "C4", "C4", "C4", "C4", "C4", "C4"],
    curso: 2,
    profesor: "",
  },
  {
    nombre: "Modulo proyecto",
    siglas: "PRO",
    horas: 30,
    conocimientos: [
      "C1",
      "C2",
      "C4",
      "C4",
      "C4",
      "C4",
      "C4",
      "C4",
      "C4",
      "C4",
      "C4",
    ],
    curso: 2,
    profesor: "",
  },
];

let dam = [dam2, dam1];

// mostrar todas las asigntaruas de 1 que tengan
// al menos 4 conocimientos

dam.forEach((element) => {
  element.forEach((element1) => {
    if (element1.curso == 2 && element1.conocimientos.length >= 4) {
      console.log(element1.mostrarDatos());
    }
  });
});

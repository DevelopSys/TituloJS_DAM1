class Asignatura {
  nombre;
  siglas;
  horas;
  conocimientos;
  curso;
  profesor;

  constructor(nombre, siglas, horas, conociemntos, curso, profesor) {
    this.nombre = nombre;
    this.siglas = siglas;
    this.horas = horas;
    this.conocimientos = conociemntos;
    this.curso = curso;
    this.profesor = profesor;
  }

  mostrarDatos() {
    console.log("Los datos de la asignatura son: ");
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Siglas: ${this.siglas}`);
    console.log(`Horas: ${this.horas}`);
    console.log(`Curso: ${this.curso}`);
    console.log(`Profesor: ${this.profesor}`);
    console.log("Los conocimientos de la asignatura son ");
    this.conocimientos.forEach((element) => {
      console.log(`\t${element}`);
    });
  }
}

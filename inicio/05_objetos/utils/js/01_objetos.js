class Persona {
  // variables
  nombre;
  apellido;
  telefono;
  correo;
  constructor(nom, ape, tel, corr) {
    this.nombre = nom;
    this.apellido = ape;
    this.telefono = tel;
    this.correo = corr;
  }
  mostrarDatos() {
    console.log(`Los datos de la persona son:`);
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Apellido: ${this.apellido}`);
    console.log(`Telefono: ${this.telefono}`);
    console.log(`Correo: ${this.correo}`);
  }
  set setNombre(p) {
    this.nombre = p;
  }
  get getNombre() {
    return this.nombre;
  }
}

persona = new Persona("Borja", "Martin", 1234, "correo@gmail.com");

let objeto = {
  nombre: "Borja",
  apellido: "Martin",
  correo: "bmartin@gmail.com",
};

console.log(objeto["nombre"]);

// String nombre = objeto.getString("nombre")

/* persona.setNombre = "asdasd";
console.log(persona.getNombre); */
//persona.mostrarDatos();

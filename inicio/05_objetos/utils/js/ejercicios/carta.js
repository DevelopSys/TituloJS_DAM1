class Carta {
  valor;
  imagen;
  representacion;

  constructor(repre, img, val) {
    this.imagen = img;
    this.valor = val;
    this.representacion = repre;
  }

  get getValor() {
    return this.valor;
  }

  get getImagen() {
    return this.imagen;
  }

  get getRepresentacion() {
    return this.representacion;
  }
}

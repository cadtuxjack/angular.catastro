class Libro {
    
    constructor(autor,titulo) {
    this.autor = autor
    this.titulo = titulo
} 
}

class LibroTecnico extends Libro {
    constructor(autor,titulo,tema) {
    super(autor,titulo)
    this.tema = tema
}
mostrar () { //Se incorpora su propio método
    console.log(this)
}

}
const oLibro = new LibroTecnico("Pepito", "Angular Fácil", "Programación")
oLibro.editorial="Anaya";
console.log(oLibro)

oLibro.mostrar()
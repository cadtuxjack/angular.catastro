interface Edicion {
    editorial: string;
    fecha: number;
}

class Libro implements Edicion {
    public id: number | string; //Otra propiedad acepta los dos tipos
    public editorial; //Inferencia de tipo: no se declara
    public fecha;
    public autor: string;
    protected titulo: string;
    constructor(autor,titulo) {
    this.autor = autor;
    this.titulo = titulo;
} 
}

class LibroTecnico extends Libro {
    public tema: string;
    constructor(autor,titulo,tema) {
    super(autor,titulo);
    this.tema = tema;
}
mostrar () { //Se incorpora su propio método
    console.log(this)
}

}
const oLibro = new LibroTecnico("Pepito", "Angular Fácil", "Programación")
let oLibro2: Libro = 
{
    id: '',
    editorial: '', 
    fecha: 0,
    autor: '', 
    titulo:'' 
}

oLibro.mostrar()
//TypeScript las variables se declan y tienen ámbito fuera de los métodos, se pueden crear interfaces
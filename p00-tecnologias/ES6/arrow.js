let oPrueba = {
    precio: 12,
    iva: 1.16,
}; // los objetos se declaran y son dinámicos

oPrueba.calculaIvaAsync = function () {
setTimeout ( () => {
let precioFinal = this.precio * this.iva
console.log(`
Usando una función clásica:

El precio final es ${precioFinal}
`);
}, 1000)
    return precioFinal
}

oPrueba.calculaIvaAsync()
console.log("Linea Final")

//Promesas: evitar el infierno de las callback
/*const aDatos = [{precio:20}, {precio: 23}, {precio: 29}]*/
/*variables con ámbito*/
/*if (1) {
    /* const x = 12 */
    //let x = 12 /*existe dentro y fuera del if, si se usa let no existe fuera*/
    //x++
    /*aDatos = 34 siempre será un array, de lo contrario cambiaría el puntero*/
    /*aDatos.push({precio: 100}) al definir como constante un objeto, definimos constante el puntero*/
    /*console.log(aDatos);*/
    //aDatos.forEach(function(elem){elem.precio++}) /*Función callback*/
    //console.log(aDatos)
//}


const aDatos = [{precio:20}, {precio: 23}, {precio: 29}]
/*variables con ámbito*/
if (1) {
    /* const x = 12 */
    let x = 12 /*existe dentro y fuera del if, si se usa let no existe fuera*/
    x++
    /*aDatos = 34 siempre será un array, de lo contrario cambiaría el puntero*/
    /*aDatos.push({precio: 100}) al definir como constante un objeto, definimos constante el puntero*/
    /*console.log(aDatos);*/
    aDatos.forEach( elem => 
        {elem.precio++
            console.log(`
            El precio es ${ elem.precio} €
            `) //dentro del template screen puedo hacer interpolación de variables, mejor usar comillas francesas, respetan espacio y tabulado
        })/*Array function*/
    console.log(aDatos)
}
function hacerAlgoPromesa () {
    return new Promise ( function (resolve, reject) {
        console.log ('hacer algo que ocupa un tiempo...');
        setTimeout (
            () => {
                resolve()
            } ,1000);        
           
    })

}
hacerAlgoPromesa()
.then( //Mediante el then se muestra luego
    () => {console.log("Ultima linea")})
    .catch (() => {console.log("Error")})



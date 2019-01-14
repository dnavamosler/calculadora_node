const fs = require('fs')

let multiplicar = (base, limite) => {
    let tabla = ''

        for (let i = 0 ; i <= limite ; i++){
            tabla += `* ${base} * ${i} = ${base * i} \n`
        }      
    
    return tabla    
}

let listarTabla = (base, limite) =>{

    console.log(multiplicar(base, limite))
                  
}

let crearArchivo = async (base, limite) => {

    let nombreArchivo = `./tablas/tabla_${base}_hasta_${limite}.txt`
           await fs.writeFile(nombreArchivo,multiplicar(base,limite),(err) => {
                if(err) throw Error
            })       
            return nombreArchivo
}

module.exports = {
    listarTabla,
    crearArchivo
}
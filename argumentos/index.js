const argv = require('./yargs').argv
const colors = require('colors')
const { listarTabla, crearArchivo } = require('./multiplicar')


if(isNaN(argv.base) || isNaN(argv.limit)){
    console.log(`ha ocurrido un error, los argumentos deben ser numericos `)
}else{
    switch(argv._[0]){
        case 'listar':
            listarTabla(argv.base, argv.limit)
        break
    
        case 'crear':
            crearArchivo(argv.base, argv.limit)
                .then(data => console.log(`Se creo el archivo:`, data.green) )
                .catch((err) => console.log(err))
        break
    
        default:
            console.log(`no se encontro una accion para realizar`)
    }
}




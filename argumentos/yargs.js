const opts = {
    base:{
        demand :true,
        alias : 'b'
    },
    limit:{
        default : 10,
        alias : "l"
    }
}

const argv = require ('yargs')
                .command('listar', 'muestra la tabla de multiplicar en consola', opts)
                .command('crear','crea un archivo con la tabla de multiplicar',opts)
                .argv

module.exports = {
    argv
}
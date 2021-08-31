const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        describe: "Base a multiplicar",
        demandOption: true
    })
    .option('l',{
        alias: 'listar',
        describe: "Lista en consola",
        type: 'boolean',
        default: false
    })
    .option('h',{
        alias: 'hasta',
        describe: "Limita el largo de la tabla",
        type: 'number',
        default: 10
    })
    .check( (argv, options) => {
        if(isNaN(argv.base) || isNaN(argv.hasta)) throw 'La base y el limitador tienen que ser un numero'
        if(typeof argv.listar != 'boolean') throw 'Listar tiene que ser booleano'
        return true
    } )
    .argv;

module.exports = argv
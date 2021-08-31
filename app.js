
const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')
require('colors')


console.clear()
const {base, listar, hasta} = argv
crearArchivo({base, listar, hasta})
    .then( nombreArchivo=> console.log(`${nombreArchivo} creada`.underline))
    .catch(err => console.log(err))


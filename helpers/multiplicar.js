const fs = require('fs')
require('colors')

const crearArchivo = async ({base, listar, hasta}) => {
    try {
        let salida = ''
        let consola = ''
        for(let i = 1; i<=hasta; i++){
            const result = `${(base*i)}`
            salida += `${base} x ${i} = ${result}\n`
            consola += `${base} ${'x'.magenta} ${i} ${'='.magenta} ${result.brightCyan}\n`.italic
        }
    
        if(listar) {
            console.log('======================'.yellow);
            console.log('tabla del'.magenta, base.toString().green)
            console.log('======================'.yellow);
            console.log(consola)
        }
        fs.writeFileSync(`./tablas/tabla-${base}.txt`, salida)
        return `tabla-${base}.txt`
    } catch (error) {
        throw error
    }   
}

module.exports = {crearArchivo}


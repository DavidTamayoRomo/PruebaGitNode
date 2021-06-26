const fs = require('fs');
const crearArchivo = async (base = 5, listar = false) => {
    try {
        let salida = '';

        for (let i = 0; i < 10; i++) {
            salida = salida + `${base} * ${i} = ${base * i}\n`;
        }
        if (listar) {
            console.log(salida);
        }
        fs.writeFileSync(`tabla${base}.txt`, salida);
        return `Tabla${base} creada`;
    } catch (error) {

        throw error;
    }


}

module.exports = { crearArchivo };

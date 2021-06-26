const argv = require('yargs')
                    .option('b',{
                        alias:'base',
                        type:'number'
                    })
                    .option('l',{
                        alias:'listar',
                        type:'boolean',
                        default:'false'
                    })
                    .check((argv, options)=>{
                        if (isNaN(argv.b)) {
                            throw 'La base debe ser un numero';
                        }
                        return true;
                    })
                    .argv;


module.exports = argv; 
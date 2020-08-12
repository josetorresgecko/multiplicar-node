const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
var colors = require('colors/safe');
let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(mensaje => {
                console.log('=========================='.green);
                console.log(`tabla del ${argv.base}`.green);
                console.log('=========================='.green);
                console.log(mensaje)
            })
            .catch(err => { console.log(err) })
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => { console.log(`Archivo Creado: `, colors.green(archivo)) })
            .catch(err => { console.log(err) });
        break;
    default:
        console.log('comando no reconocido');
        break;
};
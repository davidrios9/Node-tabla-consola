const fs = require ('fs');
const colors = require('colors');

const crearArchivo = async ( base = 5, listar = false, hasta = 10) => {

    try {        

        let consola = '';
        let salida = '';      


        for ( let i = 1; i <= hasta; i++ ){
            salida  += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ base * i}\n`;           
        }
        
        
        
        // fs.writeFile(`tabla-${num}.txt`, salida, (err) => {
        //     if( err ) throw err;
        //     console.log(`Tabla del ${num} creada`);    
        // })

        if(listar == true){
            console.log('====================='.green);
            console.log('    Tabla del: '.green, colors.blue( base ) );
            console.log('====================='.green);
            console.log(consola);
        }
        
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);         
        
        return `tabla-${base}.txt creada`;

    } catch(err){
        throw err;
    }
}

module.exports = {
    crearArchivo
}
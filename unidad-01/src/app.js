import express from "express";
import { Command } from "commander";
import config from './config/config.js'

import { listNumbers } from './utils/listNumbers.js'
import { operacionCompleja } from "./utils/operacionCompleja.js";

// TRabajando con argumentos de CLI
/*
    console.log( process.pid);
    console.log('Versión de Node', process.version);
    console.log('Uso de memoria', process.memoryUsage());
    const argumentos =  process.argv;
    console.log('Argumentos:', argumentos)
*/


const program = new Command();

program.option("--mode <mode>", "Modo de ejecución: development | production", "development")
program.parse();

console.log( {config});

const PORT = config.port;

// Escuchamos el evento del proceso
process.on('exit', (code) => {
    console.log('Salio del proceso !');
    if( code === -4){
        console.error("Proceso finalizado por argumentación inválida en una función");
    }
})

listNumbers(1, 3, 9);



const app = express();

app.get('/', (req, res) => {
    res.json({ messege:'Ok', mode: 'modo'})
})


app.get('/operacion', (req, res) => {
    const resultado = operacionCompleja();
    res.send('El resultado es: ', resultado);
})
app.listen( PORT, () => {
    console.log(`Servidor en el puerto ${PORT}`);
});



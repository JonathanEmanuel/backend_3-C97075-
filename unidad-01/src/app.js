import express from "express";
import { Command } from "commander";
import { fork } from 'child_process';
import config from './config/config.js'

import { listNumbers } from './utils/listNumbers.js'
import { operacionCompleja } from "./utils/operacionCompleja.js";


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

// Operación bloqueante
app.get('/operacion', (req, res) => {
    const resultado = operacionCompleja();
    res.send('El resultado es: ' + resultado);
})
// Operación no Bloqueante
app.get('/nobloq', (req, res) => {
    const child = fork('./utils/operacionCompleja.js');
    child.send('inicia el proceso');
    child.on('message', resultado => {
        res.send('El resultado es: ' + resultado);
    })
})

app.listen( PORT, () => {
    console.log(`Servidor en el puerto ${PORT}`);
});



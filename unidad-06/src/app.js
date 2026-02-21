import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import { env } from './config/env.js';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';

const app = express();


app.use(express.json());
app.use(cookieParser());
const startServer = async()=>{
    try {
        await mongoose.connect(env.URI_DB);
        console.log('Connectado a la DB');


        app.listen(env.PORT,()=>console.log(`Servidor en el puerto ${env.PORT}`))
    } catch (error) {
        console.error('Error al conectar a la DB',error);
        process.exit(1);
    }

}




app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);


startServer();
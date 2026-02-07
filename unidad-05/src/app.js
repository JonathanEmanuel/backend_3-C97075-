import express from 'express';
import cors from 'cors';
import { env } from './config/env.js'
import authRouter from './routes/auth.routes.js'
import userRouter from './routes/users.routes.js';
import { errorMiddleware } from './middlewares/error.middleware.js';

import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger.js'


const app = express();
app.use( express.json());
app.use( cors());

app.use('/docs', swaggerUi.serve, swaggerUi.setup( swaggerSpec));

app.get('/health', (req, res) => res.json({ ok: true }));

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use( errorMiddleware);

app.listen( env.PORT, () => {
    console.log(`Servidor en el puerto ${ env.PORT }`);
});



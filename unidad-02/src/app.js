import express from 'express';

import { loadEnv } from './config/env.js';
import { loggerMiddleware, logger } from './config/logger.js';
import routes from './routes/index.js';
import { errorMiddleware } from './errors/error.middleware.js';

loadEnv();

const app = express();

app.use(express.json());
app.use(loggerMiddleware);

app.get('/', (req, res) => {
    res.json({ messege:'Ok', mode: 'dev'})
})


// Routes
app.use(routes);

// Error handling (siempre al final)
app.use(errorMiddleware);

const PORT = Number(process.env.PORT ?? 8080);

app.listen(PORT, () => {
  logger.info(`Servidor en el puerto ${PORT} (NODE_ENV=${process.env.NODE_ENV ?? 'development'})`);
});

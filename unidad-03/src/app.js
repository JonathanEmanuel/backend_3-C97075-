import express from 'express';
import chalk from 'chalk';

const PORT = 5000;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ messege:'Ok', mode: 'dev'})
})


console.log( chalk.bgBlue( 'Unidad III - '));


app.listen(PORT, () => {
  console.info(`Servidor en el puerto ${PORT} `);
});

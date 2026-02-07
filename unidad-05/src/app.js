import express from 'express';
import cors from 'cors';


const app = express();
const PORT = 3000;

app.get('/health', (req, res) => res.json({ ok: true }));


app.listen( PORT, () => {
    console.log(`Servidor en el puerto ${PORT}`);
});



import { Router } from 'express';
import { bigString } from '../utils/bigString.js';

const router = Router();

// GET /test/bigstring
router.get('/bigstring', (req, res) => {
  // Respuesta grande para medir transferencia con/sin compresión
  res.type('text/plain').send(bigString());
});

export default router;

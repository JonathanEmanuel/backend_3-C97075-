import { Router } from 'express';
import usersRouter from './users.routes.js';
import testRouter from './test.routes.js';

const router = Router();

router.get('/health', (req, res) => {
  res.json({ status: 'ok', ts: new Date().toISOString() });
});

router.use('/api/users', usersRouter);
router.use('/test', testRouter);

export default router;

import { Router } from 'express';
import { generateUsers } from '../utils/generateUsers.js';

const router = Router();


// GET /api/users?count=100
router.get('/', (req, res, next) => {
  try {
    const count = Number(req.query.count ?? 10);
    const users = generateUsers(count);
    res.json({ count: users.length, users });
  } catch (err) {
    next(err);
  }
});

export default router;

import { query, validationResult } from 'express-validator'
import { Router } from 'express'
import { requireAuth, requireRole } from '../middlewares/auth.middleware.js';

const router = Router();
// Simulamos la DB
const db = {
   users:  [
        { _id:1, email: 'sofia@coder.edu.ar', role: 'admin '},
        { _id:2, email: 'carlos@coder.edu.ar', role: 'user '}
    ]
}

router.get('/', requireAuth, requireRole('admin'), ( req, res) => {
    res.json( {status: 'success', data: db.users })
})

router.get('/search', 
    requireAuth,
    query('q').isString().trim().isLength( {min:3, max: 40}),
    (req, res) => {
    
    const errors = validationResult( req)
    if( !errors.isEmpty()){
        return res.status(400).json({ status:'error', errors: errors.array() })
    }
    
    
    const q = req.query.q; // Falta validar
    const result = db.users.filter( user =>  user.email.includes( q));

    res.json({ status:' success', data: result})
})



export default router;

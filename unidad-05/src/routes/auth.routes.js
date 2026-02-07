import { Router } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';

import { env } from '../config/env.js'


const router = Router();

// Simulamos la base de datos
const users = [
    { _id: 1, email: 'juan@coder.edu.ar', passwordHash: bcrypt.hashSync('juan123!', 10), role: 'admin'},
    { _id: 2, email: 'lucas@coder.edu.ar', passwordHash: bcrypt.hashSync('123abc456!', 10), role: 'user'},
]

router.post('/login',
    body('email').isEmail(),
    body('password').isString().isLength( {min: 6}),

    (req, res, next) => {
    
        const errors = validationResult( req );
        if( !errors.isEmpty()){
            return res.status(400).json({ status:'error', errors: errors.array() })
        }

        const { email, password} = req.body;
        const user = users.find(  u => u.email === email );
        if(!user){
            return res.status(401).json({ status:'error', message: 'Credenciales Invalidad'})
        }

        const okPass = bcrypt.compareSync(password, user.passwordHash );

        if(!okPass){
            return res.status(401).json({ status:'error', message: 'Credenciales Invalidad'})
        }
        
        const token = jwt.sign( { _id: user.id, role: user.role}, env.JWT_SECRET, { expiresIn: '10m'});

        res.json({ status:'ok', token})

    try {
        
    } catch (error) {
        next( error );
    }
})


export default router

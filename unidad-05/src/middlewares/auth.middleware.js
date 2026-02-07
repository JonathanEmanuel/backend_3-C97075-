import jwt from'jsonwebtoken';
import { env } from '../config/env.js';

export const requireAuth = ( req, res, next) => {
    const auth = req.headers.authorization;
    
    if(!auth?.startsWith('Bearer') ){
        return res.status(403).json({
                status: 'error',
                message: 'Se requiere el Token'
        })
    }

    const token = auth.slice('Bearer '.length);
    try {
        const payload = jwt.verify( token, env.JWT_SECRET);
        req.user = payload;
        next()
    } catch (error) {
        
    }
}

export const requireRole = ( role ) => {
    return ( req, res, next) => {
        if( req.user?.role != role) {
            return res.status(403).json({
                status: 'error',
                message: 'Acceso Prohibido'
            })
        }
        next();
    };
}
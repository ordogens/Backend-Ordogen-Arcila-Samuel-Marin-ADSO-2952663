import { Request, Response, NextFunction } from 'express';
import verifyToken from './verifyToken';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) : void => {
    const token = req.headers.authorization?.split(' ')[1];
    if(!token) res.status(401).json({ message: 'acceso denegado'});
    try{
        let verificar = verifyToken(req, res,);
        if(req.body){
            next()
        }
    }catch(err){
        res.status(400).json({ message: 'token invalido' });
    }
}; 
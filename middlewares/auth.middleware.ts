import { Request, Response, NextFunction } from 'express';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // Lógica de autenticación aquí
    next();
}; 
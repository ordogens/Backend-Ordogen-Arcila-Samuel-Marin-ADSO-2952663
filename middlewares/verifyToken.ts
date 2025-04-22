// import jwt from 'jwt-simple'
// import { Request, Response, NextFunction } from 'express'

// interface TokenPayload {
//   data: { id: number }
//   iat: number
//   exp: number
// }

// const verifyToken = (req: Request, res: Response, next: NextFunction) => {
//   const authHeader = req.get('Authorization') // ✅ Nombre correcto del header

//   if (!authHeader) {
//     return res.status(401).json({ error: 'No se proporcionó el token' })
//   }

//   const token = authHeader.split(' ')[1]

//   if (!token) {
//     return res.status(401).json({ error: 'Token no autorizado' })
//   }

//   try {
//     const secret = process.env.DIRECTOR_PASSWORD
//     if (!secret) {
//       throw new Error('Falta la clave secreta en variables de entorno')
//     }

//     const decoded = jwt.decode(token, secret) as TokenPayload

//     // Verificación de expiración
//     const currentTime = Math.floor(Date.now() / 1000)
//     if (decoded.exp < currentTime) {
//       return res.status(401).json({ error: 'Token expirado' })
//     }

//     // Puedes guardar los datos decodificados en req para usarlos después
//     req.body.user = decoded.data

//     next()
//   } catch (err) {
//     return res.status(401).json({ error: 'Token inválido' })
//   }
// }

// export default verifyToken

import jwt from 'jwt-simple'
import { Request, Response, NextFunction } from 'express'

interface TokenPayload {
  id: number
  iat: number
  exp: number
}

const verifyToken = async (req: Request, res: Response) => {
    let authorization = req.get('Authorization');
    if (authorization) {
        const token = authorization.split(' ')[1]   
             
        if (!token) {
            return res.status(401).json(
                { status: 'you have not sent a token' }
            );
        };
        try {
            let decoded = jwt.decode(token, process.env.DIRECTOR_PASSWORD as string) as TokenPayload;                        
            req.body.id = decoded.id;
        } catch (error) {
            return res.status(403).json(
                { status: 'Unauthorized' }
            );
        }
    }else{
        return res.status(403).json(
            { status: "The Authorization header is required"}
        );
    }
}

export default verifyToken;
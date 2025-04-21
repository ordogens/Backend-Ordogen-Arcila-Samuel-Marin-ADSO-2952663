import { Request, Response } from 'express';
import { generarToken } from '../helpers/generarToken';
import { UserService } from '../services/userServices';
import dotenv from "dotenv";

dotenv.config();

const userService = new UserService();

export const login = async (req: Request, res: Response) => {
    try{
        const { correo, password } = req.body;
        
        const headquarter = await userService.getByCorreo(correo);
        if (!headquarter) return res.status(404).json({ message: 'Headquarter not found' });
        
        if(password == process.env.DIRECTOR_PASSWORD){
            if (!process.env.KEY_TOKEN) {
                throw new Error('KEY_TOKEN is not defined in environment variables');
            }
            const token = generarToken({ id: headquarter.id }, process.env.KEY_TOKEN, 5);
            return res.json({ token });
        }else{
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        
    }catch(err){
        console.log(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

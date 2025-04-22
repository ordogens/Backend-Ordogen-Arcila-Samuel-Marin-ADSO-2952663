import { Request, Response } from 'express';
import { UserService } from '../services/userServices';
import { generarToken } from '../Helpers/generarToken';

const userService = new UserService();

export const login = async (req: Request, res: Response): Promise<void> => {
    try{
        const { correo, password } = req.body;
        
        const headquarter = await userService.getByCorreo(correo);
        if (!headquarter) res.status(404).json({ message: 'Headquarter not found' });
        
        if(password == process.env.DIRECTOR_PASSWORD){
            if (!process.env.KEY_TOKEN) {
                throw new Error('KEY_TOKEN is not defined in environment variables');
            }
            const token = generarToken({ id: headquarter.id }, process.env.KEY_TOKEN, 1000);
            res.json({ token });
        }else{
            res.status(401).json({ message: 'Invalid credentials' });
        }
        
    }catch(err){
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

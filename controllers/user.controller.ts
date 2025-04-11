import { Request, Response } from 'express';
import * as UserRepository from '../repositories/userRepository';
import { UserService } from '../services/userServices';
import { userDto } from '../dto/userDTO';

const userService = new UserService();

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  const users = await userService.getAll();
  res.json(users);
}

export const getAllUser = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id;
  const user = await userService.getById(Number(id));
  res.json(user);
}

export const createUser = async (req: Request, res: Response): Promise<void> => {
  await userService.create(req.body);
  res.status(201).json({ message: 'user created' });
}

export const updateUser = async (req: Request, res: Response): Promise<void> => {
    const {nombre,correo,contraseña,fecha_creacion} = req.body;
    const id = req.params
    try{
        const usuario = await userService.update(Number(id),({nombre,correo,contraseña,fecha_creacion}) as userDto);
        res.status(200).json(usuario);
    }catch(err){
        res.status(200).json({error: err});
    }
}

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    const {id} = req.params
    try{
        const resultado = await userService.delete(Number(id));
        if(resultado.affectedRows > 0){
            res.status(200).json({message: 'Usuario eliminado correctamente'});
        }else{
            res.status(200).json({message: 'No se pudo eliminar el usuario'});
        }
    }catch(err){
        res.status(200).json({error: err});
    }     
}
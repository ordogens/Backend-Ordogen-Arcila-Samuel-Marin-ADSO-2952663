import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

const router = Router();
const userController = new UserController();

// Definir rutas aquí
// router.get('/', userController.getAllUsers);

export default router; 
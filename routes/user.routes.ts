import { Router } from 'express';
import { getAllUsers,getAllUser,createUser,updateUser,deleteUser } from '../controllers/user.controller';
import {authMiddleware} from '../middlewares/auth.middleware'

const router = Router();

router.get('/', authMiddleware, getAllUsers);
router.get('/:id',authMiddleware, getAllUser);
router.post('/',authMiddleware, createUser);
router.put('/:id',authMiddleware, updateUser);
router.delete('/:id',authMiddleware, deleteUser);

export default router;

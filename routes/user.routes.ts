import { Router } from 'express';
import { getAllUsers,getAllUser,createUser,updateUser,deleteUser } from '../controllers/user.controller';

const router = Router();

router.get('/', getAllUsers);
router.get('/:id', getAllUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;

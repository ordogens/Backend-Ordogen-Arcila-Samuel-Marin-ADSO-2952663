import { Router } from 'express';
import { getAllProducts } from '../controllers/product.Controller';
// import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', getAllProducts);
// router.get('/:id', authMiddleware, getPractitioner);
// router.post('/', authMiddleware, createPractitioner);
// router.put('/:id', authMiddleware, updatePractitioner);
// router.delete('/:id', authMiddleware, deletePractitioner)

export default router;
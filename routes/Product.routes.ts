import { Router } from 'express';
import { getAllProducts,getAllProduct,createProduct,updateProduct,deleteProduct } from '../controllers/product.Controller';
// import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', getAllProducts);
router.get('/:id', getAllProduct);
router.post('/',createProduct);
router.put('/:id',updateProduct);
router.delete('/:id', deleteProduct)

export default router;
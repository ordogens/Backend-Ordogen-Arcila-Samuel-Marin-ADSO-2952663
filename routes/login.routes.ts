import { Router } from 'express';
import { getUserByCorreo} from '../controllers/login.controller';

const router = Router();

router.get('/', getUserByCorreo )

export default router;

import Router from 'express';
import { registerUser } from '../controllers/user.controller';

app.use(express.json());
const router = Router();

router.route('/register').post(registerUser)

export default router 
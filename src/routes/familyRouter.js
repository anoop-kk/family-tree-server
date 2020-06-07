import { Router } from 'express';
const familyRouter = Router();
import familyControler from '../controller/familyController';

familyRouter.get('/tree', familyControler.getFamilyTree);

export default familyRouter;
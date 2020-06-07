import { Router } from 'express';
const familyRouter = Router();
import { gateway } from '../libs/gateway';
import familyControler from '../controller/familyController';
familyControler.use(gateway)
familyRouter.get('/tree', familyControler.getFamilyTree);

export default familyRouter;
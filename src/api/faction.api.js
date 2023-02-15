// NPM Modules
import express from 'express';

// Local Modules
import { FactionController } from '../controller';
import AuthMiddleware from '../auth/auth.middlware';
import { FactionValidationMiddleware } from '../middlewares/validation';

const router = express.Router();

// Խմբակցությունների հեռախոսահամարները

router.get('/',
  FactionController.getFaction);

router.post('/',
  AuthMiddleware.authenticateFor(['admin', 'superAdmin']),
  FactionValidationMiddleware.validateAddArgs,
  FactionController.add);

router.put('/:id',
  AuthMiddleware.authenticateFor(['admin', 'superAdmin']),
  FactionValidationMiddleware.validateEditArgs,
  FactionController.edit);

router.delete('/:id',
  AuthMiddleware.authenticateFor(['admin', 'superAdmin']),
  FactionValidationMiddleware.validateGetByIdArgs,
  FactionController.delete);

export default router;

// NPM Modules
import express from 'express';

// Local Modules
import { CommitteeController } from '../controller';
import AuthMiddleware from '../auth/auth.middlware';
import { CommitteeValidationMiddleware } from '../middlewares/validation';

const router = express.Router();

// Հանձնաժողովների հեռախոսահամարները

router.get('/',
  CommitteeController.getCommittee);

router.post('/',
  AuthMiddleware.authenticateFor(['admin', 'superAdmin']),
  CommitteeValidationMiddleware.validateAddArgs,
  CommitteeController.add);

router.put('/:id',
  AuthMiddleware.authenticateFor(['admin', 'superAdmin']),
  CommitteeValidationMiddleware.validateEditArgs,
  CommitteeController.edit);

router.delete('/:id',
  AuthMiddleware.authenticateFor(['admin', 'superAdmin']),
  CommitteeValidationMiddleware.validateGetByIdArgs,
  CommitteeController.delete);

export default router;

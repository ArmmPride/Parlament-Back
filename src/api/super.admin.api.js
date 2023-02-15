// NPM Modules
import express from 'express';

// Local Modules
import { SuperAdminController } from '../controller';
import AuthMiddleware from '../auth/auth.middlware';
import { SuperAdminValidationMiddleware } from '../middlewares/validation';

const router = express.Router();

// Super Admin

router.get('/',
  AuthMiddleware.authenticateFor(['superAdmin']),

  SuperAdminController.getAdmin);

router.post('/',
  AuthMiddleware.authenticateFor(['superAdmin']),
  SuperAdminValidationMiddleware.validateAddArgs,
  SuperAdminController.add);

router.put('/:id',
  AuthMiddleware.authenticateFor(['superAdmin']),
  SuperAdminValidationMiddleware.validateEditArgs,
  SuperAdminController.edit);

router.delete('/:id',
  AuthMiddleware.authenticateFor(['superAdmin']),
  SuperAdminValidationMiddleware.validateGetByIdArgs,
  SuperAdminController.delete);

export default router;

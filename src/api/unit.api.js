// NPM Modules
import express from 'express';

// Local Modules
import { UnitController } from '../controller';
import AuthMiddleware from '../auth/auth.middlware';
import { UnitsValidationMiddleware } from '../middlewares/validation';

const router = express.Router();

// Կառուցվածքային ստորաբաժանումների հեռախոսահամարներ

router.get('/',
  UnitController.getUnits);

router.post('/',
  AuthMiddleware.authenticateFor(['admin', 'superAdmin']),
  UnitsValidationMiddleware.validateAddArgs,
  UnitController.add);

router.put('/:id',
  AuthMiddleware.authenticateFor(['admin', 'superAdmin']),
  UnitsValidationMiddleware.validateEditArgs,
  UnitController.edit);

router.delete('/:id',
  AuthMiddleware.authenticateFor(['admin', 'superAdmin']),
  UnitsValidationMiddleware.validateGetByIdArgs,
  UnitController.delete);

export default router;

// NPM Modules
import express from 'express';

// Local Modules
import { AcceptabilityController } from '../controller';
import AuthMiddleware from '../auth/auth.middlware';
import { AcceptabilityValidationMiddleware } from '../middlewares/validation';

const router = express.Router();

// Քաղաքացիների ընդունելության ժամանակացույց

router.get('/',
  AcceptabilityController.getAcceptability);

router.post('/',
  AuthMiddleware.authenticateFor(['admin', 'superAdmin']),
  AcceptabilityValidationMiddleware.validateAddArgs,
  AcceptabilityController.add);

router.put('/:id',
  AuthMiddleware.authenticateFor(['admin', 'superAdmin']),
  AcceptabilityValidationMiddleware.validateEditArgs,
  AcceptabilityController.edit);

router.delete('/:id',
  AuthMiddleware.authenticateFor(['admin', 'superAdmin']),
  AcceptabilityValidationMiddleware.validateGetByIdArgs,
  AcceptabilityController.delete);

export default router;

// NPM Modules
import express from 'express';

// Local Modules
import { CitizenReceptionController } from '../controller';
import AuthMiddleware from '../auth/auth.middlware';
import { CitizenReceptionValidationMiddleware } from '../middlewares/validation';

const router = express.Router();

// Քաղաքացիների ընդունելության և փաստաթղթաշրջանառության կարգը

router.get('/',
  CitizenReceptionController.getText);

router.post('/',
  AuthMiddleware.authenticateFor(['admin', 'superAdmin']),
  CitizenReceptionValidationMiddleware.validateAddArgs,
  CitizenReceptionController.add);

router.put('/:id',
  AuthMiddleware.authenticateFor(['admin', 'superAdmin']),
  CitizenReceptionValidationMiddleware.validateEditArgs,
  CitizenReceptionController.edit);

router.delete('/:id',
  AuthMiddleware.authenticateFor(['admin', 'superAdmin']),
  CitizenReceptionValidationMiddleware.validateGetByIdArgs,
  CitizenReceptionController.delete);

export default router;

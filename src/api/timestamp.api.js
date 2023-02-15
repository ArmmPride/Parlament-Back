// NPM Modules
import express from 'express';

// Local Modules
import { TimeStampController } from '../controller';
import { TimeStampValidationMiddleware } from '../middlewares/validation';
import AuthMiddleware from '../auth/auth.middlware';

const router = express.Router();

// Քաղաքացիների ընդունելության և փաստաթղթաշրջանառության կարգը

router.get('/',
  TimeStampController.getTime);

router.post('/',
  AuthMiddleware.authenticateFor(['admin', 'superAdmin']),
  TimeStampValidationMiddleware.validateAddArgs,
  TimeStampController.addTime);

  router.get('/getAllDate',
  AuthMiddleware.authenticateFor(['admin', 'superAdmin']),
  TimeStampController.getAllDate); 

export default router;

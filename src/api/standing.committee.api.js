// NPM Modules
import express from 'express';

// Local Modules
import { StandingCommitteeController } from '../controller';
import AuthMiddleware from '../auth/auth.middlware';
import { StandingCommitteeValidationMiddleware } from '../middlewares/validation';

const router = express.Router();

// Մշտական հանձնաժողովները և նրանց գործունեության ոլորտները

router.get('/',
  StandingCommitteeController.getText);

router.post('/',
  AuthMiddleware.authenticateFor(['admin', 'superAdmin']),
  StandingCommitteeValidationMiddleware.validateAddArgs,
  StandingCommitteeController.add);

router.put('/:id',
  AuthMiddleware.authenticateFor(['admin', 'superAdmin']),
  StandingCommitteeValidationMiddleware.validateEditArgs,
  StandingCommitteeController.edit);

router.delete('/:id',
  AuthMiddleware.authenticateFor(['admin', 'superAdmin']),
  StandingCommitteeValidationMiddleware.validateGetByIdArgs,
  StandingCommitteeController.delete);

export default router;

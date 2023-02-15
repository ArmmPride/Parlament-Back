import { FactionSchema } from './schemes';
import ValidatorUtil from './util/validator.util';

class FactionValidation {
  static validateGetByIdArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, FactionSchema.getByIdSchema, next);
  }

  static validateAddArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, FactionSchema.addSchema, next);
  }

  static validateEditArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, FactionSchema.editSchema, next);
  }
}

export default FactionValidation;

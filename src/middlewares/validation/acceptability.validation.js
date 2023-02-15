import { AcceptabilitySchema } from './schemes';
import ValidatorUtil from './util/validator.util';

class AcceptabilityValidation {
  static validateGetByIdArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, AcceptabilitySchema.getByIdSchema, next);
  }

  static validateAddArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, AcceptabilitySchema.addSchema, next);
  }

  static validateEditArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, AcceptabilitySchema.editSchema, next);
  }
}

export default AcceptabilityValidation;

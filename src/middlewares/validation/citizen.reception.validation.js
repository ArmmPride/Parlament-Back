import { CitizenReceptionSchema } from './schemes';
import ValidatorUtil from './util/validator.util';

class CitizenReceptionValidation {
  static validateGetByIdArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, CitizenReceptionSchema.getByIdSchema, next);
  }

  static validateAddArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, CitizenReceptionSchema.addSchema, next);
  }

  static validateEditArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, CitizenReceptionSchema.editSchema, next);
  }
}

export default CitizenReceptionValidation;

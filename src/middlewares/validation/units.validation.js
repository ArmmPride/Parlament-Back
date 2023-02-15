import { UnitsSchema } from './schemes';
import ValidatorUtil from './util/validator.util';

class UnitsValidation {
  static validateGetByIdArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, UnitsSchema.getByIdSchema, next);
  }

  static validateAddArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, UnitsSchema.addSchema, next);
  }

  static validateEditArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, UnitsSchema.editSchema, next);
  }
}

export default UnitsValidation;

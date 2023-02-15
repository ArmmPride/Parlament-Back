import { SuperAdminSchema } from './schemes';
import ValidatorUtil from './util/validator.util';

class UnitsValidation {
  static validateGetByIdArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, SuperAdminSchema.getByIdSchema, next);
  }

  static validateAddArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, SuperAdminSchema.addSchema, next);
  }

  static validateEditArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, SuperAdminSchema.editSchema, next);
  }
}

export default UnitsValidation;

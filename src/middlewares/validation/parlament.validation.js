import { ParlamentSchema } from './schemes';
import ValidatorUtil from './util/validator.util';

class ParlamentValidation {
  static validateGetByIdArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, ParlamentSchema.getByIdSchema, next);
  }

  static validateAddArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, ParlamentSchema.addSchema, next);
  }

  static validateEditArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, ParlamentSchema.editSchema, next);
  }
}

export default ParlamentValidation;

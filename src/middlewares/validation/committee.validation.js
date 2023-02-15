import { CommitteeSchema } from './schemes';
import ValidatorUtil from './util/validator.util';

class CommitteeValidation {
  static validateGetByIdArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, CommitteeSchema.getByIdSchema, next);
  }

  static validateAddArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, CommitteeSchema.addSchema, next);
  }

  static validateEditArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, CommitteeSchema.editSchema, next);
  }
}

export default CommitteeValidation;

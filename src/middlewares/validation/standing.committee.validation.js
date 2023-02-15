import { StandingCommitteeSchema } from './schemes';
import ValidatorUtil from './util/validator.util';

class StandingCommitteeValidation {
  static validateGetByIdArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, StandingCommitteeSchema.getByIdSchema, next);
  }

  static validateAddArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, StandingCommitteeSchema.addSchema, next);
  }

  static validateEditArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, StandingCommitteeSchema.editSchema, next);
  }
}

export default StandingCommitteeValidation;

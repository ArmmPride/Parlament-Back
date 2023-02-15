import { TimeStampSchema } from './schemes';
import ValidatorUtil from './util/validator.util';

class TimeStampValidation {
  static validateAddArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, TimeStampSchema.addSchema, next);
  }
}

export default TimeStampValidation;

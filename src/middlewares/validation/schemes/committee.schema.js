// NPM Modules
import Joi from 'joi';

// Local MOdules
import { ID } from './type';
// import Status from '../../../enum/status.enum';

const CommitteeSchema = {

  getByIdSchema: {
    params: Joi.object({
      id: ID.required()
    })
  },

  addSchema: {
    body: Joi.object({
      name: Joi.string().min(3).max(55),
      member1: Joi.string().min(3).max(55),
      member2: Joi.string().min(3).max(55),
      cityphone: Joi.string(),
      internalphone: Joi.string(),
      internalphone2: Joi.string()
    })
  },

  editSchema: {
    params: Joi.object({
      id: ID.required()
    }),
    body: Joi.object({
      name: Joi.string().min(3).max(55),
      member1: Joi.string().min(3).max(55),
      member2: Joi.string().min(3).max(55),
      cityphone: Joi.string(),
      internalphone: Joi.string(),
      internalphone2: Joi.string()
    }).or(
      'name',
      'member1',
      'member2',
      'cityphone',
      'internalPhone',
      'internalPhone2'
    )
  }
};

export default CommitteeSchema;

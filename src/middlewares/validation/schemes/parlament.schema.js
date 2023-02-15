// NPM Modules
import Joi from 'joi';

// Local MOdules
import { ID } from './type';
// import Status from '../../../enum/status.enum';

const ParlamentSchema = {

  getByIdSchema: {
    params: Joi.object({
      id: ID.required()
    })
  },

  addSchema: {
    body: Joi.object({
      firstname: Joi.string().min(3).max(55),
      lastname: Joi.string().min(3).max(55),
      surname: Joi.string().min(3).max(55),
      phonenumber: Joi.string().min(1).max(55),
      key: Joi.boolean()
    })
  },

  editSchema: {
    params: Joi.object({
      id: ID.required()
    }),
    body: Joi.object({
      firstname: Joi.string().min(3).max(55),
      lastname: Joi.string().min(3).max(55),
      surname: Joi.string().min(3).max(55),
      phonenumber: Joi.string().min(1).max(55),
      key: Joi.boolean()
    }).or(
      'firstname',
      'lastname',
      'surname',
      'phonenumber',
      'key'
    )
  }
};

export default ParlamentSchema;

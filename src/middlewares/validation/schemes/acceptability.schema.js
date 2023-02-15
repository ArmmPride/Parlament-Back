// NPM Modules
import Joi from 'joi';

// Local MOdules
import { ID } from './type';
// import Status from '../../../enum/status.enum';

const AcceptabilitySchema = {

  getByIdSchema: {
    params: Joi.object({
      id: ID.required()
    })
  },

  addSchema: {
    body: Joi.object({
      title: Joi.string().min(3).max(55),
      name: Joi.string().min(3).max(55),
      day: Joi.string().min(3).max(55),
      time: Joi.string()
    })
  },

  editSchema: {
    params: Joi.object({
      id: ID.required()
    }),
    body: Joi.object({
      title: Joi.string().min(3).max(55),
      name: Joi.string().min(3).max(55),
      day: Joi.string().min(3).max(55),
      time: Joi.string().min(3).max(55)
    }).or(
      "title",
      'name',
      'day',
      'time'
    )
  }
};

export default AcceptabilitySchema;

// NPM Modules
import Joi from 'joi';

// Local MOdules
import { ID } from './type';

const SuperAdminSchema = {
  getByIdSchema: {
    params: Joi.object({
      id: ID.required()
    })
  },

  addSchema: {
    body: Joi.object({
      user: Joi.string().min(4).max(20).required(),
      pwd: Joi.string().min(4).max(20).required()
    })
  },

  editSchema: {
    params: Joi.object({
      id: ID.required()
    }),
    body: Joi.object({
      pwd: Joi.string().min(4).max(20).required()
    }).or(
      'pwd'
    )
  }
};

export default SuperAdminSchema;

// NPM Modules
import Joi from 'joi';

// Local MOdules
import { ID } from './type';

const StandingCommitteeSchema = {

  getByIdSchema: {
    params: Joi.object({
      id: ID.required()
    })
  },

  addSchema: {
    body: Joi.object({
      title: Joi.string().min(4).max(550),
      text: Joi.string().min(8).max(550)
    })
  },

  editSchema: {
    params: Joi.object({
      id: ID.required()
    }),
    body: Joi.object({
      title: Joi.string().min(4).max(550),
      text: Joi.string().min(8).max(550)

    }).or(
      'title',
      'text'
    )
  }
};

export default StandingCommitteeSchema;

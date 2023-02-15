// NPM Modules
// import Joi from 'joi';

import DateExtension from '@joi/date';
import JoiImport from 'joi';

const Joi = JoiImport.extend(DateExtension);

const TimeStampSchema = {
  addSchema: {
    body: Joi.array().items(Joi.object({
      date: Joi.date().format('YYYY-M-D')
    }))
  }
};
 
export default TimeStampSchema
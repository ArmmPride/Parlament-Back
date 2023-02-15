// Local Modules
import { TimeStampServic } from '../services';
import { SuccessHandlerUtil } from '../utils';

export default class TimeStampController {
  static async getTime(req, res, next) {
    try {
      const users = await TimeStampServic.getTime();

      SuccessHandlerUtil.handleList(res, next, users);
    } catch (error) {
      next(error);
    }
  }

  static async addTime(req, res, next) {
    try {
      const date = req.body;
      // console.log(date,'data');
      const data = await TimeStampServic.addTime(date);
      SuccessHandlerUtil.handleAdd(res, next, { success: data.length > 0 });
    } catch (error) {
      next(error);
    }
  }

  static async getAllDate(req, res, next) {
    try {
      const users = await TimeStampServic.getAllDate();

      SuccessHandlerUtil.handleList(res, next, users);
    } catch (error) {
      next(error);
    }
  }
}

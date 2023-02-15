// Local Modules
import { AcceptabilityService } from '../services';
import { SuccessHandlerUtil } from '../utils';

export default class AcceptabilityController {
  static async getAcceptability(req, res, next) {
    try {
      const users = await AcceptabilityService.getAcceptability();

      SuccessHandlerUtil.handleList(res, next, users);
    } catch (error) {
      next(error);
    }
  }

  static async add(req, res, next) {
    try {
      const {
        title,name, day, time
      } = req.body;
      const user = await AcceptabilityService.add({ title,name, day, time });
      SuccessHandlerUtil.handleAdd(res, next, user);
    } catch (error) {
      next(error);
    }
  }

  static async edit(req, res, next) {
    try {
      const { id } = req.params;
      const {
        title,name, day, time
      } = req.body;
      const editedUser = await AcceptabilityService.edit(id, {
        title,name, day, time
      });

      SuccessHandlerUtil.handleUpdate(res, next, editedUser);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const deletedUser = await AcceptabilityService.delete(id);

      SuccessHandlerUtil.handleGet(res, next, deletedUser);
    } catch (error) {
      next(error);
    }
  }
}

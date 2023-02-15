// Local Modules
import { SecondAcceptabilityService } from '../services';
import { SuccessHandlerUtil } from '../utils';

export default class SecondAcceptabilityController {
  static async getAcceptability(req, res, next) {
    try {
      const users = await SecondAcceptabilityService.getAcceptability();

      SuccessHandlerUtil.handleList(res, next, users);
    } catch (error) {
      next(error);
    }
  }

  static async add(req, res, next) {
    try {
      const {
        name, day, time
      } = req.body;
      const user = await SecondAcceptabilityService.add({ name, day, time });
      SuccessHandlerUtil.handleAdd(res, next, user);
    } catch (error) {
      next(error);
    }
  }

  static async edit(req, res, next) {
    try {
      const { id } = req.params;
      const {
        name, day, time
      } = req.body;
      const editedUser = await SecondAcceptabilityService.edit(id, {
        name, day, time
      });

      SuccessHandlerUtil.handleUpdate(res, next, editedUser);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const deletedUser = await SecondAcceptabilityService.delete(id);

      SuccessHandlerUtil.handleGet(res, next, deletedUser);
    } catch (error) {
      next(error);
    }
  }
}

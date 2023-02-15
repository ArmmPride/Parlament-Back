// Local Modules
import { FactionService } from '../services';
import { SuccessHandlerUtil } from '../utils';

export default class FactionController {
  static async getFaction(req, res, next) {
    try {
      const users = await FactionService.getFaction();

      SuccessHandlerUtil.handleList(res, next, users);
    } catch (error) {
      next(error);
    }
  }

  static async add(req, res, next) {
    try {
      const {
        name, member1, member2, cityphone, internalphone
      } = req.body;
      const user = await FactionService.add({
        name, member1, member2, cityphone, internalphone
      });
      SuccessHandlerUtil.handleAdd(res, next, user);
    } catch (error) {
      next(error);
    }
  }

  static async edit(req, res, next) {
    try {
      const { id } = req.params;
      const {
        name, member1, member2, cityphone, internalphone
      } = req.body;
      const editedUser = await FactionService.edit(id, {
        name, member1, member2, cityphone, internalphone
      });

      SuccessHandlerUtil.handleUpdate(res, next, editedUser);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const deletedUser = await FactionService.delete(id);

      SuccessHandlerUtil.handleGet(res, next, deletedUser);
    } catch (error) {
      next(error);
    }
  }
}

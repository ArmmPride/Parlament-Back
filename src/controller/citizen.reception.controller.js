// Local Modules
import { CitizenReceptionService } from '../services';
import { SuccessHandlerUtil } from '../utils';

export default class CitizenReception {
  static async getText(req, res, next) {
    try {
      const users = await CitizenReceptionService.getText();

      SuccessHandlerUtil.handleList(res, next, users);
    } catch (error) {
      next(error);
    }
  }

  static async add(req, res, next) {
    try {
      const { text, title, subtitle1, subtitle2  } = req.body;
      const user = await CitizenReceptionService.add({ text, title,subtitle1, subtitle2 });
      SuccessHandlerUtil.handleAdd(res, next, user);
    } catch (error) {
      next(error);
    }
  }

  static async edit(req, res, next) {
    try {
      const { id } = req.params;
      const {  text, title, subtitle1, subtitle2 } = req.body;
      const editedUser = await CitizenReceptionService.edit(id, { text,title,subtitle1, subtitle2 });

      SuccessHandlerUtil.handleUpdate(res, next, editedUser);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const deletedUser = await CitizenReceptionService.delete(id);

      SuccessHandlerUtil.handleGet(res, next, deletedUser);
    } catch (error) {
      next(error);
    }
  }
}

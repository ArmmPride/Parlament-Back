// Local Modules
import { StandingCommitteeService } from '../services';
import { SuccessHandlerUtil } from '../utils';

export default class StandingCommitteeController {
  static async getText(req, res, next) {
    try {
      const users = await StandingCommitteeService.getText();

      SuccessHandlerUtil.handleList(res, next, users);
    } catch (error) {
      next(error);
    }
  }

  static async add(req, res, next) {
    try {
      const { text,title } = req.body;
      console.log(text)
      const user = await StandingCommitteeService.add({ text,title });
      SuccessHandlerUtil.handleAdd(res, next, user);
    } catch (error) {
      next(error);
    }
  }

  static async edit(req, res, next) {
    try {
      const { id } = req.params;
      const { text,title } = req.body;
      const editedUser = await StandingCommitteeService.edit(id, { text, title });

      SuccessHandlerUtil.handleUpdate(res, next, editedUser);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const deletedUser = await StandingCommitteeService.delete(id);

      SuccessHandlerUtil.handleGet(res, next, deletedUser);
    } catch (error) {
      next(error);
    }
  }
}

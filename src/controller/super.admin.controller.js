// Local Modules
import bCrypt from 'bcryptjs';
import { SuperAdminService } from '../services';
import { SuccessHandlerUtil } from '../utils';

export default class SuperAdminController {
  static async getAdmin(req, res, next) {
    try {
      const users = await SuperAdminService.getAdmin();

      SuccessHandlerUtil.handleList(res, next, users);
    } catch (error) {
      next(error);
    }
  }

  static async add(req, res, next) {
    try {
      let {
        user, pwd
      } = req.body;
      pwd = bCrypt.hashSync(pwd, bCrypt.genSaltSync(10), null);
      const role = 'admin';
      const add = await SuperAdminService.add({
        user, pwd, role
      });
      SuccessHandlerUtil.handleAdd(res, next, add);
    } catch (error) {
      next(error);
    }
  }

  static async edit(req, res, next) {
    try {
      const { id } = req.params;
      let {
        pwd
      } = req.body;
      pwd = bCrypt.hashSync(pwd, bCrypt.genSaltSync(10), null);
      const editedUser = await SuperAdminService.edit(id, {
        pwd
      });

      SuccessHandlerUtil.handleUpdate(res, next, editedUser);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const deletedUser = await SuperAdminService.delete(id);

      SuccessHandlerUtil.handleGet(res, next, deletedUser);
    } catch (error) {
      next(error);
    }
  }
}

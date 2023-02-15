// Local Modules
import { CommitteeServices } from '../services';
import { SuccessHandlerUtil } from '../utils';

export default class CommitteeController {
  static async getCommittee(req, res, next) {
    try {
      const users = await CommitteeServices.getCommittee();

      SuccessHandlerUtil.handleList(res, next, users);
    } catch (error) {
      next(error);
    }
  }

  static async add(req, res, next) {
    try {
      const {
        name, member1, member2, cityphone, internalphone,internalphone2
      } = req.body;
      const user = await CommitteeServices.add({
        name, member1, member2, cityphone, internalphone,internalphone2
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
        name, member1, member2, cityphone, internalphone,internalphone2
      } = req.body;
      const editedUser = await CommitteeServices.edit(id, {
        name, member1, member2, cityphone, internalphone,internalphone2
      });

      SuccessHandlerUtil.handleUpdate(res, next, editedUser);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const deletedUser = await CommitteeServices.delete(id);

      SuccessHandlerUtil.handleGet(res, next, deletedUser);
    } catch (error) {
      next(error);
    }
  }
}

// Local Modules
import { UnitService } from '../services';
import { SuccessHandlerUtil } from '../utils';

export default class ParlamentController {
  static async getUnits(req, res, next) {
    try {
      const users = await UnitService.getUnits();

      SuccessHandlerUtil.handleList(res, next, users);
    } catch (error) {
      next(error);
    }
  }

  static async list(req, res, next) {
    try {
      const users = await UnitService.list();

      SuccessHandlerUtil.handleList(res, next, users);
    } catch (error) {
      next(error);
    }
  }

  static async getById(req, res, next) {
    try {
      const { id } = req.params;
      const user = await UnitService.getById(id);
      SuccessHandlerUtil.handleGet(res, next, { ...user });
    } catch (error) {
      next(error);
    }
  }

  static async add(req, res, next) {
    try {
      const { name, internalphone } = req.body;
      const user = await UnitService.add({ name, internalphone });
      SuccessHandlerUtil.handleAdd(res, next, user);
    } catch (error) {
      next(error);
    }
  }

  static async edit(req, res, next) {
    try {
      const { id } = req.params;
      const { name, internalphone } = req.body;
      console.log(req.body,"req.body");
      const editedUser = await UnitService.edit(id, { name, internalphone });

      SuccessHandlerUtil.handleUpdate(res, next, editedUser);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const deletedUser = await UnitService.delete(id);

      SuccessHandlerUtil.handleGet(res, next, deletedUser);
    } catch (error) {
      next(error);
    }
  }
}

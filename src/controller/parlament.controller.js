// Local Modules
import { ParlamentService } from '../services';
import { SuccessHandlerUtil } from '../utils';

export default class ParlamentController {
  static async getUsers(req, res, next) {
    try {
      const users = await ParlamentService.getUsers();

      SuccessHandlerUtil.handleList(res, next, users);
    } catch (error) {
      next(error);
    }
  }

  static async list(req, res, next) {
    try {
      const users = await ParlamentService.list();

      SuccessHandlerUtil.handleList(res, next, users);
    } catch (error) {
      next(error);
    }
  }

  static async getById(req, res, next) {
    try {
      const { id } = req.params;
      const user = await ParlamentService.getById(id);
      SuccessHandlerUtil.handleGet(res, next, { ...user });
    } catch (error) {
      next(error);
    }
  }

  static async add(req, res, next) {
    try {
      const {
        firstname, lastname, surname, phonenumber,key
      } = req.body;
      const user = await ParlamentService.add({
        firstname, lastname, surname, phonenumber, key
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
        firstname, lastname, surname, phonenumber,key
      } = req.body;
      const editedUser = await ParlamentService.edit(id, {
        firstname, lastname, surname, phonenumber, key
      });

      SuccessHandlerUtil.handleUpdate(res, next, editedUser);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const deletedUser = await ParlamentService.delete(id);

      SuccessHandlerUtil.handleGet(res, next, deletedUser);
    } catch (error) {
      next(error);
    }
  }
}

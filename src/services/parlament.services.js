// Local Modules
import { ParlamentModel } from '../models';

export default class ParlamentService {
  static getUsers() {
    return ParlamentModel.getUsers();
  }

  static add(payload) {
    return ParlamentModel.create(payload);
  }

  static edit(id, update) {
    return ParlamentModel.edit(id, update);
  }

  static delete(id) {
    return ParlamentModel.delete(id);
  }
}

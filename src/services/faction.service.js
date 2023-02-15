// Local Modules
import { FactionModel } from '../models';

export default class FactionService {
  static getFaction() {
    return FactionModel.getFaction();
  }

  static add(payload) {
    return FactionModel.create(payload);
  }

  static edit(id, update) {
    return FactionModel.edit(id, update);
  }

  static delete(id) {
    return FactionModel.delete(id);
  }
}

// Local Modules
import { UnitModel } from '../models';

export default class UnitService {
  static getUnits() {
    return UnitModel.getUnits();
  }

  static add(payload) {
    return UnitModel.create(payload);
  }

  static edit(id, update) {
    return UnitModel.edit(id, update);
  }

  static delete(id) {
    return UnitModel.delete(id);
  }
}

// Local Modules
import { AcceptabilityModel } from '../models';

export default class AcceptabilityService {
  static getAcceptability() {
    return AcceptabilityModel.getAcceptability();
  }

  static add(payload) {
    return AcceptabilityModel.create(payload);
  }

  static edit(id, update) {
    return AcceptabilityModel.edit(id, update);
  }

  static delete(id) {
    return AcceptabilityModel.delete(id);
  }
}

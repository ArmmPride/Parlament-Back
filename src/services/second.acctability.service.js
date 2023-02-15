// Local Modules
import { SecondAcceptabilityModel } from '../models';

export default class SecondAcceptabilityService {
  static getAcceptability() {
    return SecondAcceptabilityModel.getAcceptability();
  }

  static add(payload) {
    return SecondAcceptabilityModel.create(payload);
  }

  static edit(id, update) {
    return SecondAcceptabilityModel.edit(id, update);
  }

  static delete(id) {
    return SecondAcceptabilityModel.delete(id);
  }
}

// Local Modules
import { SuperAdminModel } from '../models';

export default class SuperAdminService {
  static getAdmin() {
    return SuperAdminModel.getAdmin();
  }

  static add(payload) {
    return SuperAdminModel.create(payload);
  }

  static edit(id, update) {
    return SuperAdminModel.edit(id, update);
  }

  static delete(id) {
    return SuperAdminModel.delete(id);
  }
}

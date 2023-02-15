// Local Modules
import { CommitteeModel } from '../models';

export default class CommitteeServices {
  static getCommittee() {
    return CommitteeModel.getCommittee();
  }

  static add(payload) {
    return CommitteeModel.create(payload);
  }

  static edit(id, update) {
    return CommitteeModel.edit(id, update);
  }

  static delete(id) {
    return CommitteeModel.delete(id);
  }
}

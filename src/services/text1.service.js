// Local Modules
import { Tex1tModel } from '../models';

export default class Text1Service {
  static getText() {
    return Tex1tModel.getText();
  }

  static add(payload) {
    return Tex1tModel.create(payload);
  }

  static edit(id, update) {
    return Tex1tModel.edit(id, update);
  }

  static delete(id) {
    return Tex1tModel.delete(id);
  }
}

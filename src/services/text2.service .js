// Local Modules
import { Tex2tModel } from '../models';

export default class Text2Service {
  static getText() {
    return Tex2tModel.getText();
  }

  static add(payload) {
    return Tex2tModel.create(payload);
  }

  static edit(id, update) {
    return Tex2tModel.edit(id, update);
  }

  static delete(id) {
    return Tex2tModel.delete(id);
  }
}

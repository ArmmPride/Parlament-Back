// NPM Modules
import { Model } from 'objection';

class SuperAdminModel extends Model {
  static get idColumn() { return 'id'; }

  static get tableName() { return 'users'; }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [],
      properties: {
        id: { type: 'integer' },
        firstname: { type: 'string', minLength: 1, maxLength: 255 },
        lastname: { type: 'string', minLength: 1, maxLength: 255 },
        surname: { type: 'string', minLength: 1, maxLength: 255 },
        phonenumber: { type: 'string', minLength: 1, maxLength: 255 },
        key: { type: 'string', minLength: 1, maxLength: 255 }

      }
    };
  }

  $formatJson(json) {
    json = super.$formatJson(json);
    delete json.pwd;
    return json;
  }

  $beforeInsert() {
    const date = new Date();
    this.created_at = date;
  }

  $beforeUpdate() {
    const date = new Date();
    this.updated_at = date;
  }

  // Methods
  static getAdmin() {
    return SuperAdminModel.query().select('*').where('role', '=', 'admin');
  }

  static delete(id) {
    return SuperAdminModel.query().select('*').where('id', '=', id).del()
      .orderBy('id')
      .returning('*');
  }

  static create(addToDB) {
    return SuperAdminModel.query().insert(addToDB).onConflict('user').ignore();
  }

  static edit(id, update) {
    return SuperAdminModel.query().update(update).where({ id }).orderBy('id')
      .returning('*');
  }
}

export default SuperAdminModel;

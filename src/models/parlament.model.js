// NPM Modules
import { Model } from 'objection';

class ParlamentModel extends Model {
  static get idColumn() { return 'id'; }

  static get tableName() { return 'mps'; }

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
        key: { type: 'boolean', minLength: 1, maxLength: 255 }
      }
    };
  }

  $beforeInsert() {
    const date = new Date();
    this.created_at = date;
  }

  $beforeUpdate() {
    const date = new Date();
    this.updated_at = date;
  }

  static getUsers() {
    return ParlamentModel.query().select('*').orderBy('id');
  }

  static edit(id, update) {
    return ParlamentModel.query().update(update).where({ id }).orderBy('id').returning('*');
  }

  static delete(id) {
    return ParlamentModel.query().select('*').where('id', '=', id).del().orderBy('id')
      .returning('*');
  }

  static create(addToDB) {
    return ParlamentModel.query().insert(addToDB);
  }
}

export default ParlamentModel;

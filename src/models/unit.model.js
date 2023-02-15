// NPM Modules
import { Model } from 'objection';

class UnitModel extends Model {
  static get idColumn() { return 'id'; }

  static get tableName() { return 'units'; }

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

  $beforeInsert() {
    const date = new Date();
    this.created_at = date;
  }

  $beforeUpdate() {
    const date = new Date();
    this.updated_at = date;
  }

  static getUnits() {
    console.log('Hello WOlrd');
    return UnitModel.query().select('*').orderBy('id');
  }

  static edit(id, update) {
    return UnitModel.query().update(update).where({ id }).orderBy('id').returning('*');
  }

  static delete(id) {
    return UnitModel.query().select('*').where('id', '=', id).del().orderBy('id')
      .returning('*');
  }

  static create(addToDB) {
    return UnitModel.query().insert(addToDB);
  }
}

export default UnitModel;

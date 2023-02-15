// NPM Modules
import { Model } from 'objection';

class SecondAcceptabilityModel extends Model {
  static get idColumn() { return 'id'; }

  static get tableName() { return 'second-acceptability'; }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [],
      properties: {
        id: { type: 'integer' },
        title: {type: 'string', minLength: 1, maxLength: 255 },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        day: { type: 'string', minLength: 1, maxLength: 255 },
        time: { type: 'string', minLength: 1, maxLength: 255 }
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

  static getAcceptability() {
    return SecondAcceptabilityModel.query().select('*').orderBy('id');
  }

  static edit(id, update) {
    return SecondAcceptabilityModel.query().update(update).where({ id }).orderBy('id').returning('*');
  }

  static delete(id) {
    return SecondAcceptabilityModel.query().select('*').where('id', '=', id).del().orderBy('id')
      .returning('*');
  }

  static create(addToDB) {
    return SecondAcceptabilityModel.query().insert(addToDB);
  }
}

export default SecondAcceptabilityModel;

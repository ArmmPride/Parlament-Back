import { Model } from 'objection';
import { DateFormatUtil } from '../utils';

class TimeStampModel extends Model {
  static get idColumn() { return 'id'; }

  static get tableName() { return 'time_table'; }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [],
      properties: {
        id: { type: 'integer' }
      }
    };
  }

  $beforeInsert() {
    const date = new Date();
    this.created_at = date;
  }

  $formatJson(json) {
    json = super.$formatJson(json);
    json.date = DateFormatUtil.convert(json.date);
    delete json.created_at;
    return json;
  }

  $beforeUpdate() {
    const date = new Date();
    this.updated_at = date;
  }

  static getTime() {
    return TimeStampModel.query().select('*').where('date','>=',new Date());
  }

  static async addTime(date) {
    return TimeStampModel.query().insert(date);
  }
  static async getAllDate() {
    return TimeStampModel.query().select('*');
  }

  static async delete() {
    return TimeStampModel.query()
      .del().truncate();
  }
}

export default TimeStampModel;

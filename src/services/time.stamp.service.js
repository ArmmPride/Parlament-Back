import { TimeStampModel } from '../models';

export default class TimeStampServic {
  static getTime() {
    return TimeStampModel.getTime();
  }

  static async addTime(date) {

    await TimeStampModel.delete();
    return TimeStampModel.addTime(date);
  }
  static getAllDate() {
    return TimeStampModel.getAllDate();
  }
}


// static async addTime(date, allDate = []) {
//   for (const val in date) {
//     const timeNow = new Date();

//     if (date[val].date >= timeNow) {
//       allDate.push(new Object({ date: date[val].date }));
//     }
//   }
//   await TimeStampModel.delete();
//   return TimeStampModel.addTime(allDate);
// }
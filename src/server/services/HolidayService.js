const DataBaseService = require('./DataBaseService');

class HolidayService {
  async getAll(year) {
    return DataBaseService.get("holidays", year);
  }

  async overwrite(original, payload) {
    Object.entries(payload).map(field => {
      let key = field[0];
      let value = field[1];
      if (key == 'dia' || key == 'mes') return original[key] = parseInt(value);
      else return original[key] = value;
    });
    return original;
  }

  async updateOne(index, year, payload) {
    let setValue = {};
    setValue['holidays.' + index] = payload;
    return DataBaseService.update('holidays', { year: parseInt(year) }, setValue);
  }
}

module.exports = new HolidayService();
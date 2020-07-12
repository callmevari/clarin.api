// const { HolidayService } = require('../../services/index');
const { DataBaseService } = require('../../services/index');

class HolidayController {
  async get(req, res, next) {
    try {
      const { year } = req.params;
      const list = await DataBaseService.get("holidays", { year: parseInt(year) });
      if (list) return res.json(list);
      throw new Error({ message: `Holidays for year ${year} not found`, code: 404 });
    } catch (err) {
      next(err);
    }
  }

  async getHoliday(req, res, next) {
    try {
      const { year, month, day } = req.params;
      const list = await DataBaseService.get('holidays', { year: parseInt(year) });
      if (!list) throw new Error({ message: `Holidays for year ${year} not found`, code: 404 });
      const holiday = list.holidays.find(each => (each.dia == day && each.mes == month));
      return res.json({ ...holiday });
    } catch (err) {
      next(err);
    }
  }

  async updateHoliday(req, res, next) {
    try {
      const { year, month, day } = req.params;
      const { body } = req;
      const list = await DataBaseService.get('holidays', { year: parseInt(year) });
      if (!list) throw new Error({ message: `Holidays for year ${year} not found`, code: 404 });
      const holiday = list.holidays.find(each => (each.dia == day && each.mes == month));
      const index = list.holidays.findIndex(each => (each.dia == day && each.mes == month));
      Object.entries(body).map(each => {
        let key = each[0];
        let value = each[1];
        if (key == 'dia' || key == 'mes') holiday[key] = parseInt(value);
        else holiday[key] = value;
      });
      let setValue = {};
      setValue['holidays.' + index] = holiday;
      const result = await DataBaseService.update('holidays', { year: parseInt(year) }, setValue);
      return res.json({ result });
    } catch (err) {
      next(err);
    }
  }

  async post(req, res, next) {
    throw new Error('post method for HolidayController not implemented');
  }

  async delete(req, res, next) {
    throw new Error('delete method for HolidayController not implemented');
  }
}

module.exports = new HolidayController();

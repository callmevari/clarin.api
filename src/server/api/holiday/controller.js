const { HolidayService } = require('../../services/index');

class HolidayController {
  async list(req, res, next) {
    try {
      const { year } = req.params;
      const list = await HolidayService.getAll({ year: parseInt(year) });
      if (list) return res.json(list);
      throw new Error(`Holidays for year ${year} not found`);
    } catch (err) {
      next(err);
    }
  }

  async get(req, res, next) {
    try {
      const { year, month, day } = req.params;
      const list = await HolidayService.getAll({ year: parseInt(year) });
      if (!list) throw new Error(`Holiday for ${day}/${month}/${year} not found`);
      const holiday = list.holidays.find(each => (each.dia == day && each.mes == month));
      return res.json({ ...holiday });
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const { year, month, day } = req.params;
      const { body } = req;
      const list = await HolidayService.getAll({ year: parseInt(year) });
      if (!list) throw new Error(`Holidays for year ${year} not found`);
      const holiday = list.holidays.find(each => (each.dia == day && each.mes == month));
      if (!holiday) throw new Error(`Holiday for ${day}/${month}/${year} not found`);
      const index = list.holidays.findIndex(each => (each.dia == day && each.mes == month));
      const update = await HolidayService.overwrite(holiday, body);
      const result = await HolidayService.updateOne(index, year, update);
      return res.json({ result });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new HolidayController();

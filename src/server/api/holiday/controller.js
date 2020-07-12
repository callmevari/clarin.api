const { HolidayService } = require('../../services/index');

class HolidayController {
  async list(req, res, next) {
    try {
      const { year } = req.params;
      const list = await HolidayService.getAll({ year: parseInt(year) });
      if (list) return res.json(list);
      throw new Error({ message: `Holidays for year ${year} not found`, code: 404 });
    } catch (err) {
      next(err);
    }
  }

  async get(req, res, next) {
    try {
      const { year, month, day } = req.params;
      const list = await HolidayService.getAll({ year: parseInt(year) });
      if (!list) throw new Error({ message: `Holiday for ${day}/${month}/${year} not found`, code: 404 });
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
      if (!list) throw new Error({ message: `Holidays for year ${year} not found`, code: 404 });
      const holiday = list.holidays.find(each => (each.dia == day && each.mes == month));
      if (!holiday) throw new Error({ message: `Holiday for ${day}/${month}/${year} not found`, code: 404 });
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

// const { HolidayService } = require('../../services/index');
const { DataBaseService } = require('../../services/index');

class HolidayController {
  async get(req, res, next) {
    try {
      const { params: { year } } = req;
      const holidays = await DataBaseService.get("holidays", { year: parseInt(year) });
      if (holidays) {
        return res.json(holidays);
      }
      throw new Error({
        message: `Holidays for year ${year} not found`,
        code: 404,
      });
    } catch (err) {
      next(err);
    }
  }

  // async getDay(req, res, next) {
  //   try {

  //   } catch (err) {

  //   }
  // }

  async post(req, res, next) {
    throw new Error('post method for HolidayController not implemented');
  }

  async put(req, res, next) {
    throw new Error('put method for HolidayController not implemented');
  }

  async delete(req, res, next) {
    throw new Error('delete method for HolidayController not implemented');
  }
}

module.exports = new HolidayController();

const router = require('express').Router();

const HolidayController = require('./controller');

router.get('/:year', HolidayController.get);
router.get('/:year/:month/:day', HolidayController.getHoliday);
router.put('/:year/:month/:day', HolidayController.updateHoliday);

module.exports = router;

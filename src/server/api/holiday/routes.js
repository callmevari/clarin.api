const router = require('express').Router();
const HolidayController = require('./controller');

router.get('/:year', HolidayController.list); // List
router.get('/:year/:month/:day', HolidayController.get); // Preview
router.put('/:year/:month/:day', HolidayController.update); // Edit

module.exports = router;

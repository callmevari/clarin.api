const router = require('express').Router();
const DataBaseService = require('../../services/DataBaseService');

router.put('/updateHolidays', async (req, res, next) => {
  try {
    const { collection, value, year } = req.body;
    const index = value.index;
    delete value.index;
    delete value.year;
    let setValue = {};
    setValue['holidays.' + index] = value;
    const result = await DataBaseService.update(collection, { year }, setValue);
    res.json({ result });
  } catch (err) {
    next(err);
  }
});

router.post('/create', async (req, res, next) => {
  try {
    const { collection, value } = req.body;
    const result = await DataBaseService.insert(collection, value);
    res.json({ result });
  } catch (err) {
    next(err);
  }
});

router.get('/collections', async (req, res, next) => {
  try {
    const collections = await DataBaseService.getCollections();
    res.json({
      collections,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

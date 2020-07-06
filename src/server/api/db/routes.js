const router = require('express').Router();
const DataBaseService = require('../../services/DataBaseService');

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

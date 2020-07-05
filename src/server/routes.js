const router = require('express').Router();
const homeRouter = require('./pages/homepage');

router.use(homeRouter);

module.exports = router;
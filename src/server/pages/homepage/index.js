const router = require('express').Router();
const homeController = require('./controller');

router.get('/', homeController.render);

module.exports = router;
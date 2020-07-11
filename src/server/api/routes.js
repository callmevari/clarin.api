const router = require('express').Router();
const holidayRouter = require('./holiday/routes');
const dbRouter = require('./db/routes');
const errorHandler = require('../api/middlewares/errorHandler');

router.use('/feriados', holidayRouter);
router.use('/db', dbRouter);

// convention endpoint to check instance health
router.use('/ping', (req, res) => res.send('pong'));

// here comes all request that did not match any of the routes above
router.use((req, res) => res.status(404).json({ message: 'Not found' }));

// here comes errores passed to next(...)
router.use(errorHandler);

module.exports = router;

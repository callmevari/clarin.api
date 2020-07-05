const router = require('express').Router();
// const usersRouter = require('./users/routes');
// const errorHandler = require('../middlewares/errorHandler');

const { NODE_ENV } = process.env;

// router.use('/users', usersRouter);

// convention endpoint to check instance health
router.use('/ping', (req, res) => res.send('pong'));

// here comes all request that did not match any of the routes above
router.use((req, res) => res.status(404).json({ message: 'Not found' }));

// here comes errores passed to next(...)
// router.use(errorHandler);

module.exports = router;

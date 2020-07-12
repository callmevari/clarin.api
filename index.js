require('dotenv').config();
require('@babel/register')({
  ignore: ['node_modules'],
});
require('ignore-styles').default(['.scss', '.css', '.jpg', '.png', '.gif']);

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser').json();

const app = express();
const routes = require('./src/server/routes');
const apiRoutes = require('./src/server/api/routes');
const { DataBaseService } = require('./src/server/services/index');

const { PORT = 5000, NODE_ENV, MONGO_DB_CONNECT } = process.env;

if (MONGO_DB_CONNECT) DataBaseService.connect();

app.use(express.static(path.join(__dirname, '/public'))); // line provided by a third
app.use(bodyParser);
app.use('/api', apiRoutes);
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`🚀  Server ready at http://localhost:${PORT} in ${NODE_ENV} mode`);
});

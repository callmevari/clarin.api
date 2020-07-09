// migration.js
require('dotenv').config();
const axios = require('axios');
const { DataBaseService } = require('./src/server/services');

class Migration {
  constructor(){
    this.years = [2011, 2020];
    return this.start();
  }

  async start() {
    await DataBaseService.connect();
    console.log(this.years);
    return console.log('start() is not implemented yet');
  };
};

const MigrationService = new Migration();
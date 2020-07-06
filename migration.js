// migration.js
require('dotenv').config();

const { DataBaseService } = require('./src/server/services');

class LoadDataBase {
  async isDataBaseEmpty() {
    try {
      const collections = await DataBaseService.getCollections();
      return collections;
    } catch (err) {
      return err;
    }
  }
}

const initDb = new LoadDataBase();
initDb.isDataBaseEmpty().then(result => console.log(result));



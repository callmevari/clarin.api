// migration.js
require('dotenv').config();
const axios = require('axios');
const { DataBaseService } = require('./src/server/services');

class Migration {
  constructor() {
    this.YEAR_BASE = 2011;
    this.YEAR_LIMIT = process.env.YEAR_LIMIT;
    return this.migrate();
  }

  async migrate() {
    let count = 0;

    try {
      await DataBaseService.connect();
      const isEmpty = await DataBaseService.getCollections();
      if (!isEmpty.length) {
        console.log('Starting process');
        for (let i = this.YEAR_BASE; i <= this.YEAR_LIMIT; i++) {
          const holidays = await axios.get(`http://nolaborables.com.ar/api/v2/feriados/${i}?incluir=opcional`);
          const document = {
            holidays: holidays.data,
            year: i,
          };
          await DataBaseService.insert('holidays', document);
          count++;
          console.log(`Document ${count} (${i}) inserted in db`);
        }
        console.log(`Process ended`);
        return await DataBaseService.close();
      } else {
        throw new Error('There are existing data in the database already. You need to drop it before start the migration');
      }
    } catch (err) {
      console.error(err);
      return await DataBaseService.close();
    }
  }
};

new Migration();
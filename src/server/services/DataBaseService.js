const { MongoClient } = require('mongodb');

const {
  MONGO_DB_USER,
  MONGO_DB_PSW,
  MONGO_DB_HOST,
  MONGO_DB_PORT,
  MONGO_DB_NAME,
} = process.env;

class DataBaseService {
  constructor() {
    if (MONGO_DB_PORT) this.uri = `mongodb://${MONGO_DB_USER}:${MONGO_DB_PSW}@${MONGO_DB_HOST}:${MONGO_DB_PORT}/${MONGO_DB_NAME}`;
    else this.uri = `mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PSW}@${MONGO_DB_HOST}/${MONGO_DB_NAME}?retryWrites=true&w=majority`;
    this.client = new MongoClient(this.uri, { useUnifiedTopology: true, useNewUrlParser: true });
    this.db = undefined;
  }

  async connect() {
    const { client } = this;
    try {
      await client.connect();
      this.db = client.db(MONGO_DB_NAME);
      console.log(`🍃  Connected to database ${this.db.databaseName}`);
    } catch (err) {
      console.error('Error while trying to connect to mongodb, application will crash', err);
      process.exit(1);
    }
  }

  async close() {
    const { client } = this;
    client.close();
    console.log(`🍃  Disconnected from database ${this.db.databaseName}`);
  }

  get(collectionName, query) {
    const collection = this.db.collection(collectionName);
    return collection.findOne(query);
  }

  getMany(collectionName, query) {
    const collection = this.db.collection(collectionName);
    return collection.find(query).toArray();
  }

  async insert(collectionName, value) {
    const collection = this.db.collection(collectionName);
    const { ops, insertedCount } = await collection.insertOne(value);
    return {
      data: ops,
      insertedCount,
    };
  }

  async update(collectionName, query, value) {
    const collection = this.db.collection(collectionName);
    const update = {
      $set: value
    };
    const {
      modifiedCount, upsertedId, upsertedCount, matchedCount,
    } = await collection.updateOne(query, update);

    return {
      modifiedCount,
      upsertedId,
      upsertedCount,
      matchedCount,
    };
  }

  async getCollections() {
    const collections = await this.db.collections();
    return collections.map((collection) => collection.collectionName);
  }
}

module.exports = new DataBaseService();
// mongodb driver for nodejs https://youtu.be/M9Fs-CCe0Jo

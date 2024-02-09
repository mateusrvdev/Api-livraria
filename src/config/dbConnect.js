require("dotenv/config");
const { mongoose } = require("mongoose");

const { DB_USER_NAME, DB_DATABASE_NAME, DB_PASSWORD, DB_RETRY_WRITES } =
  process.env;

mongoose.connect(
  `mongodb+srv://${DB_USER_NAME}:${DB_PASSWORD}@${DB_DATABASE_NAME}.mongodb.net/${DB_RETRY_WRITES}`
);

const db = mongoose.connection;

module.exports = db;

const { mongoose } = require("mongoose");

mongoose.connect(
  "mongodb+srv://mateus:Mateus0386@livraria.aynj3tq.mongodb.net/livraria"
);
const db = mongoose.connection;

module.exports = db;

const express = require("express");
const db = require("./config/dbConnect");
const routes = require("./routes/index");

const app = express();

app.use(express.json());
routes(app); //entender estrutura desse comando!

db.on("error", console.log.bind(console, "Erro de conexão!"));
db.once("open", () => {
  console.log("Conexão com o banco de dados feita com sucesso!");
});

module.exports = app;

const mongoose = require("mongoose");

const livroSchema = new mongoose.Schema({
  Id: { type: String, required: false },
  Título: { type: String, required: true },
  Autor: { type: String, required: true },
  Editora: { type: String, required: true },
  NúmeroDePáginas: { type: Number, required: false },
});

const livros = mongoose.model("livros", livroSchema);

module.exports = livros;

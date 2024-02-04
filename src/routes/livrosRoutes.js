const express = require("express");
const LivroController = require("../controllers/livrosController");

const router = express.Router();

router
  .get("/livros", LivroController.listarLivros)
  .get("/livros/:id", LivroController.buscarLivroPorId)
  .post("/livros", LivroController.adcionarLivro)
  .put("/livros/:id", LivroController.atualizarLivro)
  .delete("/livros/:id", LivroController.deletarLivro);

module.exports = router;

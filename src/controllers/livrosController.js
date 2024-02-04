const livros = require("../models/Livro");

class LivroController {
  static listarLivros = async (req, res) => {
    try {
      const listaDeLivros = await livros.find();

      return res.status(200).json(listaDeLivros);
    } catch (error) {
      res.json(error);
    }
  };

  static buscarLivroPorId = async (req, res) => {
    //static: me permite
    const id = req.params.id;

    try {
      const livroBuscado = await livros.findById(id);

      if (!livroBuscado) {
        return console
          .status(404)
          .send(`Book with id:${id} is not found! Try again with other id!!`);
      }

      res.status(200).json(livroBuscado);
    } catch (error) {
      res.status(500).send(`Problem witch server. Try again!`);
    }
  };

  static adcionarLivro = async (req, res) => {
    try {
      const novoLivro = await livros.create({
        Título: req.body.Título,
        Autor: req.body.Autor,
        Editora: req.body.Editora,
        NúmeroDePáginas: req.body.NúmeroDePáginas,
      });

      const todosOsLivros = await livros.find();

      return res.status(201).json(todosOsLivros);
    } catch (error) {
      res.send("Erro ao adicionar o livro!").json(error);
    }
  };

  static atualizarLivro = async (req, res) => {
    try {
      const id = req.params.id;
      const atualização = req.body;

      const livroBuscado = await livros.findById(id);

      if (!livroBuscado) {
        res.status(404).send(`Book is not found by id:${id}!`);
      }

      await livros.findByIdAndUpdate(id, atualização);

      const livroAtualizado = await livros.findById(id);

      res.status(200).json(livroAtualizado);
    } catch (error) {
      res.send("Erro ao atualizar o livro!");
    }
  };

  static deletarLivro = async (req, res) => {
    try {
      const id = req.params.id;

      const livroBuscado = await livros.findById(id);

      if (!livroBuscado) {
        res.status(404).send(`Book not found by id:${id}!`);
      }

      await livros.deleteOne(livroBuscado);

      const listaDeLivros = await livros.find();

      res.status(202).json(listaDeLivros);
    } catch (error) {
      res.send("Erro ao deletar o livro!");
    }
  };
}

module.exports = LivroController;

const { Filme } = require('../models');

exports.getAllFilmes = async (req, res) => {
  try {
    const filmes = await Filme.findAll();
    res.json(filmes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar filmes' });
  }
};

exports.createFilme = async (req, res) => {
  try {
    const filme = await Filme.create(req.body);
    res.status(201).json(filme);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar filme' });
  }
};

// Outras funções para atualizar e deletar filmes

const { Ator } = require('../models');

exports.getAllAtores = async (req, res) => {
  try {
    const atores = await Ator.findAll();
    res.json(atores);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar atores' });
  }
};

exports.createAtor = async (req, res) => {
  try {
    const ator = await Ator.create(req.body);
    res.status(201).json(ator);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar ator' });
  }
};

// Outras funções para atualizar e deletar atores

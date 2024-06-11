const express = require('express');
const router = express.Router();
const filmesController = require('../controllers/filmesController');

router.get('/', filmesController.getAllFilmes);
router.post('/', filmesController.createFilme);
// Outras rotas para atualizar e deletar filmes

module.exports = router;

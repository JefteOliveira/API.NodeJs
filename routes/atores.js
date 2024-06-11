const express = require('express');
const router = express.Router();
const atoresController = require('../controllers/atoresController');

router.get('/', atoresController.getAllAtores);
router.post('/', atoresController.createAtor);
// Outras rotas para atualizar e deletar atores, caso tiver 

module.exports = router;

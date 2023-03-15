const express = require('express');
const router = express.Router();
const publicationController = require('../controllers/publication.controller');

router.get('/', publicationController.getAll);
router.post('/', publicationController.create);
router.get('/:id', publicationController.getById); 
router.put('/:id', publicationController.update);
router.delete('/:id', publicationController.delete);

module.exports = router;
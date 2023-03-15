const express = require('express');
const router = express.Router();
const authorController = require('../controllers/author.controller');

router.get('/', authorController.getAll);
router.post('/', authorController.create);
router.get('/:id', authorController.getById); 
router.put('/:id', authorController.update);
router.delete('/:id', authorController.delete);

module.exports = router;
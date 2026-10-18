
var express = require('express');
var router = express.Router();
var referencesController = require('../controllers/references');

router.get('/', referencesController.getAll);
router.get('/:id', referencesController.getById);
router.post('/', referencesController.create);
router.put('/:id', referencesController.update);
router.delete('/:id', referencesController.delete);

module.exports = router;

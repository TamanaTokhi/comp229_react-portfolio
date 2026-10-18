
var express = require('express');
var router = express.Router();
var projectsController = require('../controllers/projects');

router.get('/', projectsController.getAll);
router.get('/:id', projectsController.getById);
router.post('/', projectsController.create);
router.put('/:id', projectsController.update);
router.delete('/:id', projectsController.delete);

module.exports = router;

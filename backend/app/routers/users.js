
var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users');

router.get('/', usersController.getAll);
router.get('/:id', usersController.getById);
router.post('/', usersController.create);
router.put('/:id', usersController.update);
router.delete('/:id', usersController.delete);

module.exports = router;

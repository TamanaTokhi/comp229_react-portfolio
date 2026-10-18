
var express = require('express');
var router = express.Router();
var servicesController = require('../controllers/services');

router.get('/', servicesController.getAll);
router.get('/:id', servicesController.getById);
router.post('/', servicesController.create);
router.put('/:id', servicesController.update);
router.delete('/:id', servicesController.delete);

module.exports = router;

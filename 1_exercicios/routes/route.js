const express = require('express');
const router = express.Router();
const controller = require('../controller/ctlExercicio'); // Verifique se o caminho está correto

router.get('/', controller.hello);
router.post('/calculadora', controller.calculadora);

module.exports = router;

const express = require('express');
const controllers = require('../../../controllers/api/index');

const router = express.Router();

router.use('/recipes', controllers.recipes);

module.exports = router;

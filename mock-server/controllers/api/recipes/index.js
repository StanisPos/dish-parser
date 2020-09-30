const express = require('express');
const service = require('../../../services/index');

const router = express.Router();

router.get('/', service.recipes.getRecipes);
router.get('/:id', service.recipes.getRecipesWithId);

module.exports = router;

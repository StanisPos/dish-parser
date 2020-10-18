const express = require('express');
const passport = require('passport');
const service = require('../../../services/index');

const router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false }), service.recipes.getRecipes);

router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  service.recipes.getRecipesWithId,
);

module.exports = router;

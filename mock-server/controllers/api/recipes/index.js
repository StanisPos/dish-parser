const express = require('express');
const passport = require('passport');
const service = require('../../../services/index');

const router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const recipes = await service.recipes.getAllList();

    res.status(200).json({
      recipes,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message || e,
    });
  }
});

router.get('/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const item = await service.recipes.findOneById(req.body?.id);

    res.status(200).json({
      item,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message || e,
    });
  }
});

module.exports = router;

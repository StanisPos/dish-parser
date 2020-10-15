const express = require('express');
const service = require('../../../services/index');

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const test = await service.auth.createNewUser(req.body);

    res.send(test);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get('/signin', async (req, res) => {
  try {
    const token = await service.auth.authentication(req.query);

    res.send(JSON.stringify(token));
  } catch (e) {
    res.status(500).send('Something wrong!');
  }
});

module.exports = router;

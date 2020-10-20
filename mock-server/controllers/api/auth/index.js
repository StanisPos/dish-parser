const express = require('express');
const service = require('../../../services/index');

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const token = await service.auth.createNewUser(req.body);

    res.status(200).json({
      token,
      e: 'Регистрация прошла успешно',
    });
  } catch (e) {
    res.status(500).json({
      e: `Ошибка регистрации: ${e.message || e}`,
    });
  }
});

router.post('/signin', async (req, res) => {
  try {
    const token = await service.auth.authentication(req.body);

    res.status(200).json({
      token,
    });
  } catch (e) {
    res.status(400).json({
      message: `Ошибка авторизации: ${e.message || e}`,
    });
  }
});

module.exports = router;

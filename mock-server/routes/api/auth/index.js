const express = require('express');
const controllers = require('../../../controllers/api/index');

const router = express.Router();

router.use('/auth', controllers.auth);

module.exports = router;

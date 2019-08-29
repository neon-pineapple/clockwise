const express = require('express');
const router = express.Router();

// Require controller modules
const statuses = require('../services/statuses.js');

router.route('/')
    .get(statuses.validationRules, statuses.get);

module.exports = router;
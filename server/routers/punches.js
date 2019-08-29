const express = require('express');
const router = express.Router();

// Require controller modules
const punches = require('../services/punches.js');

router.route('/')
    .post(punches.validationRules, punches.post);

router.route('/:punchId')
    .get(punches.get_punchId)
    .put(punches.put)
    .delete(punches.delete);

router.route('/user/:userId')
    .get(punches.get_userId);

module.exports = router;
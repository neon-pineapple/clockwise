const express = require('express');
const router = express.Router();

// Require controller modules
const users = require('../services/users');

router.route('/')
    .get(users.get)
    .post(users.post);

router.route('/:userId')
    .get(users.get_userId)
    .put(users.put_userId)
    .delete(users.delete_userId);

module.exports = router;
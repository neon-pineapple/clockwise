const express = require('express');
const router = express.Router();

// Require controller modules
// const punchesController = require('../controllers/punchesController.js');

router.route('/')
    .get((req,res) => {
        res.json({message: 'NOT IMPLEMENTED: Reports Router'});
    });

module.exports = router;
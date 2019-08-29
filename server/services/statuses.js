const statusesModel = require('../models/statuses');
const {check, validationResult} = require('express-validator');

exports.validationRules = [];
// TODO: Add validation rules

exports.get = function(req,res) {
    // Optionally accepts a userId via GET variable
    // If passed, determine that user's current status and only return opposite statuses

    res.json(req.params);

    // statusesModel.getValid(1, false)
    //     .then((response) => res.json(response));
}
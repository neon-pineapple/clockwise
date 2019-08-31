const statusesModel = require('../models/statuses');
const {check, validationResult} = require('express-validator');

exports.validationRules = [];
// TODO: Add validation rules

exports.get = function(req,res) {
    // Optionally accepts a currentStatus via GET variable
    // If passed, get only statuses that would be opposite of that - IN for OUT and vice versa
    let currentStatus = typeof(req.query.currentStatus) !== 'undefined' ? req.query.currentStatus : false;

    if(currentStatus) {
        statusesModel.getValid(1, false)
            .then((response) => res.json(response));
    } else {
        statusesModel.get()
            .then((response) => res.json(response));
    }

}
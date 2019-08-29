const punchesModel = require('../models/punches');
const {check, validationResult} = require('express-validator');

exports.validationRules = [check('userId').not().isEmpty(), check('statusId').not().isEmpty(), check('time').optional().isISO8601()];
// TODO: Verify that userId and statusId are real values

exports.post = function(req,res) {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()});
    } else {
        punchesModel.post(req.body)
            .then((response) => res.json(response))
            .catch((sqlError) => {
                if(process.env.NODE_ENV === 'development') {
                    res.json(sqlError);
                }
                console.log(sqlError);
            });
    }
}

exports.get_punchId = function(req,res) {
    res.json({message: 'NOT IMPLEMENTED: Get A Single Punch'});
}

exports.get_userId = function(req,res) {
    res.json({message: 'NOT IMPLEMENTED: Get All Punches for User'});
}

exports.put = function(req,res) {
    res.json({message: 'NOT IMPLEMENTED: Update A Punch'});
}

exports.delete = function(req,res) {
    res.json({message: 'NOT IMPLEMENTED: Delete A Punch'});
}
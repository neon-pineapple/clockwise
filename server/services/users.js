const usersModel = require('../models/users.js');

exports.get = function(req,res) {
    usersModel.get()
        .then((users) => {
            res.json(users);
        })
        .catch((error) => {
            res.json({error: error});
        })
}

exports.get_userId = function(req,res) {
    usersModel.get(req.params.userId)
        .then((user) => {
            res.json(user);
        })
        .catch((error) => {
            res.json({error: error});
        })
}

exports.post = function(req,res) {
    res.json({message: 'NOT IMPLEMENTED: Create User'});
}

exports.put_userId = function(req,res) {
    res.json({message: 'NOT IMPLEMENTED: Update A User'});
}

exports.delete_userId = function(req,res) {
    res.json({message: 'NOT IMPLEMENTED: Delete A User'});
}
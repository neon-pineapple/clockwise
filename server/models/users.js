// Dependencies
const knex = require('knex')(require('../knexfile')[process.env.NODE_ENV]);

// Model setup
const tableName = 'users';
const selectableProps = ['userId', 'createdAt', 'name'];

exports.get = (userId) => {
    let queryPromise = knex.select(selectableProps).from(tableName);
    if(typeof(userId) !== 'undefined') queryPromise.where('userId', userId);
    return queryPromise;
};
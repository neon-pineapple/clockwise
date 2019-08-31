// Dependencies
const knex = require('knex')(require('../knexfile')[process.env.NODE_ENV]);

// Model setup
const tableName = 'punches';
const selectableProps = ['punchId', 'userId', 'statusId', 'time', 'clockedMinutes'];
// TODO: Add join for statusId

exports.post = (body) => {
    let punch = {
        userId: body.userId,
        statusId: body.statusId
    }
    if(typeof(body.time) !== 'undefined') {
        punch.time = body.time;
    }
    let queryPromise = knex(tableName).insert(punch)
    return queryPromise;
};




exports.getLatest = (userId, limit) => {
    // Get the latest punches for the given userId, with an optional limit

    // Validate the limit as a number and default to 5
    limit = typeof(limit) !== 'undefined' && Number.isInteger(limit) ? limit : 5;

    return knex.select(selectableProps).from(tableName)
        .where('userId', userId)
        .orderBy('createdAt', 'desc');
}
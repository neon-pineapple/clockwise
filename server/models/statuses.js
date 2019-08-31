// Dependencies
const knex = require('knex')(require('../knexfile')[process.env.NODE_ENV]);

// Model setup
const tableName = 'statuses';
const selectableProps = ['statusId', 'name', 'isIn'];

exports.get = () => {
    return knex.select(selectableProps).from(tableName);
}

exports.get_statusId = (statusId) => {
    let queryPromise = knex.select(selectableProps).from(tableName);
    if(typeof(statusId) !== 'undefined') queryPromise.where('statusId', statusId);
    return queryPromise;
};

exports.getValid = (currentStatusId, forValidation) => {
    // Return a list of valid statuses given the current status
    // Only returns IN statuses if user is OUT or has never clocked
    // Returns OUT statuses in all other cases

    // If forValidation is set to TRUE, only return an array of valid statusIds
    forValidation = typeof(forValidation) !== 'undefined' && forValidation == true ? true : false; 

    return knex.select('isIn').from(tableName).where('statusId', currentStatusId).first().pluck('isIn')
        .then((row) => {
            // isIn of currentStatus = row[0]
            const isIn = row[0] == 1 ? 0 : 1;

            let subQueryPromise = knex.select(selectableProps).from(tableName)
                .where('isIn', isIn);

            if(forValidation) subQueryPromise.pluck('statusId');

            return subQueryPromise;
        });

}
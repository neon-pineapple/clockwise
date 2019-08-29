
exports.up = function(knex) {
    return knex.schema
    .alterTable('punches', (table) => {
        table.renameColumn('clockedSeconds', 'clockedMinutes');
    })
};

exports.down = function(knex) {
    return knex.schema
    .alterTable('punches', (table) => {
        table.renameColumn('clockedMinutes', 'clockedSeconds');
    })
};

exports.up = function(knex) {
    return knex.schema
    .createTable('users', (table) => {
        table.increments('userId');
        table.datetime('createdAt').default(knex.fn.now()).notNullable();
        table.specificType('updatedAt', 'TIMESTAMP on update CURRENT_TIMESTAMP NULL');
        table.boolean('active').default(1).notNullable();
        table.string('name').notNull();
        table.boolean('isAdmin').default(0);
        table.specificType('authHash', 'char(60)');
    })
    .createTable('statuses', (table) => {
        table.increments('statusId');
        table.datetime('createdAt').default(knex.fn.now()).notNullable();
        table.boolean('active').default(1).notNullable();
        table.string('name').notNullable();
        table.boolean('isIn').default(0).notNullable();
    })
    .createTable('punches', (table) => {
        table.increments('punchId');
        table.integer('userId').unsigned().notNullable().references('userId').inTable('users').onDelete('cascade').onUpdate('cascade');
        table.integer('statusId').unsigned().notNullable().references('statusId').inTable('statuses').onDelete('cascade').onUpdate('cascade');
        table.datetime('createdAt').default(knex.fn.now()).notNullable();
        table.datetime('time').defaultTo(knex.fn.now());
        table.integer('clockedSeconds');
    })
    .raw("ALTER TABLE `punches` ADD `updatedAt` TIMESTAMP on update CURRENT_TIMESTAMP NULL AFTER `createdAt`");
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('punches')
    .dropTableIfExists('statuses')
    .dropTableIfExists('users');
};
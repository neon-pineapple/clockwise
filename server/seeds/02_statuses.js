
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('statuses').del()
      .then(function () {
        // Inserts seed entries
        return knex('statuses').insert([
          {name: 'In', isIn: 1},
          {name: 'Out'}
        ]);
      });
  };
  
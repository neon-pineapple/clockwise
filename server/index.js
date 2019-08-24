// Load dependencies
const express = require('express');

// Setup server
const app = express();

// Setup database
const knex = require('knex')(require('./knexfile')[process.env.NODE_ENV]);

// Setup routes
// index, users, statuses, punches, reports
const users = require('./routes/users');

app.use('/users', users);

// Parse incoming JSON



// Start server
const server = app.listen('3333', () => {
    console.log('Server listening on port 3333');
});
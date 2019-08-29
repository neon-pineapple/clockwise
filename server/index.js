// Load dependencies
const express = require('express');

// Setup server
const app = express();

// Setup routes
// index, users, statuses, punches, reports
const users = require('./routers/users');
const statuses = require('./routers/statuses');
const punches = require('./routers/punches');
const reports = require('./routers/reports');

// Parse incoming JSON
app.use(express.json());

app.use('/users', users);
app.use('/statuses', statuses);
app.use('/punches', punches);
app.use('/reports', reports);

// app.use(express.urlencoded({extended: false}));


// Start server
const server = app.listen('3333', () => {
    console.log('Server listening on port 3333');
});
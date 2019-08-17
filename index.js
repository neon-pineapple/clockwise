// Dependencies
const express = require('express');


// Instantiate Express
const app = express();


app.get('/', function(req, res) {
    res.send('Hello world');
});



// Start the server
app.listen(3000);
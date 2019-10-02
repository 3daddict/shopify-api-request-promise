require('dotenv').config();
const path = require('path');
const express = require('express');

const retrieveAllCustomers = require('./customer/retrieve_all');

const app = express();
const port = process.env.PORT || 3000;

app.get('/retrieve-all-customers', (req, res) => {
     retrieveAllCustomers(() => {
        res.send()
    });
});


app.listen(port, () => {
    console.log('Server listening on port ' + port);
});
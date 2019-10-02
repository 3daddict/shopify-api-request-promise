require('dotenv').config();
const express = require('express');
const retrieveCustomers = require('./customer/retrieve_all');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/retrieve-customers', (req, res) => {
    retrieveCustomers().then( async (body) => {
        let data = body;
        await res.send(data);
    })

});

app.listen(port, () => {
    console.log('Server listening on port ' + port);
});
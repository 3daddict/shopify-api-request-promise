require('dotenv').config();
const express = require('express');
const request = require('request');
const rp = require('request-promise');
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/retrieve-customers', (req, res) => {
    let options = {
        uri: `https://${process.env.API_KEY}:${process.env.API_PASS}@${process.env.SHOPIFY_STORE}.myshopify.com/admin/api/2019-07/customers.json`,
        json: true
    }
    rp(options)
    .then( async (body) => {
        let data = body;
        await res.status(200).send(data);
    })
    .catch((err) => {
        return res.status(400).send(err);
    })
});

app.get('/retrieve-customer-by-id', (req, res) => {
    console.log(req.query)
    try {
        const id = req.query.id;

        let options = {
            uri: `https://${process.env.API_KEY}:${process.env.API_PASS}@${process.env.SHOPIFY_STORE}.myshopify.com/admin/api/2019-10/customers/${id}.json`,
            json: true
        }
        rp(options)
        .then( async (body) => {
            let data = body;
            await res.status(200).send(data);
        })
        .catch((err) => {
            return res.status(400).send(err);
        })
    } catch (e) {
        res.status(404).send();
    }
    
});

app.listen(port, () => {
    console.log('Server listening on port ' + port);
});
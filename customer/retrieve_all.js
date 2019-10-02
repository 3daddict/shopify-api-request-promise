require('dotenv').config()
const rp = require('../node_modules/request-promise');

const retreiveAllCustomers = () => {
    var options = {
        uri: `https://${process.env.API_KEY}:${process.env.API_PASS}@${process.env.SHOPIFY_STORE}.myshopify.com/admin/api/2019-07/customers.json`,
        json: true
    };
     
    rp(options)
        .then(function (parsedBody) {
            return parsedBody
        })
        .catch(function (err) {
            if (err) console.log('Error: ',err);
        });
}

module.exports = retreiveAllCustomers;

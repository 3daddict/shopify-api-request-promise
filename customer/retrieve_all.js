require('dotenv').config({path:'../.env'})
const rp = require('../node_modules/request-promise');

const retreiveAllCustomers = () => {

    let options = {
        uri: `https://${process.env.API_KEY}:${process.env.API_PASS}@${process.env.SHOPIFY_STORE}.myshopify.com/admin/api/2019-07/customers.json`,
            json: true
    }
    return rp(options);
}

module.exports = retreiveAllCustomers;
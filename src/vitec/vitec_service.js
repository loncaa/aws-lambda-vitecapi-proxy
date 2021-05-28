const axios = require('axios');
const helper = require('./vitec_helper');

const token = process.env['BASIC_TOKEN'];
const customerId = process.env['CUSTOMER_ID'];

function createContact(payload) {
    payload["CustomerId"] = customerId;

    const url = "https://connect.maklare.vitec.net/Contacts/UpdatePerson";

    return axios.post(url, payload, {
        headers: {
            'Authorization': token
        }
    })
}

function createSearchProfile(contactId, payload) {
    const apiPayload = helper.generateCreateSearchProfilePayload(payload["property_location"], payload["property_size"], payload["propery_type"]);

    const url = `https://connect.maklare.vitec.net/CRM/SearchProfile/${customerId}/${contactId}`;

    return axios.post(url, apiPayload, {
        headers: {
            'Authorization': token
        }
    })
}

module.exports = {
    createContact,
    createSearchProfile
}
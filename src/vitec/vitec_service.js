const axios = require('axios');
const helper = require('./vitec_helper');

function createContact(payload) {

    const apiPayload = helper.generateCreateContactPayload(payload)

    const url = "https://connect.maklare.vitec.net/Contacts/UpdatePerson";
    const token = process.env['BASIC_TOKEN'];

    return axios.post(url, apiPayload, {
        headers: {
            'Authorization': token
        }
    })
}

function createSearchProfile(customerId, contactId, payload) {
    const apiPayload = helper.generateCreateSearchProfilePayload(payload["property_location"], payload["property_size"], payload["propery_type"]);

    const url = `https://connect.maklare.vitec.net/CRM/SearchProfile/${customerId}/${contactId}`;
    const token = process.env['BASIC_TOKEN'];

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
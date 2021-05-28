const VitecService = require('./src/vitec/vitec_service');

//zip -r function.zip .  

const headers = {
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Accept": "*/*",
    "Content-Type": 'application/json'
}

exports.handler = async (payload, _, __) => {

    if (!payload) {
        return {
            statusCode: 300,
            headers: headers,
            body: {
                message: 'Data not found.'
            }
        }
    }

    const response = await VitecService.createContact({ ...payload });
    const { data } = response;

    await VitecService.createSearchProfile(data, { ...payload }).catch(error => console.log('error', error));

    return {
        statusCode: 200,
        headers: headers,
        body: data
    }
}
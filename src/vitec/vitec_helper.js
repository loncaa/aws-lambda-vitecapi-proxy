function generateCreateSearchProfilePayload(property_location, property_size, propery_type) {
    if (!property_location || !property_size || !propery_type) {
        return new Error("One of required fields are undefined.");
    }

    const payload = {
        "estateType": 1,
        "areaIds": [],
        "municipIds": [],
        "livingSpace": { "maxValue": null, "minValue": null },
        "numberOfRooms": { "maxValue": null, "minValue": null },
        "price": { "maxValue": null, "minValue": null },
        "specialRequest": null,
        "drawnAreas": [],
        "increasedRequirementIds": [],
        "monthlyFee": null,
        "plotArea": { "maxValue": null, "minValue": null },
        "bedrooms": null
    }


    payload["estateType"] = 1;

    switch (propery_type.trim()) {
        case "Bostadsfastighet":
            break;
        case "Industrifastighet":
            break;
        case "Lagerfastighet":
            break;
        case "Kontorsfastighet":
            break;
        case "Mark":
            break;
        case "Projektfastighet":
            break;
        case "Samhällsfastighet":
            break;
        case "Egenanvändare":
            break;
    }

    const regex = /\d+/g;
    const limits = property_size.match(regex);

    if (limits.length === 2) {
        payload["plotArea"]["maxValue"] = limits[1];
        payload["plotArea"]["minValue"] = limits[0];
    } else if (limits[0] == 500) {
        payload["plotArea"]["maxValue"] = limits[0];
    } else if (limits[0] == 5000) {
        payload["plotArea"]["minValue"] = limits[0];
    }

    payload["specialRequest"] = property_location + " " + propery_type + " " + property_size;

    return payload;
}

module.exports = {
    generateCreateSearchProfilePayload
}
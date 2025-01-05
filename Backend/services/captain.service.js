const captainModel = require("../models/captain.model")

module.exports.createCaptain = async ({
    firstName, lastName, email, password, color, vehicleType, capacity, plate
}) => {
    if (!firstName || !lastName || !email || !password || !color || !vehicleType || !capacity || !plate) {
        throw new Error("Please fill all the fields");
    }
    const captain = await captainModel.create({
        fullName: {
            firstName,
            lastName
        },
        email,
        password,
        vehicle: {
            color,
            vehicleType,
            capacity,
            plate
        }
    });
    return captain;
}
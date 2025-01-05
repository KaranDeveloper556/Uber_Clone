const captainModel = require('../models/captain.model')
const captainService = require('../services/captain.service')
const { validationResult } = require('express-validator')
const BlacklistToken = require('../models/blacklistToken.model')

module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { fullName, email, password, vehicle } = req.body;

    const NewCaptain = new captainModel()
    const hashPassword = await NewCaptain.hashingPassword(password);

    const isCaptainAlreadyExist = await captainModel.findOne({ email: email });
    if (isCaptainAlreadyExist) {
        return res.status(400).json({ message: 'Captain already exist' })
    }

    const captain = await captainService.createCaptain({
        firstName: fullName.firstName,
        lastName: fullName.lastName,
        email,
        password: hashPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        vehicleType: vehicle.vehicleType,
        capacity: vehicle.capacity
    })

    const token = await captain.generateAuthToken()
    res.status(201).json({ token, captain })
}

module.exports.loginCaptain = async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body;

    const Captain = await captainModel.findOne({ email }).select('+password');
    if (!Captain) {
        return res.status(400).json({ message: 'Invalid email or password' })
    }


    const isMatch = await Captain.comparePassword(password)
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' })
    }

    const token = await Captain.generateAuthToken()
    res.cookie('token', token)
    res.status(200).json({ token, Captain })
}

module.exports.getCaptainProfile = async (req, res, next) => {
    res.status(200).json(req.Captain)
}
module.exports.logoutCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    await BlacklistToken.create({ token })
    res.clearCookie('token')

    res.status(200).json({ message: 'Logout successfully' })
}
const userModal = require('../models/user.model')
const captainModel = require('../models/captain.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const BlacklistToken = require('../models/blacklistToken.model')

module.exports.authUser = async (req, res, next) => {

    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token || typeof token !== 'string') {
        return res.status(401).json({ message: 'Unauthorization' });
    }


    console.log(token)

    const isBlacklisted = await BlacklistToken.findOne({ token: token })
    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModal.findById(decoded._id)
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }
        req.user = user;
        return next()
    } catch (err) {
        res.status(401).json({ message: 'Unauthorized' });
    }
}

module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    const isBlacklisted = await BlacklistToken.findOne({ token: token })
    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        const captain = await captainModel.findById(decoded._id)
        console.log(captain);
        if (!captain) {
            return res.status(401).json({ message: 'Captain not found' });
        }

        req.captain = captain;

        return next()

    } catch (err) {
        res.status(401).json({ message: 'Unauthorized' });
    }
}
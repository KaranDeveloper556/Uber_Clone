const userModal = require('../modals/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    const isBlacklisted = await userModal.findOne({ token: token })
    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = userModal.findById(decoded._id)

        req.user = user;

        return next()
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid' });
    }
}
const userModal = require("../modals/user.model");
const userService = require("../services/user.service");
const BlacklistToken = require("../modals/blacklistToken.model");

const { validationResult } = require('express-validator');

module.exports.registerUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullName, email, password } = req.body;

    console.log(fullName, email, password);

    const NewUser = new userModal();
    const hashedPassword = await NewUser.hashingPassword(password);
    const user = await userService.createUser({
        firstName: fullName.firstName,
        lastName: fullName.lastName,
        email,
        password: hashedPassword
    });

    const token = user.generateAuthToken();
    res.status(201).json({ user, token });
}

module.exports.loginUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const user = await userModal.findOne({ email }).select("+password");
    if (!user) {
        return res.status(401).json({ message: 'Invalid email and password' })
    }

    const isMatch = await user.comparePassword(password)
    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email and password' })
    }

    const token = user.generateAuthToken();
    res.cookie('token', token);
    res.status(200).json({ token, user })
}

module.exports.getUserProfile = async (req, res, next) => {
    res.status(200).json(req.user);
}

module.exports.logoutUser = async (req, res) => {
    res.clearCookie('token')
    const token = req.cookie.token || req.header.authorization?.split(' ')[1];
    await BlacklistToken.create({ token })
    res.status(200).json({ massage: 'Logged Out' })
}

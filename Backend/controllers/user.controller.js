const userModal = require("../modals/user.modal");
const userService = require("../services/user.service");

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
